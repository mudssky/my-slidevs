# MeshTemplate 组件使用说明

MeshTemplate 用于在 Slidev 演示中承载 Three.js 场景与交互，提供统一画布尺寸、坐标轴辅助与每帧回调。

## Props
- `object3d`：要渲染的 `THREE.Object3D` 或数组
- `controls`：是否启用轨道控制，默认启用
- `axesHelper`：坐标轴辅助线，`false` 关闭，或传入数值作为尺寸
- `background`：场景背景色（如 `"#202225"`）
- `cameraPosition`：相机位置 `{ x, y, z }`
- `onFrame`：每帧回调，签名为 `({ scene, camera, renderer, THREE }) => void`

## 基本用法
```vue
<template>
  <MeshTemplate :object3d="mesh" />
  <!-- 或传入多个对象：:object3d="[mesh1, mesh2]" -->
  <!-- 关闭交互：:controls="false" -->
</template>

<script setup lang="ts">
import MeshTemplate from '../components/MeshTemplate.vue'
import mesh from '../components/mesh/noiseMountain'
</script>
```

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

## 提示
- 画布尺寸自动匹配 Slidev 配置，避免比例失衡。
- 如需更细网格或更大地形，调整 `PlaneGeometry` 的尺寸与分段。
