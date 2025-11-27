<template>
  <!-- 承载 WebGL 画布的 DOM 容器 -->
  <div ref="domRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { disposeThreeResources } from '@mudssky/slidev-addon-default'

/*
  学习提示
  - 本示例演示如何使用 BufferGeometry/BufferAttribute 手动定义顶点，
    搭配 MeshBasicMaterial 渲染为三角面，并通过 OrbitControls 进行交互。
  - 演示在 Slidev 中运行，优先采用 Slidev 的画布尺寸设置以保证比例一致。
*/

const domRef = ref()
const slideContext = useSlideContext()
console.log('当前模式:', slideContext.$renderContext.value)
let raf = 0
let stop = false
let renderer: THREE.WebGLRenderer | null = null
let orbitControls: OrbitControls | null = null
let scene: THREE.Scene | null = null
let axesHelperInst: THREE.AxesHelper | null = null

const props = withDefaults(
  defineProps<{
    object3d?: THREE.Object3D | THREE.Object3D[]
    axesHelper?: boolean | number
    fov?: number
    near?: number
    far?: number
    cameraPosition?: { x: number; y: number; z: number }
    controls?: boolean
    background?: string
    onFrame?: (ctx: {
      scene: THREE.Scene
      camera: THREE.Camera
      renderer: THREE.WebGLRenderer
      THREE: typeof THREE
    }) => void
  }>(),
  {
    axesHelper: false,
    fov: 60,
    near: 1,
    far: 1000,
    cameraPosition: () => ({ x: 200, y: 200, z: 200 }),
    controls: true,
  },
)

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

  if (props.background) {
    scene.background = new THREE.Color(props.background)
  }

  // 坐标轴辅助线，可用于理解场景坐标系
  const axesConf = props.axesHelper
  if (axesConf !== false) {
    const size = typeof axesConf === 'number' ? axesConf : 200
    axesHelperInst = new THREE.AxesHelper(size)
    scene.add(axesHelperInst)
  }

  const objs = props.object3d
  if (objs) {
    if (Array.isArray(objs)) {
      objs.forEach((o) => scene!.add(o))
    } else {
      scene!.add(objs)
    }
  }

  // 透视相机：参数依次为 视场角(FOV)、长宽比、近裁剪面、远裁剪面
  const camera = new THREE.PerspectiveCamera(
    props.fov,
    slideWidth / slideHeight,
    props.near,
    props.far,
  )
  // 设置相机位置并朝向原点
  const cp = props.cameraPosition
  camera.position.set(cp.x, cp.y, cp.z)
  camera.lookAt(0, 0, 0)

  // 渲染器：负责将场景与相机绘制到画布
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(slideWidth, slideHeight)

  function render() {
    if (stop) return
    if (props.onFrame) {
      props.onFrame({ scene: scene!, camera, renderer: renderer!, THREE })
    }
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(render)
  }

  render()

  // 将 WebGL 画布元素挂载到模板中的容器
  domRef.value.appendChild(renderer.domElement)

  if (props.controls !== false) {
    orbitControls = new OrbitControls(camera, renderer.domElement)
  }
})

onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  disposeThreeResources({ renderer, scene, controls: orbitControls })
  renderer = null
  orbitControls = null
  scene = null
  axesHelperInst = null
})
</script>
