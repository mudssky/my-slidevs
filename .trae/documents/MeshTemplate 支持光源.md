## 背景与目标
- 在 `MeshTemplate.vue` 中引入对光源的原生支持，便于在演示中使用 `MeshLambertMaterial`/`MeshStandardMaterial` 等受光材质。
- 保持默认行为不变（当前多数示例使用 `MeshBasicMaterial`，不受光影响），仅当显式开启光源相关 props 时才添加光源。

## 组件改动（新增 Props）
1. `lights?: THREE.Light | THREE.Light[]`
- 直接传入一个或多个 Three.js 光源实例，组件负责挂载到场景。

2. `defaultLight?: false | { type?: 'ambient' | 'hemisphere' | 'directional' | 'point' | 'spot'; color?: string; intensity?: number; position?: { x: number; y: number; z: number }; skyColor?: string; groundColor?: string }`
- 简易开关与配置：不传或 `false` → 不添加光；对象 → 根据 `type` 自动创建光源并加入场景。
- 默认值：`false`（保证向后兼容）。

3. `enableShadows?: boolean`
- 是否开启阴影渲染：启用后设置 `renderer.shadowMap.enabled = true`，并为支持阴影的光源设定 `castShadow = true`。
- 默认值：`false`。

## 实现细节（`MeshTemplate.vue`）
- 位置参考：在场景创建与对象挂载之后（`c:\home\Projects\frontend\my-slidevs\projects\slidevs\learn-threejs\components\MeshTemplate.vue:67-88`），相机创建之前或之后均可，但推荐在相机之后，便于为定向光设置朝向。
- 逻辑：
  - 若存在 `props.lights`：
    - `Array.isArray` → 逐个 `scene.add(light)`；否则直接 `scene.add(light)`。
  - 否则若 `props.defaultLight` 为对象：
    - `type === 'ambient'` → `new THREE.AmbientLight(color, intensity)`。
    - `type === 'hemisphere'` → `new THREE.HemisphereLight(skyColor, groundColor, intensity)`。
    - `type === 'directional'` → `new THREE.DirectionalLight(color, intensity)` 并基于 `position` 设置位置（默认如 `{ x: 200, y: 300, z: 150 }`）。
    - `type === 'point'`/`'spot'` → 创建对应光源并按 `position` 放置。
  - 若 `enableShadows`：开启 `renderer.shadowMap.enabled`，支持阴影的光源设 `castShadow = true`。
- 资源管理：将创建的光源保存在本地数组，`onUnmounted` 时从场景移除；已有的 `disposeThreeResources` 会处理场景与控制器的释放。

## 文档改动（`docs/mesh-template.md`）
- Props 列表新增：
  - `lights`：自定义光源实例或数组。
  - `defaultLight`：简易光源配置开关。
  - `enableShadows`：是否开启阴影。
- 新增示例：
```vue
<template>
  <MeshTemplate :object3d="mesh" :defaultLight="{ type: 'ambient', intensity: 0.8 }" />
</template>

<script setup lang="ts">
import MeshTemplate from '../components/MeshTemplate.vue'
import mesh from '../components/mesh/noiseMountain'
</script>
```

```vue
<template>
  <MeshTemplate :object3d="mesh" :defaultLight="{ type: 'directional', color: '#ffffff', intensity: 1, position: { x: 200, y: 300, z: 150 } }" />
</template>

<script setup lang="ts">
import MeshTemplate from '../components/MeshTemplate.vue'
import mesh from '../components/mesh/noiseMountain'
</script>
```

```vue
<template>
  <MeshTemplate :object3d="mesh" :defaultLight="{ type: 'hemisphere', skyColor: '#ffffff', groundColor: '#666666', intensity: 0.7 }" :enableShadows="false" />
</template>

<script setup lang="ts">
import MeshTemplate from '../components/MeshTemplate.vue'
import mesh from '../components/mesh/noiseMountain'
</script>
```
- 说明与提示：
  - 使用受光材质（如 `MeshLambertMaterial`/`MeshPhongMaterial`/`MeshStandardMaterial`）才能看到光照效果；`MeshBasicMaterial` 不受光影响。
  - 阴影生效需要同时设置几何体 `castShadow`/`receiveShadow`（在各自 mesh 创建处处理）。

## 兼容性与默认行为
- 默认不添加任何光源，保持现有演示不变。
- 若需开启光照，仅在需要的页面传入相应 props。

## 验证方案
- 新增临时演示页面：创建 `BoxGeometry + MeshStandardMaterial`，分别测试 `ambient`、`directional` 与 `hemisphere` 三种光源。观察交互与渲染帧回调无冲突。
- 手动本地预览验证：旋转盒子，确认光照与阴影（在启用阴影的情况下）随角度变化。

请确认以上方案，确认后我将为组件与文档分别完成改动并提交。