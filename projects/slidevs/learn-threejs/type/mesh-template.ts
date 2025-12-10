import type {
  Object3D,
  Light,
  Scene,
  Camera,
  WebGLRenderer,
  Vector3,
} from 'three'
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export type AxisHelperOption = boolean | number

export interface CameraPosition {
  x?: number
  y?: number
  z?: number
}

export interface CameraOption {
  fov?: number
  near?: number
  far?: number
  position?: CameraPosition
  autoFit?: boolean
}

export type DefaultLightType =
  | 'ambient'
  | 'hemisphere'
  | 'directional'
  | 'point'
  | 'spot'

export interface DefaultLightConfigMap {
  type?: DefaultLightType
  color?: string
  intensity?: number
  position?: { x: number; y: number; z: number }
  skyColor?: string
  groundColor?: string
}

export type DefaultLightConfig = false | DefaultLightConfigMap

export interface FrameContext {
  scene: Scene
  camera: Camera
  renderer: WebGLRenderer
  THREE: typeof import('three')
}

export interface MountContext {
  scene: Scene
  camera: Camera
  renderer: WebGLRenderer
  THREE: typeof import('three')
  dom: HTMLCanvasElement
  size: { width: number; height: number }
  controls: OrbitControls | null
}

export interface MeshTemplateProps {
  object3d?: Object3D | Object3D[]
  axesHelper?: AxisHelperOption
  axesLegend?: boolean
  cameraOption?: CameraOption
  controls?: boolean
  background?: string
  lights?: Light | Light[]
  defaultLight?: DefaultLightConfig
  enableShadows?: boolean
  title?: string
  fitToContainer?: boolean
  onFrame?: (ctx: FrameContext) => void
  onMount?: (ctx: MountContext) => void
  onUnmount?: () => void
}

export interface Bounds {
  center: Vector3
  radius: number
}

export interface AutoCameraDefaults {
  fov: number
  near: number
  far: number
  position: { x: number; y: number; z: number }
  lookAt: Vector3
}
