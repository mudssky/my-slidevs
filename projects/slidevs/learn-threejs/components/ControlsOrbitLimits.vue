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
  camera.position.set(200, 160, 200)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  domRef.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  // 限制仰角与缩放距离范围
  controls.maxPolarAngle = Math.PI * 0.95
  controls.minDistance = 100
  controls.maxDistance = 500
  const { createGui } = useGuiAutoVisibility(domRef)
  const gui = createGui()
  // 通过 GUI 动态调整控制器限制参数
  gui.add(controls, 'maxPolarAngle', 0.1, Math.PI)
  gui.add(controls, 'minDistance', 10, 400)
  gui.add(controls, 'maxDistance', 50, 800)
  const grid = new THREE.GridHelper(600, 20)
  scene.add(grid)
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(60, 60, 60),
    new THREE.MeshStandardMaterial({ color: 0x673ab7 }),
  )
  scene.add(new THREE.AmbientLight(0xffffff, 0.4))
  const light = new THREE.PointLight(0xffffff, 1500)
  light.position.set(200, 200, 200)
  scene.add(light)
  scene.add(mesh)
  function animate() {
    if (stop) return
    mesh.rotation.y += 0.01
    controls.update()
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
