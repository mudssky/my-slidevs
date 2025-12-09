<template>
  <div class="mesh-container">
    <div ref="domRef"></div>
    <div v-if="hasTitle" class="mesh-title">
      <slot name="title">
        <span class="mesh-title-text">{{ props.title }}</span>
      </slot>
    </div>
    <div v-if="props.axesLegend" class="mesh-legend">X(红) · Y(绿) · Z(蓝)</div>
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
    axesLegend?: boolean
    cameraOption?: {
      fov?: number
      near?: number
      far?: number
      position?: { x?: number; y?: number; z?: number }
      autoFit?: boolean
    }
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
    onMount?: (ctx: {
      scene: THREE.Scene
      camera: THREE.Camera
      renderer: THREE.WebGLRenderer
      THREE: typeof THREE
      dom: HTMLCanvasElement
      size: { width: number; height: number }
      controls: OrbitControls | null
    }) => void
    onUnmount?: () => void
  }>(),
  {
    axesHelper: false,
    axesLegend: false,
    controls: true,
    defaultLight: false,
    enableShadows: false,
  },
)

const slots = useSlots()
const hasTitle = computed(() => !!slots.title || !!props.title)

function computeBounding(objects?: THREE.Object3D | THREE.Object3D[]) {
  if (!objects) return null
  const box = new THREE.Box3()
  const addObj = (o: THREE.Object3D) => {
    const b = new THREE.Box3().setFromObject(o)
    box.union(b)
  }
  if (Array.isArray(objects)) objects.forEach(addObj)
  else addObj(objects)
  if (box.isEmpty()) return null
  const center = box.getCenter(new THREE.Vector3())
  const size = box.getSize(new THREE.Vector3())
  const radius = size.length() / 2
  return { center, radius }
}

function clampFov(fov: number) {
  return Math.min(120, Math.max(10, fov))
}

function buildAutoCameraDefaults(
  bounds: { center: THREE.Vector3; radius: number } | null,
) {
  if (!bounds) {
    return {
      fov: 60,
      near: 1,
      far: 1000,
      position: { x: 200, y: 200, z: 200 },
      lookAt: new THREE.Vector3(0, 0, 0),
    }
  }
  const fov = 60
  const near = Math.max(0.1, bounds.radius * 0.01)
  const halfRad = (fov * Math.PI) / 360
  const distance = bounds.radius / Math.tan(halfRad) + bounds.radius * 0.5
  const far = Math.max(near + 1, distance + bounds.radius * 4)
  return {
    fov,
    near,
    far,
    position: {
      x: bounds.center.x + bounds.radius * 0.8,
      y: bounds.center.y + bounds.radius * 0.6,
      z: bounds.center.z + distance,
    },
    lookAt: bounds.center.clone(),
  }
}

function deepMergeCamera(
  defaults: {
    fov: number
    near: number
    far: number
    position: { x: number; y: number; z: number }
    lookAt: THREE.Vector3
  },
  user: {
    fov?: number
    near?: number
    far?: number
    position?: { x?: number; y?: number; z?: number }
  },
) {
  const fov = clampFov(user.fov ?? defaults.fov)
  const near = Math.max(1e-3, user.near ?? defaults.near)
  let far = user.far ?? defaults.far
  far = Math.max(near + 1, far)
  const position = {
    x: user.position?.x ?? defaults.position.x,
    y: user.position?.y ?? defaults.position.y,
    z: user.position?.z ?? defaults.position.z,
  }
  return { fov, near, far, position, lookAt: defaults.lookAt }
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

  const useAuto = (props.cameraOption?.autoFit ?? false) === true
  const defaults = (() => {
    if (useAuto) {
      const bounds = computeBounding(props.object3d)
      return buildAutoCameraDefaults(bounds)
    }
    return {
      fov: 60,
      near: 1,
      far: 5000,
      position: { x: 0, y: 0, z: 600 },
      lookAt: new THREE.Vector3(0, 0, 0),
    }
  })()
  const camOpt = deepMergeCamera(defaults, props.cameraOption || {})
  const camera = new THREE.PerspectiveCamera(
    camOpt.fov,
    slideWidth / slideHeight,
    camOpt.near,
    camOpt.far,
  )
  const cp = camOpt.position
  camera.position.set(cp.x, cp.y, cp.z)
  camera.lookAt(defaults.lookAt)

  // 渲染器：负责将场景与相机绘制到画布
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(slideWidth, slideHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

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

  // 将上下文暴露给父组件，用于绑定事件等一次性操作
  props.onMount?.({
    scene: scene!,
    camera,
    renderer: renderer!,
    THREE,
    dom: renderer!.domElement as HTMLCanvasElement,
    size: { width: slideWidth, height: slideHeight },
    controls: orbitControls,
  })

  if (props.controls !== false) {
    orbitControls = new OrbitControls(camera, renderer.domElement)
  }
})

onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  disposeThreeResources({ renderer, scene, controls: orbitControls })
  try {
    props.onUnmount?.()
  } catch (error) {
    console.error('onUnmount error:', error)
  }
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
.mesh-legend {
  position: absolute;
  top: 36px;
  left: 8px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}
</style>
