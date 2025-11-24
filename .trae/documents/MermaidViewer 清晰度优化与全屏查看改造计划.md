## 问题诊断
- 当前缩放通过对包装元素应用 CSS `transform`（见 packages/slidev-addon-default/components/MermaidViewer.vue:67-69 的 `contentStyle`），并启用了 `will-change: transform`（同文件:270）。
- 浏览器在对包含 SVG 的元素做复合层变换时常将其栅格化再缩放，导致大倍率下文字与线条发糊。
- 平移使用 `translate(x, y)` 产生大量非整数像素位移，也会带来次像素模糊。

## 目标
- 缩放/平移保持纯矢量级别渲染，放大后仍清晰。
- 支持一键全屏查看，适合大图浏览与导出。
- 保持与现有 API 兼容，默认行为更清晰。

## 方案一：改为 SVG 原生缩放（viewBox 驱动）
- 新增 `renderMode` 可选值：`'svg' | 'transform'`，默认 `'svg'`。
- 在渲染后获取 `<svg>` 的 `viewBox.baseVal`（已有类型守卫，同文件:117-123）。
- 用缩放修改 `viewBox` 的 `width/height`（缩放 = 原始宽高 / scale），用平移修改 `viewBox` 的 `x/y`（依据鼠标拖拽累积位移换算到 SVG 坐标）。
- 停用对 `.content` 的 CSS `scale/translate`，仅在 `renderMode='transform'` 时保留旧逻辑作为兼容回退。
- 将位移取整（`Math.round`），避免次像素模糊；文本、线条保持几何精度。

## 方案二：渲染质量 CSS 微调
- 在 `.mermaid svg` 设置：`shape-rendering: geometricPrecision; text-rendering: optimizeLegibility;`。
- 在 `renderMode='svg'` 时移除 `.content` 的 `will-change: transform`（同文件:270），避免被提前栅格化。

## 方案三：全屏弹窗查看
- 新增工具栏按钮 `Fullscreen`。
- 通过 `<Teleport to="body">` 渲染一个全屏覆盖层（`position: fixed; inset: 0; z-index: 9999; background: var(--slidev-slide-container-background, rgba(0,0,0,.85))`）。
- 全屏层内复用同一组件视图（保持同一渲染逻辑与缩放模式），提供关闭按钮与 ESC 关闭；双击背景也可关闭。
- 进全屏时执行一次 `fit()`，保证居中与最大化显示；退出全屏还原先前缩放/位置。

## 方案四：导出清晰度提升
- 新增 `exportScale`（默认 2），用于 PNG 导出时将画布大小按比例放大，得到更高分辨率图像。
- PNG 导出保持透明背景，或新增 `exportBackground` 可选色。

## 方案五：交互与性能优化
- 对 `renderMermaid()` 添加轻量防抖（例如 50ms），合并短时间多次变更；`watch` 已存在（同文件:180-187）。
- 添加 `MutationObserver` 监听 slot 内容变更，自动重渲染（仅在 `content` 为空时启用）。
- 鼠标拖拽时使用 `setPointerCapture`，并设置 `cursor: grab/grabbing`，提升手感与可靠性。
- 维护一次性 `ResizeObserver`（同文件:193-197），在 `renderMode='svg'` 下仅调用 `fit()` 而不重复栅格缩放。

## 兼容与安全
- 保持现有 props 不变，新增为可选且有默认值；无服务端逻辑与外部密钥。
- 仅使用现有工作区依赖（`mermaid` 已在 `packages/slidev-addon-default/package.json`）。

## 验证
- 在已有页面中加载大图：比较旧模式与新模式的文字边缘清晰度；缩放到 300%-400% 应仍保持锐利。
- 测试全屏按钮、ESC/点击关闭、导出 PNG 清晰度与尺寸；`Fit/Reset` 在全屏/普通模式下行为一致。

## 交付内容
- 更新 `MermaidViewer.vue`：新增 `renderMode/exportScale`、实现 viewBox 缩放、Teleport 全屏覆盖层、CSS 质量调整。
- 更新使用文档：增加全屏与清晰度相关说明、PNG 导出倍率示例。
