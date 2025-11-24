<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
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
  camera.position.set(250, 200, 250)
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  renderer.setClearColor(0xf5f5f5, 1)
  domRef.value.appendChild(renderer.domElement)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  const light = new THREE.PointLight(0xffffff, 2000)
  light.position.set(200, 200, 200)
  scene.add(light)
  const ambient = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambient)
  const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 0.5)
  scene.add(hemi)
  const group = new THREE.Group()
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(80, 80, 80),
    new THREE.MeshBasicMaterial({ color: 0x2194f3 }),
  )
  box.position.x = -120
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(50, 32, 16),
    new THREE.MeshPhongMaterial({ color: 0x8bc34a, shininess: 60 }),
  )
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
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()
})
</script>
