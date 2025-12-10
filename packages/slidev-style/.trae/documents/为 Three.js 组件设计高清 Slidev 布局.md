## 目标
- 让 `Demo035ChinaPopulationBar.vue` 在 Slidev 中渲染清晰（避免模糊），并保证交互与布局正常。
- 在 `packages/slidev-addon-default/layouts` 提供一个专用布局，确保 WebGL 画布按实际显示尺寸与设备像素比渲染。

## 原因分析
- 当前 `MeshTemplate.vue` 使用 `slideContext.$slidev.configs.canvasWidth/aspectRatio` 作为渲染尺寸，并设置 `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`。
- Slidev 页面通常对整页应用缩放（transform scale），导致画布以固定逻辑尺寸被缩放显示，进而出现清晰度损失（尤其是文字/细线）。
- 解决关键：渲染器尺寸应匹配“实际显示尺寸”（DOM 容器的 `getBoundingClientRect()`），并在缩放/窗口变化时同步更新；同时避免或补偿父级缩放。

## 布局方案（新增布局 webgl.vue）
- 在 `c:\home\Projects\frontend\my-slidevs\packages\slidev-addon-default\layouts\webgl.vue` 新增布局：
  - 提供一个全屏/满容器的 `.webgl-stage` 容器，承载插槽内容（比如你的 Three 组件）。
  - 样式保证 `.webgl-stage` 不再被额外 `transform: scale(...)` 影响；采用 `width: 100%; height: 100%; position: relative;`，对 `canvas` 使用 `display: block`。
  - 如主题强制缩放整页，则在布局中为 WebGL 容器建立单独层级，减少继承缩放影响（必要时使用 `position: absolute; inset: 0;` 并覆盖布局下的缩放选择器）。
- 使用方式：在对应 `.md` 幻灯片的 frontmatter 指定 `layout: webgl`，幻灯正文中直接写 `<Demo035ChinaPopulationBar />`。

## 组件内渲染修正（MeshTemplate 与 Demo035）
- `MeshTemplate.vue`（c:\home\Projects\frontend\my-slidevs\projects\slidevs\learn-threejs\components\MeshTemplate.vue）：
  - 变更渲染尺寸策略：在 `renderer.domElement` 挂载到 `domRef` 后，读取 `domRef.value.getBoundingClientRect()` 的宽高，调用 `renderer.setSize(rect.width, rect.height)`，保证与实际显示一致。
  - 添加 `resize` 监听：窗口大小或 Slidev 缩放变化时，重新读取容器 `rect` 并更新 `setSize`、相机 `aspect` 与投影矩阵。
  - 可选补偿：如仍存在父级缩放，可计算显示比例 `scale = rect.width / slideWidth` 并将 `renderer.setPixelRatio(Math.min(window.devicePixelRatio * scale, 2))`。
- `Demo035ChinaPopulationBar.vue`（c:\home\Projects\frontend\my-slidevs\projects\slidevs\learn-threejs\components\Demo035ChinaPopulationBar.vue）：
  - 移除 `onMount` 顶部的 `return`，恢复点击命中与 SpriteText 标签逻辑。
  - 在 `onMount` 内部不做尺寸控制，由 `MeshTemplate` 统一处理；此处仅保留事件绑定。

## 文件改动清单
- 新增：`packages/slidev-addon-default/layouts/webgl.vue`（布局模板 + 基础样式）。
- 修改：`projects/slidevs/learn-threejs/components/MeshTemplate.vue`（尺寸改为基于 DOM 容器，添加 resize 同步与可选像素比补偿）。
- 修改：`projects/slidevs/learn-threejs/components/Demo035ChinaPopulationBar.vue`（移除 `onMount` 中的早退 `return`）。

## 验证步骤
- 在一个示例幻灯片设置 `layout: webgl` 并插入 `Demo035ChinaPopulationBar`，打开浏览器：
  - 缩放浏览器窗口，观察柱体边缘、地图线段与 SpriteText 文本是否保持锐利。
  - 检查点击圆点时，文字标签仅在当前圆点显示，其他被清除。
  - 在不同 DPR（Windows11 下 125%/150% 缩放）环境验证清晰度。

## 兼容与风险
- 若主题强制整体缩放，布局内可能仍受影响；通过基于容器 `rect` 尺寸与像素比补偿可基本消除模糊。
- 如果主题对布局类名有特殊选择器，可能需要按实际类名精确覆盖缩放规则（我将在实现时按你的主题实际选择器做适配）。

## 后续可选优化
- 在 `MeshTemplate` 暴露一个 `fitToContainer` 布尔属性，是否用容器实际尺寸渲染，默认开启。
- 提供统一的 `useWebglDpi()` 辅助函数，在不同 Three 组件内部复用尺寸/DPR 逻辑。

请确认以上方案，我将按清单新增布局并修改两处组件，随后在本地运行与预览验证清晰度。