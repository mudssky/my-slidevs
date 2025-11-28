<template>
  <div class="mesh-container">
    <div ref="domRef"></div>
    <div v-if="hasTitle" class="mesh-title">
      <slot name="title">
        <span class="mesh-title-text">{{ props.title }}</span>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, useSlots } from 'vue'
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
    lights?: THREE.Light | THREE.Light[]
    defaultLight?:
      | false
      | {
          type?: 'ambient' | 'hemisphere' | 'directional' | 'point' | 'spot'
          color?: string
          intensity?: number
          position?: { x: number; y: number; z: number }
          skyColor?: string
          groundColor?: string
        }
    enableShadows?: boolean
    title?: string
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
    defaultLight: false,
    enableShadows: false,
  },
)

const slots = useSlots()
const hasTitle = computed(() => !!slots.title || !!props.title)

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

  // 光源：根据 props 添加光照
  const createdLights: THREE.Light[] = []
  const addLight = (light: THREE.Light) => {
    scene!.add(light)
    createdLights.push(light)
  }

  if (props.lights) {
    if (Array.isArray(props.lights)) {
      props.lights.forEach((l) => addLight(l))
    } else {
      addLight(props.lights)
    }
  } else if (props.defaultLight !== false) {
    const conf = props.defaultLight || {}
    const type = conf.type || 'ambient'
    const color = conf.color || '#ffffff'
    const intensity = conf.intensity ?? 0.8
    const pos = conf.position || { x: 200, y: 300, z: 150 }
    if (type === 'ambient') {
      addLight(new THREE.AmbientLight(color, intensity))
    } else if (type === 'hemisphere') {
      const sky = conf.skyColor || '#ffffff'
      const ground = conf.groundColor || '#666666'
      addLight(new THREE.HemisphereLight(sky, ground, intensity))
    } else if (type === 'directional') {
      const dl = new THREE.DirectionalLight(color, intensity)
      dl.position.set(pos.x, pos.y, pos.z)
      addLight(dl)
    } else if (type === 'point') {
      const pl = new THREE.PointLight(color, intensity)
      pl.position.set(pos.x, pos.y, pos.z)
      addLight(pl)
    } else if (type === 'spot') {
      const sl = new THREE.SpotLight(color, intensity)
      sl.position.set(pos.x, pos.y, pos.z)
      addLight(sl)
    }
  }

  if (props.enableShadows) {
    renderer.shadowMap.enabled = true
    createdLights.forEach((l) => {
      if ('castShadow' in l) {
        ;(
          l as THREE.DirectionalLight | THREE.SpotLight | THREE.PointLight
        ).castShadow = true
      }
    })
  }

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
  // 移除本组件创建的光源（若有）
  if (scene) {
    const children = [...scene.children]
    children.forEach((child) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((child as any).isLight) scene!.remove(child)
    })
  }
  renderer = null
  orbitControls = null
  scene = null
  axesHelperInst = null
})
</script>

<style scoped>
.mesh-container {
  position: relative;
  display: inline-block;
}
.mesh-title {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;
  pointer-events: none;
}
.mesh-title > * {
  pointer-events: auto;
}
.mesh-title-text {
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
}
</style>
