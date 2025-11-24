## 现象与可能原因
- 缩放仍不生效：当前通过修改 `svg.viewBox.baseVal` 实现缩放，部分浏览器/环境对 `baseVal` 的写入并不可靠；改用 `setAttribute('viewBox', ...)` 更稳妥。
- 下载仍不生效：容器查询 `svg` 可能在 Teleport/全屏切换时失效；立即 `URL.revokeObjectURL` 可能在部分浏览器中过早；PNG 导出在某些图形字体/样式下可能触发跨域污损（`toDataURL` 失败）。

## 修改方案
1) 统一改用属性写入 viewBox
- `usePanZoom.applyViewBox()` 将 `baseVal` 写入改为 `svg.setAttribute('viewBox', \`${x} ${y} ${w} ${h}\`)`。
- 保持 `zoomIn/zoomOut/onWheel` 逻辑，最终调用 `applyViewBox()` 以属性写入更新。

2) 下载使用 svgRef 与延迟 revoke
- `useDownloads` 新增接收 `svgRef`，优先使用该引用；容器兜底查询保留。
- SVG 下载：`URL.revokeObjectURL` 改为延迟（如 `setTimeout`）确保浏览器读取完成。
- PNG 下载：对 `toDataURL` 增加 try/catch，失败时回退为直接下载 SVG 文件（至少保证“下载一个文件”发生）。

3) 验证与回归
- 非全屏/全屏两态下，按钮缩放与滚轮缩放都生效；容器双击仍仅自身触发。
- 下载 SVG/PNG 均能触发保存；PNG 若画布导出失败则回退到 SVG。

## 涉及文件
- `packages/slidev-addon-default/composables/usePanZoom.ts`：`applyViewBox()` 改为属性写入。
- `packages/slidev-addon-default/composables/useDownloads.ts`：新增 `svgRef` 参数、延迟 revoke、PNG 导出回退逻辑。
- `packages/slidev-addon-default/components/MermaidViewer.vue`：调用 `useDownloads` 处传入 `svgRef`。

确认后我将开始修改并做本地验证。