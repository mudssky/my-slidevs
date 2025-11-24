## 结论
- 在 Slidev 的 Markdown 环境中，通过 slot 传入 Mermaid 文本更符合直觉与内容可读性；保留 prop 方式以支持动态/程序化生成，两者兼容最佳。

## 设计要点
- 支持两种输入：
  - `content` prop（现有）
  - 默认 slot 内容（新增）
- 优先级：若 `content` 存在使用 prop；否则使用 slot 文本。
- 兼容现有缩放/平移/下载逻辑，无需改动。

## 代码改动
- 模板：在 `<pre ref="elRef">` 中渲染 slot 作为文本来源，当 `content` 为空时显示。
```vue
<pre ref="elRef"><slot v-if="!content" /></pre>
```
- 渲染逻辑：取文本来源并渲染。
```ts
const host = elRef.value
const text = p.content && p.content.length > 0 ? p.content : (host?.textContent ?? '').trim()
if (!text) return
host.classList.add('mermaid')
host.textContent = text
await nextTick()
await mermaid.run({ nodes: [host] })
```
- 移除潜在注释节点（某些 MD 解析器会产生），避免干扰渲染：
```ts
for (const child of Array.from(host.childNodes)) {
  if (child.nodeType === Node.COMMENT_NODE) host.removeChild(child)
}
```
- 监听：保留 `watch(() => [p.content, p.theme, p.securityLevel])`，当使用 slot 时手动触发渲染（初次挂载已调用）。如需响应 slot 动态变化，可后续加 `MutationObserver`（默认不启用）。

## 文档更新
- 在 `docs/mermaid-viewer.md` 增加 slot 用法示例：
```md
<MermaidViewer>
sequenceDiagram
  Alice->>Bob: Hello
  Bob-->>Alice: Hi
</MermaidViewer>
```
- 说明优先级与适用场景：slot 适合静态展示、prop 适合动态内容。

## 验证
- 在示例页分别以 prop 与 slot 两种方式渲染，确认缩放、平移、下载与自适应正常。
- 测试含 `viewBox` 与无 `viewBox` 的图导出尺寸是否合理。

如确认，我将按以上方案实现组件与文档更新，并保留完全向后兼容。