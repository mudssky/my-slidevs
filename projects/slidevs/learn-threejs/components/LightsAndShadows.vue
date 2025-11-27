<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { disposeThreeResources } from '@mudssky/slidev-addon-default'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const domRef = ref()
const slideContext = useSlideContext()
let stop = false
let raf = 0
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let scene: THREE.Scene | null = null
onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  disposeThreeResources({ renderer, scene, controls })
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
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
  camera.position.set(150, 120, 180)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  // 开启阴影并使用柔和阴影类型
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  domRef.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(500, 500),
    new THREE.MeshStandardMaterial({ color: 0x9e9e9e }),
  )
  ground.rotation.x = -Math.PI / 2
  // 地面接收阴影
  ground.receiveShadow = true
  scene.add(ground)
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(30, 32, 16),
    new THREE.MeshStandardMaterial({ color: 0x03a9f4 }),
  )
  sphere.position.set(0, 40, 0)
  // 球体投射阴影
  sphere.castShadow = true
  scene.add(sphere)
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
  dirLight.position.set(100, 200, 100)
  // 平行光开启阴影并调整阴影相机参数提高清晰度
  dirLight.castShadow = true
  dirLight.shadow.mapSize.set(1024, 1024)
  dirLight.shadow.camera.near = 10
  dirLight.shadow.camera.far = 500
  dirLight.shadow.camera.left = -150
  dirLight.shadow.camera.right = 150
  dirLight.shadow.camera.top = 150
  dirLight.shadow.camera.bottom = -150
  scene.add(dirLight)
  let t = 0
  function animate() {
    if (stop) return
    t += 0.01
    sphere.position.x = Math.sin(t) * 80
    sphere.position.z = Math.cos(t) * 80
    controls.update()
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
