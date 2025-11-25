<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { disposeThreeResources } from '@mudssky/slidev-addon-default/composables/useThreeCleanup'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const domRef = ref()
const slideContext = useSlideContext()
let stop = false
let raf = 0
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let scene: THREE.Scene | null = null
let mixer: THREE.AnimationMixer | null = null
onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  disposeThreeResources({ renderer, scene, controls })
  mixer = null
  renderer = null
  controls = null
  scene = null
})
onMounted(() => {
  scene = new THREE.Scene()
  const w = slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const h =
    slideContext.$slidev.configs.canvasWidth /
      slideContext.$slidev.configs.aspectRatio || window.innerHeight
  // 透视相机：视野60°，近裁剪0.1，远裁剪1000
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
  camera.position.set(150, 120, 180)
  // 抗锯齿渲染器，并根据设备像素比提升清晰度
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  domRef.value.appendChild(renderer.domElement)
  // 轨道控制器，支持阻尼让交互更平滑
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  // 环境光 + 点光源照亮模型
  scene.add(new THREE.AmbientLight(0xffffff, 0.5))
  const light = new THREE.PointLight(0xffffff, 1000)
  light.position.set(100, 150, 100)
  scene.add(light)
  mixer = null
  // 加载外部 glTF 模型，成功时加入场景并播放动画
  const loader = new GLTFLoader()
  loader.load(
    'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/CesiumMan/glTF/CesiumMan.gltf',
    (gltf) => {
      scene!.add(gltf.scene)
      if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(gltf.scene)
        const action = mixer.clipAction(gltf.animations[0])
        action.play()
      }
    },
    undefined,
    () => {
      // 加载失败时展示一个占位立方体
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(60, 60, 60),
        new THREE.MeshStandardMaterial({ color: 0x607d8b }),
      )
      scene.add(mesh)
    },
  )
  // 动画时钟用于驱动混合器更新
  const clock = new THREE.Clock()
  function animate() {
    if (stop) return
    const dt = clock.getDelta()
    if (mixer) mixer.update(dt)
    controls.update()
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
