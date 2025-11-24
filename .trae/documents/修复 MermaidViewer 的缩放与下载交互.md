**目标**
- 让工具条“＋/−/Reset/Fit”在两种渲染模式（`svg`/`transform`）都正确缩放，不再误触全屏。
- 支持鼠标滚轮缩放，按鼠标位置居中缩放。
- 让“SVG/PNG”下载正常触发并生成文件。

**问题研判**
- 代码已实现缩放与滚轮逻辑，但在 `renderMode: 'svg'` 时，若 `svgRef` 暂未就绪，缩放路径会退回到 `transform`，而 `.content` 在 `svg` 模式下 `transform: none`，导致视觉无变化。
- 滚轮仅绑定在容器 `.viewport` 上，当 Teleport 的内容层覆盖时，事件可能未命中，导致“没有实现滚轮缩放”的观感。
- 下载逻辑仅从 `hostRef` 查询 `svg`，在全屏/Teleport 切换与特定时序下可能取空，点击无响应。
- 工具条按钮位于可拖拽的容器内，点击事件可能与容器的 `mousedown/dblclick` 交织，出现“像是在切全屏”的误感。

**改动方案**
- MermaidViewerToolbar（`packages/slidev-addon-default/components/MermaidViewer/MermaidViewerToolbar.vue`）
  - 在交互按钮上添加事件修饰，阻止事件向容器传播：将第 3–11 行的 `@click` 改为 `@click.stop`，并为按钮补充 `@mousedown.stop`，避免与容器的拖拽/双击互相影响。
  - 文件位置参考：`.../MermaidViewerToolbar.vue:3-11`。
- 滚轮事件绑定补强（`packages/slidev-addon-default/components/MermaidViewer.vue`）
  - 目前在 `.viewport` 绑定了 `@wheel.prevent`（`MermaidViewer.vue:7`）。为 Teleport 的 `.content` 根节点同步绑定 `@wheel.prevent="onWheel"`，确保事件在内容层也能捕获（`MermaidViewer.vue:51-57`）。
- usePanZoom（`packages/slidev-addon-default/composables/usePanZoom.ts`）
  - 在 `onWheel(e)` 起始处添加 `e.preventDefault()` 与 `e.stopPropagation()`，提高事件确定性（参考 `usePanZoom.ts:119`）。
  - 为 `svg` 模式增加 `svgRef` 兜底与赋值：
    - 计算当前容器（按 `isFullscreen` 选择 `containerFullRef`/`containerInlineRef`），若 `svgRef.value` 为空，则从容器内 `querySelector('svg')` 获取并写回 `svgRef.value`；随后走 `viewBox` 缩放分支。
    - 在 `zoomIn/zoomOut/fit/reset` 中同样使用该兜底，确保 `svgRef` 未就绪时不退回 `transform` 路径。
  - 这样即可保证滚轮与按钮在 `svg` 模式下都能生效且按鼠标位置居中缩放（相关位置：`usePanZoom.ts:40-72`, `85-117`, `119-162`）。
- useDownloads（`packages/slidev-addon-default/composables/useDownloads.ts`）
  - 改造签名使其接收 `containerInlineRef`、`containerFullRef` 与 `isFullscreen`，在当前激活容器中查找 `svg`：
    - `const container = isFullscreen ? containerFullRef.value : containerInlineRef.value`
    - `const svg = container?.querySelector('svg') as SVGSVGElement | null`
  - SVG 下载维持序列化逻辑不变；PNG 下载在取宽高时优先使用 `viewBox`，缺失则从 `getBBox()` 补足。
  - 这能避免 Teleport/时序影响导致找不到 `svg` 的情况（参考：`useDownloads.ts:6-23`, `25-56`）。
- MermaidViewer.vue 使用调整（`packages/slidev-addon-default/components/MermaidViewer.vue`）
  - 将 `useDownloads` 的调用由 `hostRef: elRef` 改为传入容器引用与 `isFullscreen`；保持现有事件绑定：`@download-svg="downloadSVG"`、`@download-png="downloadPNG"`（参考：`MermaidViewer.vue:156-160`, `15-26`, `45-46`）。

**验证清单（Windows 11，本地预览）**
- 打开任一 Mermaid 示例：
  - 点击工具条 `＋/−`，图形缩放且不会切换全屏。
  - 鼠标在图上滚轮缩放，缩放围绕鼠标点居中；拖拽平移正常。
  - 点击 `Fit/Reset` 恢复适配与初始视图。
  - 点击 `SVG/PNG` 下载，生成 `mermaid-graph.svg` 与 `mermaid-graph.png`；PNG 维持 `exportScale` 清晰度。
- 在全屏模式重复上述交互，行为一致。

**兼容与约束**
- 不新增依赖，遵循现有 Vue 3/Slidev 组合式模式与样式约定。
- 变更范围局限于 `packages/slidev-addon-default`，不破坏公共包对外 API。
- 严格遵循仓库 ESLint/Prettier 规则与命名约定。

请确认以上方案，确认后我将按上述文件定位与步骤完成实现与自测。