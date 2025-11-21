---
title: 安装与最小闭环
---

### 安装

- 在工作区根或演示目录执行 `pnpm install` 安装依赖。
- 运行开发：`pnpm dev`；构建导出：`pnpm slidev:export`。

### 最小闭环

```ts
import * as THREE from 'three'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)
function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()
```

### 提示

- 演示内统一通过 `useSlideContext` 获取画布尺寸，保证与 Slidev 画布比例一致。
