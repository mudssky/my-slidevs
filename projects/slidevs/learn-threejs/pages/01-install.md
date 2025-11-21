---
title: 安装与最小闭环
---

### 安装

```shell
pnpm add three
pnpm add @types/three -D
```

如果在html中使用threejs

```html
<script type="importmap">
{
  "imports": {
    "three": "https://esm.sh/three@0.174.0/build/three.module.js"
  }
}
</script>
<script type="module">
// 这里写threejs的代码
</script>
```

---

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
