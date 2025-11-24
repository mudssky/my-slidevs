## 问题概述
- 点击全屏后弹窗打开，但未显示图像内容（Mermaid 渲染结果）。
- 组件结构采用 Teleport 将内容投射到当前激活容器：内联视口或全屏对话框。

## 关键现状与线索
- Teleport 目标由 `useFullscreen` 计算：`teleportTarget = isFullscreen ? containerFullRef : containerInlineRef`（packages/slidev-addon-default/composables/useFullscreen.ts:10）。
- 对话框暴露 `dlgRef` 与 `containerRef` 并在 mounted 时触发 `ready` 事件（components/MermaidViewer/MermaidViewerDialog.vue:70-86）。
- 父组件用 `@ready` 与 `watch(dialogCompRef)` 同步 `containerFullRef` 与 `dlgRef`（components/MermaidViewer.vue:158-176）。
- 切换全屏后通过 `watch(isFullscreen)` 进行 `nextTick`、容器兜底与 `fit()`（components/MermaidViewer.vue:213-224）。
- 目标容器变化时会重新渲染 mermaid 并 `fit()`（components/MermaidViewer.vue:196-207）。

## 可能根因
1. 切换顺序导致瞬时 `teleportTarget` 为空：`toggleFullscreen` 先设 `isFullscreen` 再 `showModal`（useFullscreen.ts:12-19），此时 `containerFullRef` 尚未就绪，导致 Teleport `v-if` 失败，出现空白。
2. Teleport 在目标切换时未强制重挂载，偶发不重新插入 DOM，导致渲染未生效（需通过 `key` 强制重建节点）。
3. `containerFullRef` 的兜底与同步存在时间窗（`ready` 与 `watch(dialogCompRef)` 时序），在极短窗口内 `teleportTarget` 为 `null`。

## 修改方案
1. 调整全屏切换顺序：先 `showModal()` 再切换 `isFullscreen = true`，确保对话框子容器已就绪后再让 Teleport 切换目标。
   - 修改：packages/slidev-addon-default/composables/useFullscreen.ts:12-19
   - 逻辑：
     - 若进入全屏：`dlgRef.value?.showModal(); isFullscreen.value = true;`
     - 若退出全屏：`isFullscreen.value = false; dlgRef.value?.close();`
2. 强制 Teleport 内容在目标变化时重挂载：给内容节点加切换 `key`（例如 `:key="isFullscreen ? 'full' : 'inline'"`）。
   - 修改：components/MermaidViewer.vue:51（`<div class="content" :style="contentStyle">`）改为加 `:key` 属性。
3. 加强容器兜底：在 `watch(isFullscreen)` 中，除 `dialogCompRef` 外也直接读取已暴露的 `dialogCompRef.value.containerRef?.value`，确保 `containerFullRef` 一定有值；若依旧为空，短延时重试一次。
   - 修改：components/MermaidViewer.vue:213-224 增加兜底与一次性短重试（如 `setTimeout` 16ms）。

## 验证步骤
- 进入演示页，内联正常渲染。
- 双击进入全屏：
  - 内容立即显示，无空白闪烁。
  - 工具栏、缩放、拖拽均可用（usePanZoom.ts）。
- 退出全屏：内容回到内联容器，`fit()` 正常。
- 错误提示区域无报错（components/MermaidViewer.vue:56）。

## 影响面与兼容性
- 不改动对外 API；仅内部时序与 Teleport 重挂载策略。
- 兼容 `renderMode: 'svg' | 'transform'`、`autoFit`、`zoom` 等现有逻辑。

请确认以上方案，我将据此进行代码改动并自测。