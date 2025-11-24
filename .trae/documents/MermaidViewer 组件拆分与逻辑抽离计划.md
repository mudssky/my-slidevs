**目标**

* 提高 `MermaidViewer.vue` 的可维护性与可复用性，保持现有对外 API 完全兼容。

* 将渲染、交互、全屏、下载等逻辑解耦为可复用的 `composables` 与轻量子组件。

**现状要点**

* 渲染与交互集中在单文件，逻辑较多：`renderMermaid`、缩放/平移、`Teleport`、全屏 `dialog`、下载（`c:\home\Projects\frontend\my-slidevs\packages\slidev-addon-default\components\MermaidViewer.vue:139-182, 184-289, 334-346, 405-455`）。

* 现有包未提供 `composables`，拆分需新增目录但不改变对外组件路径与名称。

**拆分策略**

* 组件内保留对外壳：文件名与导出仍为 `MermaidViewer.vue`，对演示页面透明。

* 抽离逻辑为 `composables`：

  * `useMermaidRender`：动态导入与初始化、`renderMermaid`、错误处理、`svgRef/vb/vbOrig` 管理（`renderMermaid` 参考 `:139-182`）。

  * `usePanZoom`：`svg` 模式与 `transform` 模式的缩放/平移、`fit/reset`、滚轮与拖拽（参考 `:184-289, 291-333`）。

  * `useFullscreen`：`isFullscreen`、`dlgRef`、`toggleFullscreen`、`onDialogClose`、`Escape` 监听（参考 `:334-346, 373-403`）。

  * `useDownloads`：`downloadSVG/PNG`（参考 `:405-455`）。

* 视图子组件：

  * `MermaidViewerToolbar.vue`：纯展示工具栏，接受回调/emit（参考模板与样式 `:15-23, 42-50, 457-554`）。

  * `MermaidViewerDialog.vue`：包裹原生 `dialog` 与全屏 `viewport`，内部仅处理容器与关闭按钮。

**文件结构**

* `packages/slidev-addon-default/components/MermaidViewer.vue`（保留）

* `packages/slidev-addon-default/components/MermaidViewer/MermaidViewerToolbar.vue`

* `packages/slidev-addon-default/components/MermaidViewer/MermaidViewerDialog.vue`

* `packages/slidev-addon-default/composables/useMermaidRender.ts`

* `packages/slidev-addon-default/composables/usePanZoom.ts`

* `packages/slidev-addon-default/composables/useFullscreen.ts`

* `packages/slidev-addon-default/composables/useDownloads.ts`

**兼容性保证**

* 保留现有 Props 与默认值：`content/config/theme/securityLevel/zoom/minZoom/maxZoom/initialZoom/autoFit/downloadName/renderMode/exportScale`（参考 `:67-96`）。

* 不改变 `Teleport` 行为：仍根据 `isFullscreen` 切换 `to`（参考 `:131-134, 55-60`）。

* 保持样式类名与结构：`.viewport/.toolbar/.mermaid svg` 等（参考 `:463-554`）。

**具体改造要点**

* `MermaidViewer.vue` 仅负责：

  * 组装 `composables`；向子组件传递回调与状态。

  * 持有 `containerInlineRef/containerFullRef/elRef/dlgRef` 与 `teleportTarget`。

  * 统一生命周期与 `watch`，将内部调用迁移到各 `composables` 暴露的函数。

* `useMermaidRender`：

  * 动态导入 `mermaid` 并 `initialize`（参考 `:147-161`）。

  * `run` 后设置 `svgRef` 与 `viewBox`（参考 `:170-180`）。

  * 暴露 `renderMermaid(err)` 与必要状态。

* `usePanZoom`：

  * 两种模式：

    * `svg`：通过修改 `viewBox` 实现（`applyViewBox` 参考 `:324-333`）。

    * `transform`：通过 `scale/tx/ty` 与 `contentStyle`（参考 `:124-133, 233-248, 285-289`）。

  * 统一 `fit/reset/zoomIn/zoomOut/onWheel/onPointerDown/onPointerMove/onPointerUp`。

* `useFullscreen`：

  * `toggleFullscreen`、`onDialogClose`、`keydown(Escape)`、`teleportTarget` 计算（参考 `:334-346, 360-371, 373-403`）。

  * 暴露 `isFullscreen/dlgRef/teleportTarget/toggleFullscreen/onDialogClose`。

* `useDownloads`：

  * `downloadSVG/PNG` 与 `exportScale/downloadName`（参考 `:405-455`）。

* 生命周期清理：

  * 新增 `onUnmounted` 断开 `ResizeObserver/MutationObserver` 与事件监听，防止内存泄露（现有未清理，参考 `:373-403` 初始化）。

**测试与验证**

* 演示页验证：在已有演示中预览 `<MermaidViewer>`（例如 `projects/slidevs/learn-threejs/pages/03-geometry-material.md:7`），验证：渲染、缩放/平移、全屏切换、`Fit/Reset`、SVG/PNG 下载。

* 回归检查：

  * `renderMode='svg'/'transform'` 两种路径。

  * `content` 与 Slot 两种输入（参考 `docs/mermaid-viewer.md:11-19, 46-53`）。

  * `autoFit=true/false`、`minZoom/maxZoom` 边界。

* 性能与稳定：滚轮缩放流畅、拖拽平滑、无事件泄露；检查错误信息显示（`err`）。

**风险与回滚**

* 风险：拆分带来的引用错乱或事件传递丢失；`Teleport` 容器变更。

* 降低风险：逐步迁移函数，保留原命名与语义；增加卸载清理。

* 回滚：保留原 `MermaidViewer.vue` 历史版本，若出现问题可快速恢复。

**后续扩展**

* 将通用 `usePanZoom` 抽象为任意 `SVG/HTML` 视图的控制器，供未来 Viewer 共享。

* 视图组件支持插槽自定义按钮或拓展工具栏内容。

