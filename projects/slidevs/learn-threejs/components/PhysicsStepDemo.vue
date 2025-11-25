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
let raf = 0
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let scene: THREE.Scene | null = null
onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  controls && controls.dispose()
  if (renderer) {
    renderer.dispose()
    // @ts-expect-error forceContextLoss
    renderer.forceContextLoss && renderer.forceContextLoss()
    const el = renderer.domElement
    el && el.parentNode && el.parentNode.removeChild(el)
  }
  if (scene) {
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      const g = mesh.geometry as THREE.BufferGeometry | undefined
      const m = mesh.material as THREE.Material | THREE.Material[] | undefined
      if (Array.isArray(m)) m.forEach((mm) => mm && mm.dispose())
      else if (m) m.dispose()
      if (g) g.dispose()
      // @ts-expect-error map
      const t = (mesh.material && (mesh.material as any).map) as THREE.Texture | undefined
      t && t.dispose()
    })
  }
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
  domRef.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  scene.add(new THREE.AmbientLight(0xffffff, 0.4))
  const light = new THREE.PointLight(0xffffff, 800)
  light.position.set(100, 150, 100)
  scene.add(light)
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 400),
    new THREE.MeshStandardMaterial({ color: 0x9e9e9e }),
  )
  ground.rotation.x = -Math.PI / 2
  scene.add(ground)
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(20, 32, 16),
    new THREE.MeshStandardMaterial({ color: 0xe91e63 }),
  )
  ball.position.set(0, 150, 0)
  scene.add(ball)
  // 简易物理：速度、重力加速度、弹性系数
  const vel = new THREE.Vector3(0, 0, 0)
  const g = 200
  const restitution = 0.6
  const clock = new THREE.Clock()
  function animate() {
    if (stop) return
    const dt = clock.getDelta()
    // 速度积分与位置更新
    vel.y -= g * dt
    ball.position.y += vel.y * dt
    if (ball.position.y < 20) {
      ball.position.y = 20
      // 触地反弹并引入能量损失
      vel.y = -vel.y * restitution
      // 阈值以下停止弹跳
      if (Math.abs(vel.y) < 10) vel.y = 0
    }
    controls.update()
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
