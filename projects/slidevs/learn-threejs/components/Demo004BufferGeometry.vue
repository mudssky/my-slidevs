<template>
  <!-- 承载 WebGL 画布的 DOM 容器 -->
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

/*
  学习提示
  - 本示例演示如何使用 BufferGeometry/BufferAttribute 手动定义顶点，
    搭配 MeshBasicMaterial 渲染为三角面，并通过 OrbitControls 进行交互。
  - 演示在 Slidev 中运行，优先采用 Slidev 的画布尺寸设置以保证比例一致。
*/

// 获取模板中的容器引用
const domRef = ref()
const slideContext = useSlideContext()
let raf = 0
let stop = false
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let scene: THREE.Scene | null = null

/**
 * 创建一个 BufferGeometry 几何体
 * @returns {THREE.Mesh} 一个 BufferGeometry 几何体
 */
function getMesh() {
  // 创建一个空的几何体容器
  const geometry = new THREE.BufferGeometry()

  // 顶点坐标：按 [x, y, z] 三元组排列
  // 共 6 个顶点 → 组成 2 个三角面（每 3 个顶点为一个三角形）
  const vertices = new Float32Array([
    // 三角形 1
    0, 0, 0, 100, 0, 0, 0, 100, 0,
    // 三角形 2
    0, 0, 10, 0, 0, 100, 100, 0, 10,
  ])

  // 将顶点数组包装为缓冲区属性；第二个参数 itemSize=3 表示每个顶点由 3 个分量组成
  const attribute = new THREE.BufferAttribute(vertices, 3)
  // 绑定到几何体的 position 属性
  geometry.attributes.position = attribute

  // 基础材质：纯色、无光照响应，适合几何结构演示
  const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color('orange'),
  })

  // 由几何体与材质组合得到网格对象
  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}
onMounted(() => {
  // 获取幻灯片容器尺寸（优先使用 Slidev 配置的尺寸，否则使用窗口尺寸）
  const slideWidth =
    slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const slideHeight =
    (slideContext.$slidev.configs.canvasWidth &&
      slideContext.$slidev.configs.canvasWidth /
        slideContext.$slidev.configs.aspectRatio) ||
    window.innerHeight

  // 场景：所有 3D 对象的根容器
  scene = new THREE.Scene()

  const mesh = getMesh()
  // 将网格加入场景
  scene.add(mesh)
  // 坐标轴辅助线，可用于理解场景坐标系
  // const axesHelper = new THREE.AxesHelper(200)
  // scene.add(axesHelper)

  // 透视相机：参数依次为 视场角(FOV)、长宽比、近裁剪面、远裁剪面
  const camera = new THREE.PerspectiveCamera(
    60,
    slideWidth / slideHeight,
    1,
    1000,
  )
  // 设置相机位置并朝向原点
  camera.position.set(200, 200, 200)
  camera.lookAt(0, 0, 0)

  // 渲染器：负责将场景与相机绘制到画布
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(slideWidth, slideHeight)

  function render() {
    if (stop) return
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(render)
  }

  render()

  // 将 WebGL 画布元素挂载到模板中的容器
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const t = (mesh.material && (mesh.material as any).map) as
      | THREE.Texture
      | undefined
    t && t.dispose()
  })
}

onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  controls && controls.dispose()
  if (renderer) {
    renderer.dispose()
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
