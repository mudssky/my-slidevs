<template>
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useGuiVisibility } from '../hooks/useGuiVisibility'
const domRef = ref()
const slideContext = useSlideContext()

onMounted(() => {
  // 获取幻灯片容器尺寸（优先使用SlideV配置的尺寸，否则使用窗口尺寸）
  const slideWidth =
    slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const slideHeight =
    slideContext.$slidev.configs.canvasWidth /
      slideContext.$slidev.configs.aspectRatio || window.innerHeight

  // 1. 创建场景 - 所有3D对象的容器
  const scene = new THREE.Scene()

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
  const cameraHelper = new THREE.CameraHelper(camera2)
  scene.add(cameraHelper)

  function onChange() {
    camera2.updateProjectionMatrix()
    cameraHelper.update()
  }
  const { create } = useGuiVisibility(domRef)
  const gui = create()
  gui.add(camera2, 'fov', [30, 60, 10]).onChange(onChange)
  gui
    .add(camera2, 'aspect', {
      '16/9': 16 / 9,
      '4/3': 4 / 3,
    })
    .onChange(onChange)
  gui.add(camera2, 'near', 0, 300).onChange(onChange)
  gui.add(camera2, 'far', 300, 800).onChange(onChange)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(slideWidth, slideHeight)

  function render() {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }

  render()

  domRef.value.appendChild(renderer.domElement)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const controls = new OrbitControls(camera, renderer.domElement)
})
</script>
