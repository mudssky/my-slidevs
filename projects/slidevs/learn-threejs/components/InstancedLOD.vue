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
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 2000)
  camera.position.set(300, 300, 300)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  domRef.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  scene.add(new THREE.AmbientLight(0xffffff, 0.4))
  const light = new THREE.PointLight(0xffffff, 1000)
  light.position.set(200, 300, 200)
  scene.add(light)
  const count = 400
  const geo = new THREE.BoxGeometry(10, 10, 10)
  const mat = new THREE.MeshStandardMaterial({ color: 0x4caf50 })
  // InstancedMesh：一次性绘制多实例以提升性能
  const inst = new THREE.InstancedMesh(geo, mat, count)
  const m = new THREE.Matrix4()
  let idx = 0
  for (let x = -10; x < 10; x++) {
    for (let z = -10; z < 10; z++) {
      // 为每个实例设置变换矩阵
      m.setPosition(x * 20, 0, z * 20)
      inst.setMatrixAt(idx++, m)
    }
  }
  inst.instanceMatrix.needsUpdate = true
  scene.add(inst)
  function animate() {
    if (stop) return
    inst.rotation.y += 0.005
    controls.update()
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
