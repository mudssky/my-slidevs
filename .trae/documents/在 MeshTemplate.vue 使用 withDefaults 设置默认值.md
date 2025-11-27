## 修改目标
- 在 `c:\home\Projects\frontend\my-slidevs\projects\slidevs\learn-threejs\components\MeshTemplate.vue` 的 `defineProps` 处采用 `withDefaults` 定义统一默认值，替代分散的 `??` 兜底，提升可读性与可维护性。

## 具体改动
- 更新 props 定义为 `withDefaults`，集中声明默认值：
  - `axesHelper: 200`
  - `fov: 60`
  - `near: 1`
  - `far: 1000`
  - `cameraPosition: () => ({ x: 200, y: 200, z: 200 })`
  - `controls: true`
- 简化相机初始化，直接使用 `props.fov/near/far`（去除 `??` 兜底）。
- 使用 `props.cameraPosition` 直接设置相机位置（去除本地默认对象）。
- 保持 `background`、`object3d`、`onFrame` 为可选且无默认值。

## 代码位置与示例
- props 定义位置：`projects/slidevs/learn-threejs/components/MeshTemplate.vue:30`
```ts
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
    axesHelper: 200,
    fov: 60,
    near: 1,
    far: 1000,
    cameraPosition: () => ({ x: 200, y: 200, z: 200 }),
    controls: true,
  },
)
```
- 相机初始化：`projects/slidevs/learn-threejs/components/MeshTemplate.vue:82`
```ts
const camera = new THREE.PerspectiveCamera(
  props.fov,
  slideWidth / slideHeight,
  props.near,
  props.far,
)
const cp = props.cameraPosition
camera.position.set(cp.x, cp.y, cp.z)
```

## 兼容性与影响
- 行为与当前兜底逻辑保持一致；默认值集中定义，减少重复判断。
- `axesHelper` 默认 200；传 `false` 可关闭。
- `controls` 默认启用；传 `false` 可关闭。
- 不影响资源释放逻辑与交互控制绑定。

## 验证方案
- 在未传任何 props 的情况下：应显示坐标轴（长度 200），相机位于 `{200,200,200}`，`OrbitControls` 可用。
- 传入自定义 `fov/near/far/cameraPosition/axesHelper/controls`：确认覆盖默认值并正确生效。
- 切换页面或卸载组件：确认 `disposeThreeResources` 正常释放。

## 备选项
- 如需逐步迁移，可先仅引入 `withDefaults`，保留 `??` 兜底，功能等价。