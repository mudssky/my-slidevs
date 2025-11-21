---
title: 综合案例串讲
---

### 目标

- 串联加载→材质→光影→交互→后期→性能
- 交付可复用微场景

### 要点

- 讲解脚本与演示节奏
- 可视化指标与复盘

### 场景目标

- 构建一个含基础几何体或小型 glTF 的交互场景
- 展示 PBR 材质、环境反射、主灯光与阴影、射线拾取、后期抗锯齿
- 在 GUI 中暴露关键参数：材质粗糙度、金属度、光照强度、阴影开关

### 演示节奏

- 第 1 步：加载或创建主体模型（几何体占位 → glTF 替换）
- 第 2 步：应用 Standard/Physical 材质与 EnvMap（PMREM）
- 第 3 步：添加主光源与阴影，调优阴影相机体积
- 第 4 步：注入 OrbitControls 与交互边界
- 第 5 步：接入 Raycaster，实现 hover 高亮与信息面板
- 第 6 步：使用 EffectComposer 加入 FXAA 并对比开关差异
- 第 7 步：性能观察：Draw Calls、阴影贴图、后期开销；给出取舍建议

### 验收与指标

- 交互顺滑（60fps 目标，GUI 开关后期也应可接受）
- 资源体积可控（模型与贴图总计不超过演示合理限制）
- 参数可视化清晰（GUI 命名合理，层级不超过 2 层）

### 代码骨架（示意）

```ts
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
const controls = new OrbitControls(camera, renderer.domElement)
const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
const fxaa = new ShaderPass(FXAAShader)
composer.addPass(fxaa)
function render(){ composer.render(); requestAnimationFrame(render) }
render()
```

### 复盘要点

- 颜色空间与曝光设置是否统一
- 阴影质量与性能的权衡是否合理
- 交互与后期是否带来过多开销；是否存在更简洁的实现
