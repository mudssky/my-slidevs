<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useGuiAutoVisibility } from '@/hooks'

const domRef = ref()
const slideContext = useSlideContext()
let stop = false
onUnmounted(() => {
  stop = true
})
onMounted(() => {
  const scene = new THREE.Scene()
  const w = slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const h =
    slideContext.$slidev.configs.canvasWidth /
      slideContext.$slidev.configs.aspectRatio || window.innerHeight
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
  camera.position.set(150, 120, 180)
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  domRef.value.appendChild(renderer.domElement)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(60, 60, 60),
    new THREE.MeshStandardMaterial({ color: 0x2196f3 }),
  )
  scene.add(new THREE.AmbientLight(0xffffff, 0.4))
  const light = new THREE.PointLight(0xffffff, 800)
  light.position.set(100, 150, 100)
  scene.add(light)
  scene.add(mesh)
  const mixer = new THREE.AnimationMixer(mesh)
  // 位置关键帧：在3秒内沿路径移动
  const posTrack = new THREE.VectorKeyframeTrack(
    '.position',
    [0, 1, 2, 3],
    [0, 0, 0, 80, 0, 0, 0, 80, 0, -80, 0, 0],
  )
  // 旋转关键帧：绕Y轴旋转
  const rotTrack = new THREE.VectorKeyframeTrack(
    '.rotation',
    [0, 1.5, 3],
    [0, 0, 0, 0, Math.PI, 0, 0, Math.PI * 2, 0],
  )
  const clipA = new THREE.AnimationClip('move', 3, [posTrack])
  const clipB = new THREE.AnimationClip('rotate', 3, [rotTrack])
  const actionA = mixer.clipAction(clipA)
  const actionB = mixer.clipAction(clipB)
  actionA.play()
  const { createGui } = useGuiAutoVisibility(domRef)
  const gui = createGui()
  // 点击触发交叉淡入，从移动动作过渡到旋转动作
  gui.add({ blend: () => actionA.crossFadeTo(actionB, 0.5, false) }, 'blend')
  const clock = new THREE.Clock()
  function animate() {
    if (stop) return
    mixer.update(clock.getDelta())
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()
})
</script>
