## 目标
- 使用原生 HTML `dialog` 承载全屏查看，右上角提供关闭按钮。
- 在普通与全屏两种状态下均支持缩放与拖拽（沿用当前基于 SVG viewBox 的矢量缩放/平移）。
- 优化工具栏外观与占用空间：悬浮于图层内、默认隐藏，鼠标悬停时显示。

## 方案设计
### 全屏容器：原生 `dialog`
- 在组件模板内新增 `<dialog class="mv-dialog">`，内部承载一套与普通视图一致的 `viewport`，右上角放置关闭按钮。
- 通过 `dlgRef.showModal()` 打开，`dlgRef.close()` 关闭；监听 `@close` 与 `Escape` 键同步 `isFullscreen` 状态。
- 使用 `::backdrop` 与现有主题变量（如 `--slidev-slide-container-background`）统一遮罩与背景风格。

### 视图容器与事件统一
- 拆分为两个容器引用：`containerInlineRef` 与 `containerFullRef`。
- 抽象获取当前容器的函数（如 `getActiveContainerRect()` / `activeContainerRef`）供 `fit()`、`onWheel()`、拖拽事件使用，不再直接绑定到单一 `containerRef`。
- 在两套容器上都绑定相同的事件（wheel/mousedown/mousemove/mouseup/leave/dblclick）。

### 缩放/拖拽一体化
- 保留当前 SVG viewBox 模式（`renderMode='svg'`），在两种状态中共用一份缩放和平移状态（`scale/vb/tx/ty`）。
- `fit()` 根据当前激活容器的尺寸计算，进入全屏时自动 `fit()`，退出全屏后可保持上次缩放或根据需求重置。

### 工具栏优化与显示策略
- 将工具栏改为覆盖在 `viewport` 右上角的轻量样式（小型圆角、半透明、icon-only）。
- 默认隐藏：`.viewport .toolbar { opacity: 0; pointer-events: none }`，悬停显现：`.viewport:hover .toolbar { opacity: 1; pointer-events: auto }`，过渡动画 150–200ms。
- 普通与全屏各自拥有一套同样的工具栏（置于对应容器内），包含：缩放 +/-、Reset、Fit、全屏切换、SVG/PNG 下载。

## 技术要点与兼容
- 不引入新依赖，使用现有 `Vue 3 + TypeScript` 与 CSS 变量，遵循工作区风格。
- 继续沿用 `mermaid` ESM 动态导入与 `viewBox` 类型守卫，保证清晰度与兼容性。
- `ResizeObserver` 同时观察两个容器；全屏切换时重新 `fit()`。

## 变更范围
- 编辑：`packages/slidev-addon-default/components/MermaidViewer.vue`
  - 模板：新增 `dialog` 结构、双容器、叠加工具栏；将工具栏移入 `viewport`。
  - 脚本：新增 `dlgRef`、双容器 refs、事件与 `fit()` 对当前容器的抽象；全屏打开/关闭逻辑。
  - 样式：`dialog` 与 `::backdrop` 风格；工具栏悬浮样式与显隐过渡；按钮视觉优化。

## 验证方案
- 普通视图：悬停显示工具栏；滚轮缩放、拖拽平移、Fit/Reset 正常。
- 全屏视图：通过按钮/双击进入；同样支持缩放/拖拽；Esc 或关闭按钮退出；下载功能在两种状态均可用。
- 在 Slidev 运行环境手动验证不同尺寸图的清晰度与交互一致性。

## 风险与回退
- 双容器可能带来状态错位：通过单一状态源与统一事件处理避免。
- 若 `dialog` 在某些环境样式不一致，可退回现有 `fullscreen` 类实现（保留逻辑分支以便快速切换）。

请确认以上方案，我将据此实施具体改动并完成验证。