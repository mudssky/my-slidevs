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
let raf = 0
let stop = false
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let scene: THREE.Scene | null = null

onMounted(() => {
  // 获取幻灯片容器尺寸（优先使用SlideV配置的尺寸，否则使用窗口尺寸）
  const slideWidth =
    slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const slideHeight =
    slideContext.$slidev.configs.canvasWidth /
      slideContext.$slidev.configs.aspectRatio || window.innerHeight

  // 1. 创建场景 - 所有3D对象的容器
  scene = new THREE.Scene()

  // const axesHelper = new THREE.AxesHelper(200)
  // scene.add(axesHelper)

  const camera = new THREE.PerspectiveCamera(
    60,
    slideWidth / slideHeight,
    1,
    1000,
  )
  camera.position.set(200, 200, 200)
  camera.lookAt(0, 0, 0)

  const camera2 = new THREE.PerspectiveCamera(20, 16 / 9, 100, 300)
  // 使用 CameraHelper 可视化相机2的视锥
  const cameraHelper = new THREE.CameraHelper(camera2)
  scene.add(cameraHelper)

  function onChange() {
    camera2.updateProjectionMatrix()
    cameraHelper.update()
  }
  const { createGui } = useGuiAutoVisibility(domRef)
  const gui = createGui()
  // 通过 GUI 动态调整相机2参数并更新辅助器
  gui.add(camera2, 'fov', [30, 60, 10]).onChange(onChange)
  gui
    .add(camera2, 'aspect', {
      '16/9': 16 / 9,
      '4/3': 4 / 3,
    })
    .onChange(onChange)
  gui.add(camera2, 'near', 0, 300).onChange(onChange)
  gui.add(camera2, 'far', 300, 800).onChange(onChange)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(slideWidth, slideHeight)

  function render() {
    if (stop) return
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(render)
  }

  render()

  domRef.value.appendChild(renderer.domElement)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  controls = new OrbitControls(camera, renderer.domElement)
})

const disposeScene = (s: THREE.Scene) => {
  s.traverse((obj) => {
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
  scene && disposeScene(scene)
  renderer = null
  controls = null
  scene = null
})
</script>
