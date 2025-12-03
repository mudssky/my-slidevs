# MeshTemplate 组件使用说明

MeshTemplate 用于在 Slidev 演示中承载 Three.js 场景与交互，提供统一画布尺寸、坐标轴辅助与每帧回调。

## Props

- `object3d`：要渲染的 `THREE.Object3D` 或数组
- `controls`：是否启用轨道控制，默认启用
- `axesHelper`：坐标轴辅助线，`false` 关闭，或传入数值作为尺寸
- `background`：场景背景色（如 `"#202225"`）
- `cameraOption`：相机选项 `{ fov, near, far, position: { x, y, z } }`
- `onFrame`：每帧回调，签名为 `({ scene, camera, renderer, THREE }) => void`
- `lights`：自定义光源实例或数组，组件将自动挂载到场景
- `defaultLight`：简易光源开关与配置，示例 `{ type: 'ambient', intensity: 0.8 }`
- `enableShadows`：是否开启阴影渲染（同时需要 mesh 设置 `castShadow/receiveShadow`）
- `title`：左上角标题文本（若提供 `#title` 插槽则以插槽为准）

## 基本用法

```vue
<template>
  <MeshTemplate :object3d="mesh" />
  <!-- 或传入多个对象：:object3d="[mesh1, mesh2]" -->
  <!-- 关闭交互：:controls="false" -->
  <!-- 相机统一配置：:cameraOption -->
  <!-- <MeshTemplate :object3d="mesh" :cameraOption="{ fov: 75, near: 0.1, far: 2000, position: { x: 300, y: 180, z: 260 } }" /> -->
</template>

<script setup lang="ts">
import MeshTemplate from '../components/MeshTemplate.vue'
import mesh from '../components/mesh/noiseMountain'
</script>
```

## 标题用法

```vue
<template>
  <MeshTemplate :object3d="mesh" title="我的标题" />
  <!-- 或使用组件作为标题 -->
  <!--
  <MeshTemplate :object3d="mesh">
    <template #title>
      <MyTitle />
    </template>
  </MeshTemplate>
  -->
```

```vue
<script setup lang="ts">
import MeshTemplate from '../components/MeshTemplate.vue'
import mesh from '../components/mesh/noiseMountain'
import MyTitle from '../components/MyTitle.vue'
</script>
```

### 插槽

- `#title`：标题插槽，若提供则优先于 `title` 文本渲染；可传入任意组件或内容。

## 每帧动画示例（噪声地形起伏）

```vue
<template>
  <MeshTemplate :object3d="mesh" :onFrame="onFrame" />
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { createNoise2D } from 'simplex-noise'
import MeshTemplate from '../components/MeshTemplate.vue'
import mesh from '../components/mesh/noiseMountain'

const noise2D = createNoise2D()

function onFrame() {
  const geometry = mesh.geometry as THREE.BufferGeometry
  const positions = geometry.attributes.position as THREE.BufferAttribute
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i)
    const y = positions.getY(i)
    const z = noise2D(x / 300, y / 300) * 50
    const sinNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10
    positions.setZ(i, z + sinNum)
  }
  positions.needsUpdate = true
}
</script>
```

## 开启光源示例

```vue
<template>
  <MeshTemplate :object3d="mesh" :defaultLight="{ type: 'ambient', intensity: 0.8 }" />
  <!-- 或使用定向光 -->
  <!-- <MeshTemplate :object3d="mesh" :defaultLight="{ type: 'directional', color: '#ffffff', intensity: 1, position: { x: 200, y: 300, z: 150 } }" /> -->
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

## 提示

- 画布尺寸自动匹配 Slidev 配置，避免比例失衡。
- 如需更细网格或更大地形，调整 `PlaneGeometry` 的尺寸与分段。
- 使用受光材质（如 `MeshLambertMaterial`、`MeshPhongMaterial`、`MeshStandardMaterial`）才能看到光照效果；`MeshBasicMaterial` 不受光影响。
- 阴影需要在材质/mesh 处设置：几何体 `castShadow` 与接收者 `receiveShadow`。
- 相机相关属性统一通过 `cameraOption` 提供。
