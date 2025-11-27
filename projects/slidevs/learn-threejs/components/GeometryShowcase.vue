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
  camera.position.set(250, 200, 250)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  renderer.setClearColor(0xf5f5f5, 1)
  domRef.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  const light = new THREE.PointLight(0xffffff, 2000)
  light.position.set(200, 200, 200)
  scene.add(light)
  // 环境光：均匀照亮场景
  const ambient = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambient)
  // 半球光：天空/地面两色混合
  const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 0.5)
  scene.add(hemi)
  const group = new THREE.Group()
  // 基础材质：不受光照影响
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(80, 80, 80),
    new THREE.MeshBasicMaterial({ color: 0x2194f3 }),
  )
  box.position.x = -120
  // Phong材质：高光可调
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(50, 32, 16),
    new THREE.MeshPhongMaterial({ color: 0x8bc34a, shininess: 60 }),
  )
  // Standard材质：金属度/粗糙度
  const torus = new THREE.Mesh(
    new THREE.TorusKnotGeometry(30, 10, 100, 16),
    new THREE.MeshStandardMaterial({
      color: 0xff9800,
      metalness: 0.6,
      roughness: 0.4,
    }),
  )
  torus.position.x = 120
  group.add(box)
  group.add(sphere)
  group.add(torus)
  scene.add(group)
  function animate() {
    if (stop) return
    box.rotation.y += 0.01
    sphere.rotation.x += 0.008
    torus.rotation.z += 0.012
    controls.update()
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
