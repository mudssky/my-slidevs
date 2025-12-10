## 原因与现状
- Slidev 页面存在整体缩放，`MeshTemplate.vue` 以 `canvasWidth/aspectRatio` 作为固定逻辑尺寸渲染，导致实际显示尺寸与渲染尺寸不一致，清晰度下降。
- 当前像素比仅依据 `window.devicePixelRatio`，未考虑父级缩放的实际显示比例。
- 参考位置：`projects/slidevs/learn-threejs/components/MeshTemplate.vue:171-177` 计算尺寸；`229-233` 设置渲染器；`296` 挂载画布。

## 调整目标
- 用容器实际显示尺寸渲染 WebGL 画布，并在尺寸变化时同步更新。
- 动态更新相机 `aspect` 与投影矩阵，保证几何比例正确。
- 补偿父级缩放对像素比的影响，提升清晰度。

## 具体修改
- 以容器尺寸渲染：挂载画布后读取 `domRef.value.getBoundingClientRect()`，用其 `width/height` 调整 `renderer.setSize`。
- 像素比补偿：`pixelRatio = clamp(window.devicePixelRatio * scaleComp, 1, 3)`，其中 `scaleComp = rect.width / slideWidth`；若不可得则取 `1`。
- 尺寸/相机同步：添加 `ResizeObserver` 监听容器，变化时更新 `renderer.setSize`、`camera.aspect` 与 `camera.updateProjectionMatrix()`，必要时 `controls.update()`。
- 初始尺寸来源：保留 `slideWidth/slideHeight` 用于相机初始参数与回退，但实际渲染以容器为准。
- 可选开关：新增 `fitToContainer?: boolean`，默认 `true`。关闭时沿用旧逻辑。

## 代码改动位置
- 移除或下沉初始化尺寸使用：`MeshTemplate.vue:171-177` 仅用于初始相机与回退。
- 在 `onMounted` 内添加同步函数与监听：
```
const resizeObs = ref<ResizeObserver | null>(null)

onMounted(() => {
  const slideWidth = slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const slideHeight = (slideContext.$slidev.configs.canvasWidth && slideContext.$slidev.configs.canvasWidth / slideContext.$slidev.configs.aspectRatio) || window.innerHeight
  const camera = new THREE.PerspectiveCamera(camOpt.fov, slideWidth / slideHeight, camOpt.near, camOpt.far)
  const syncSize = () => {
    const el = domRef.value as HTMLElement
    if (!el || !renderer) return
    const rect = el.getBoundingClientRect()
    const w = Math.max(1, Math.floor(rect.width))
    const h = Math.max(1, Math.floor(rect.height))
    const scaleComp = slideWidth ? w / slideWidth : 1
    const pr = Math.min(Math.max(1, window.devicePixelRatio * (isFinite(scaleComp) ? scaleComp : 1)), 3)
    renderer.setPixelRatio(pr)
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    orbitControls?.update()
  }
  domRef.value.appendChild(renderer.domElement)
  syncSize()
  resizeObs.value = new ResizeObserver(() => syncSize())
  resizeObs.value.observe(domRef.value)
})

onUnmounted(() => {
  resizeObs.value?.disconnect()
})
```
- 将 `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` 移至 `syncSize()`，并按显示比例补偿。

## 验证
- 在使用 `layout: webgl` 的页面内缩放浏览器与切换系统缩放（125%/150%）观察文字与细线是否保持锐利。
- 检查交互：旋转/缩放正常，点击命中准确；相机比例随容器变化更新。

## 兼容与风险
- 若主题仍对布局层强制缩放，容器 `rect` 获取到的就是实际显示尺寸，补偿后的像素比仍能保证清晰度。
- `ResizeObserver` 在老浏览器需回退为 `window.resize`；在当前环境可直接使用。

## 交付
- 修改 `MeshTemplate.vue` 按上述方案实现，并可选新增 `fitToContainer` 属性（默认启用）。
- 不改动现有对轴辅助与光源的逻辑；仅调整尺寸与像素比策略。

请确认以上计划，我将据此提交具体改动并在本地预览验证清晰度。