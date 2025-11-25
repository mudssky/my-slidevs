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
const vertex = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`
// 顶点着色器：传递 uv 到片元，并计算裁剪空间位置
const fragment = `
  varying vec2 vUv;
  void main(){
    vec3 c = vec3(vUv.x, vUv.y, 1.0 - vUv.x);
    gl_FragColor = vec4(c, 1.0);
  }
`
onMounted(() => {
  scene = new THREE.Scene()
  const w = slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const h =
    slideContext.$slidev.configs.canvasWidth /
      slideContext.$slidev.configs.aspectRatio || window.innerHeight
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
  camera.position.set(0, 0, 200)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(w, h)
  domRef.value.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  // 使用 ShaderMaterial 自定义着色效果
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(160, 160, 1, 1),
    new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
    }),
  )
  scene.add(plane)
  function animate() {
    if (stop) return
    // 每帧旋转一点，观察着色效果
    plane.rotation.z += 0.01
    controls.update()
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(animate)
  }
  animate()
})
</script>
