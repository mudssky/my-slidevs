---
title: LazyRender 组件使用指南
---

## 简介
`LazyRender` 是一个用于 Slidev/Vue 页内懒渲染的包裹组件：只有当容器进入视口时才创建插槽内容，离开视口则立即卸载，用于避免 WebGL 上下文/显存长期占用以及减少无意义的渲染。

组件源文件：`packages/slidev-addon-default/components/LazyRender.vue`

核心行为：
- 使用 `@vueuse/core` 的 `useElementVisibility` 监听容器可见性
- 进入视口后延迟 ~200ms 创建插槽内容，离开视口立即销毁（释放资源）
- 容器默认样式为 `width:100%; height:100%; min-height:300px` 并在不可见时显示占位文本

## 安装与引入
该组件已在工作区自动注册，可在 Markdown 或 Vue 组件中直接使用 `<LazyRender>` 标签，无需手动 import。

## 基础用法（Slidev Markdown）
将任意 Demo 组件用 `LazyRender` 包裹：

```md
<LazyRender>
  <Demo003PerspectiveCamera />
</LazyRender>
```

在 `learn-threejs` 演示中，所有 Demo 均建议用 `LazyRender` 包裹，例如：

```md
<LazyRender>
  <Demo004BufferGeometry />
</LazyRender>
```

## Vue 组件内用法（非必须）
在自定义页面/组件中同样可以作为包裹器使用：

```vue
<template>
  <LazyRender>
    <MyHeavyCanvas />
  </LazyRender>
  <!-- 其余内容 -->
</template>
```

## 与 Three.js Demo 的配合
`LazyRender` 负责“何时创建/销毁”，但三维资源需要 Demo 组件在卸载时显式释放。建议在 Demo 中实现以下清理（简化示例）：

```ts
import { onUnmounted } from 'vue'
import * as THREE from 'three'

let raf = 0
let stop = false
let renderer: THREE.WebGLRenderer | null = null
let controls: any = null
let scene: THREE.Scene | null = null

onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  controls && controls.dispose()
  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss && renderer.forceContextLoss()
    const el = renderer.domElement
    el && el.parentNode && el.parentNode.removeChild(el)
  }
  if (scene) {
    scene.traverse(obj => {
      const mesh = obj as THREE.Mesh
      const g = mesh.geometry as THREE.BufferGeometry | undefined
      const m = mesh.material as THREE.Material | THREE.Material[] | undefined
      if (Array.isArray(m)) m.forEach(mm => mm && mm.dispose())
      else if (m) m.dispose()
      if (g) g.dispose()
      const t = (mesh.material as any)?.map as THREE.Texture | undefined
      t && t.dispose()
    })
  }
})
```

如果使用了特殊资源，也需要一并释放：
- 环境贴图/PMREM：`pmrem.dispose()`、`cubeTex.dispose()`、`envMap.dispose()`
- 后处理：`composer.renderTarget1?.dispose()`、`composer.renderTarget2?.dispose()`
- 事件监听：移除 `window`/`canvas` 上绑定的事件

## 占位与容器大小
- 不可见时显示占位文本 `Waiting for slide...`
- 默认容器 `min-height: 300px`，可根据页面布局调整外层高度以避免内容在视口中高度不足导致“看起来像没渲染”。

## 常见问题
- 看不到内容：
  - 容器未进入视口（请滚动或调整布局高度）
  - Demo 内部高度计算错误。示例修正：`height = canvasWidth / aspectRatio`（而不是直接使用 `aspectRatio`）。参考修复：`projects/slidevs/learn-threejs/components/Demo004BufferGeometry.vue:61-66`。
  - 组件刚进入视口时有 ~200ms 延迟创建，稍等片刻即可显示。
- 滚动频繁创建销毁：
  - 可以提高容器高度或分段页面，减少频繁进入/离开视口的情况

## 适用场景
- WebGL/Canvas/重 CPU/GPU 的组件懒渲染
- 长页面中分段演示，降低资源占用与上下文丢失风险（`THREE.WebGLRenderer: Context Lost`）

## 参考
- 组件实现：`packages/slidev-addon-default/components/LazyRender.vue`
- 示例页：`projects/slidevs/learn-threejs/pages/*`（所有 Demo 已统一用 `LazyRender` 包裹）

