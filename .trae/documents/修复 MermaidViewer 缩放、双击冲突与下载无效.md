## 问题确认
- 缩放仍不生效：现为 `renderMode: 'svg'`，按钮与滚轮事件已接线，但若 `svg` 无有效 `viewBox`（width/height 为 0），`usePanZoom` 的 `applyViewBox` 不会产生可见缩放。
- 双击工具条触发全屏：容器上用了 `@dblclick="toggleFullscreen"`，工具条按钮当前仅 `@click.stop/@mousedown.stop`，双击未阻断，事件冒泡到容器。
- 下载无效：`useDownloads` 按“当前容器”找 `svg` 执行下载；若 Teleport 后容器/`svg` 查询偶发为空，或 `viewBox` 缺失导致 PNG 宽高异常，会表现为无下载。

## 修改方案
1) 双击防抖与阻断（彻底隔离工具条与容器双击）
- `MermaidViewer.vue` 将容器双击改为 `@dblclick.self="toggleFullscreen"`，仅容器本身触发，不再响应子元素双击。
- `MermaidViewerDialog.vue` 同步改为 `@dblclick.self="$emit('toggle-fullscreen')"`。
- `MermaidViewerToolbar.vue` 给所有按钮与工具条根容器添加 `@dblclick.stop`，避免任何双击事件继续冒泡。

2) `viewBox` 兜底（保障 SVG 缩放生效）
- `useMermaidRender` 在 `mermaid.run` 后：
  - 若 `svg.viewBox.baseVal.width/height` 为 0 或未设置，使用 `svg.getBBox()` 计算尺寸并 `svg.setAttribute('viewBox', \
    \`0 0 ${Math.ceil(bbox.width)} ${Math.ceil(bbox.height)}\`)`。
  - 统一 `svg.style.width/height = '100%'`；随后更新 `vb/vbOrig` 为有效数值。
- 保持现有 `usePanZoom` 逻辑不变；其在 `zoomIn/zoomOut/onWheel` 已对 `svgRef` 做容器内回填。

3) 下载健壮性增强
- `useDownloads`：
  - 若容器内未找到 `svg`，在全屏下备用：从 `dlgRef` 或当前 `teleportTarget` 下再次 `querySelector('svg')`（通过传入现有的容器引用做到，不引入新依赖）。
  - PNG 尺寸已有 `viewBox/img/bbox` 三重兜底；保留并确认 `exportScale` 生效。

4) 验证与自测
- 交互检验（Windows 11 / 已运行本地服务）：
  - 非全屏与全屏两态下，单击工具条“＋/−/Reset/Fit”产生明显缩放/复位效果；鼠标滚轮以指针位置为中心缩放。
  - 双击工具条按钮不再切换全屏；双击容器空白处才切换。
  - 下载 SVG/PNG 在两态下均弹出保存（文件名取 `downloadName`，PNG 尺寸随 `exportScale`）。
- 回归：切换主题/内容（`p.theme/p.content`）后仍正常；Teleport 切换时自动 `fit()`。

## 涉及文件
- `packages/slidev-addon-default/components/MermaidViewer.vue`：容器双击 `.self`、保持事件接线。
- `packages/slidev-addon-default/components/MermaidViewer/MermaidViewerDialog.vue`：容器双击 `.self`、事件冒泡到父。
- `packages/slidev-addon-default/components/MermaidViewer/MermaidViewerToolbar.vue`：为根与按钮添加 `@dblclick.stop`。
- `packages/slidev-addon-default/composables/useMermaidRender.ts`：`viewBox` 缺失时的 `getBBox()` 兜底并写入；更新 `vb/vbOrig`。
- `packages/slidev-addon-default/composables/useDownloads.ts`：在当前容器未取到 `svg` 时做一次兜底查询（不新增依赖）。

## 预期影响
- 不引入新依赖；遵循现有 Composition API 与样式规范。
- 与现有全屏/Teleport/缩放/下载逻辑兼容，提升健壮性与一致性。

请确认以上方案；确认后我将开始修改并在本地预览中逐项验证。