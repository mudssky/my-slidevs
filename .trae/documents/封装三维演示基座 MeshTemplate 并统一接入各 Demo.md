## 目标
- 去除 Demo 组件间重复的场景/相机/渲染器/控制器/清理逻辑
- 保持 Slidev 画布尺寸与比例一致，沿用现有 `useSlideContext`
- 以属性驱动的方式将具体 `Object3D` 注入场景，便于后续案例复用与扩展

## 设计
- 组件：`components/MeshTemplate.vue`
- Props（TypeScript）：
  - `object3d: THREE.Object3D | THREE.Object3D[]`（必选/可选，默认不注入）
  - `axesHelper: boolean | number`（默认 `200`，传 `false` 关闭）
  - `fov: number`（默认 `60`）`near: number`（默认 `1`）`far: number`（默认 `1000`）
  - `cameraPosition: { x: number; y: number; z: number }`（默认 `{200,200,200}`）
  - `controls: boolean`（默认 `true`）
  - `background: string | undefined`（可选，设置场景背景色）
  - `onFrame?: (ctx: { scene: THREE.Scene; camera: THREE.Camera; renderer: THREE.WebGLRenderer; THREE: typeof THREE }) => void`（可选，每帧回调，支持动画）
- 行为：
  - 初始化 `scene/camera/renderer` 与 `OrbitControls`（受 `controls` 控制）
  - 根据 `axesHelper` 添加坐标轴辅助
  - 将 `object3d`（单个或数组）加入 `scene`
  - `requestAnimationFrame` 循环渲染，并在循环中触发 `onFrame`（若传入）
  - `onUnmounted` 执行 `disposeThreeResources({ renderer, scene, controls })`
- 插槽（可留作扩展）：`default` 插槽暴露 `{ THREE, scene, camera, renderer }`，但当前案例以 props 方案为主，不强依赖插槽

## 具体改造
1) 修改 `MeshTemplate.vue`
- 移除现有 `getMesh()`（`BoxGeometry` 示例），改为基于 props 注入 `object3d`
- 定义并使用上述 props，维持原有的 `useSlideContext` 尺寸逻辑与 `render()` 循环
- 兼容传入数组：逐个 `scene.add`

2) 接入现有 Demo
- `Demo005Point.vue`：
  - 模板仅使用：`<MeshTemplate :object3d="points" />`
  - 脚本仅保留 `import points from './mesh/point'`
- `Demo006Line.vue`：
  - 关闭坐标轴：`<MeshTemplate :object3d="line" :axesHelper="false" />`
  - 脚本保留 `import line from './mesh/line'`
- `Demo007Mesh.vue`：`<MeshTemplate :object3d="meshModel" />`
- `Demo008Segment.vue`：`<MeshTemplate :object3d="segmentDemo" />`
- `Demo009CylinderGeometry.vue`：`<MeshTemplate :object3d="CylinderGeometry" />`

3) 类型与清理
- 依赖沿用现有工作区：`three`、`@slidev/client`、`OrbitControls`、`@mudssky/slidev-addon-default`
- 清理由 `disposeThreeResources` 统一执行，避免各 Demo 重复资源释放逻辑

## 示例（接口使用）
- MeshTemplate（属性定义要点）：
```vue
<!-- template 部分不变，仅容器 div -->
<script setup lang="ts">
import * as THREE from 'three'
import { defineProps } from 'vue'

const props = defineProps<{
  object3d?: THREE.Object3D | THREE.Object3D[]
  axesHelper?: boolean | number
  fov?: number
  near?: number
  far?: number
  cameraPosition?: { x: number; y: number; z: number }
  controls?: boolean
  background?: string
  onFrame?: (ctx: { scene: THREE.Scene; camera: THREE.Camera; renderer: THREE.WebGLRenderer; THREE: typeof THREE }) => void
}>()
</script>
```
- Demo006Line（最小接入）：
```vue
<template>
  <MeshTemplate :object3d="line" :axesHelper="false" />
</template>
<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import line from './mesh/line'
</script>
```

## 验证
- 通过 Slidev 本地预览逐页检查：几何体是否呈现、交互是否正常、坐标轴符合期望（Demo006 关闭）
- 切换不同窗口尺寸验证宽高与纵横比是否保持一致

## 迁移收益
- 每个 Demo 仅保留“几何体/网格定义”与极少属性，避免样板代码
- 动画案例通过 `onFrame` 回调实现按帧更新，无需重复维护 RAF 与清理逻辑

如确认该方案，我将按上述步骤改造 `MeshTemplate.vue` 并接入五个 Demo 文件。