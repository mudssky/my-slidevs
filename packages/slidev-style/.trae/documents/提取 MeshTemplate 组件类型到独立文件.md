## 目标
将 `MeshTemplate.vue` 中用到的类型（Props、回调上下文、相机/光源配置等）提取到 `projects/slidevs/learn-threejs/type` 目录，统一复用并提升可维护性。

## 提取范围
- 组件 Props 类型：`object3d`、`axesHelper`、`axesLegend`、`cameraOption`、`controls`、`background`、`lights`、`defaultLight`、`enableShadows`、`title`、`fitToContainer`、`onFrame`、`onMount`、`onUnmount`
- 回调上下文：`FrameContext`、`MountContext`
- 配置类型：`CameraOption`、`DefaultLightConfig`、`DefaultLightType`、`CameraPosition`
- 辅助类型（用于内部函数可选）：`Bounds`（来自 `computeBounding`）、`AutoCameraDefaults`（来自 `buildAutoCameraDefaults`）

## 新建目录与文件
- 新建目录：`projects/slidevs/learn-threejs/type`
- 新建文件：`type/mesh-template.ts`（存放本组件相关类型）
- 新建文件：`type/index.ts`（导出聚合方便其他组件按目录导入）

## 类型定义（示例结构）
- `type/mesh-template.ts`
  - `export type AxisHelperOption = boolean | number`
  - `export interface CameraPosition { x?: number; y?: number; z?: number }`
  - `export interface CameraOption { fov?: number; near?: number; far?: number; position?: CameraPosition; autoFit?: boolean }`
  - `export type DefaultLightType = 'ambient' | 'hemisphere' | 'directional' | 'point' | 'spot'`
  - `export interface DefaultLightConfigMap { type?: DefaultLightType; color?: string; intensity?: number; position?: { x: number; y: number; z: number }; skyColor?: string; groundColor?: string }`
  - `export type DefaultLightConfig = false | DefaultLightConfigMap`
  - `export interface FrameContext { scene: THREE.Scene; camera: THREE.Camera; renderer: THREE.WebGLRenderer; THREE: typeof THREE }`
  - `export interface MountContext { scene: THREE.Scene; camera: THREE.Camera; renderer: THREE.WebGLRenderer; THREE: typeof THREE; dom: HTMLCanvasElement; size: { width: number; height: number }; controls: OrbitControls | null }`
  - `export interface MeshTemplateProps { object3d?: THREE.Object3D | THREE.Object3D[]; axesHelper?: AxisHelperOption; axesLegend?: boolean; cameraOption?: CameraOption; controls?: boolean; background?: string; lights?: THREE.Light | THREE.Light[]; defaultLight?: DefaultLightConfig; enableShadows?: boolean; title?: string; fitToContainer?: boolean; onFrame?: (ctx: FrameContext) => void; onMount?: (ctx: MountContext) => void; onUnmount?: () => void }`
  - 可选：`export interface Bounds { center: THREE.Vector3; radius: number }`、`export interface AutoCameraDefaults { fov: number; near: number; far: number; position: { x: number; y: number; z: number }; lookAt: THREE.Vector3 }`
- `type/index.ts`
  - `export * from './mesh-template'`
  - 保持按需导出，后续可扩展其他组件类型文件。

## 组件修改
- 在 `MeshTemplate.vue` 使用 `import type { MeshTemplateProps, FrameContext, MountContext, CameraOption, DefaultLightConfig } from '../type'`
- 将 `defineProps<...>()` 替换为 `defineProps<MeshTemplateProps>()`
- 内部函数（如 `computeBounding`、`buildAutoCameraDefaults`、`deepMergeCamera`）使用提取的辅助类型（如选择提取则替换签名）。

## 命名与约定
- 文件命名以组件为单位：`mesh-template.ts`
- 统一通过 `type/index.ts` 聚合导出，组件侧只需从 `../type` 导入
- 使用 `import type` 引入，避免运行时开销
- 对 `OrbitControls` 与 `THREE` 使用 `import type` 保持纯类型依赖

## 验证
- 类型检查通过（Vue/TS 服务无错误）
- `MeshTemplate.vue` 编译正常，运行不受影响
- 其他组件可直接复用 `type` 目录中的类型

确认后我将创建目录与文件、迁移类型并更新组件导入，确保类型检查与运行正常。