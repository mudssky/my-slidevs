## 原因分析
- Vue 组件事件命名：当前在 `MermaidViewer.vue` 与 `MermaidViewerDialog.vue` 使用了驼峰事件名（如 `@zoomOut`、`@toggleFullscreen`）。`eslint-plugin-vue` 的“strongly-recommended”规则启用 `vue/v-on-event-hyphenation`，要求模板中的自定义事件使用连字符（kebab-case），以与 HTML 属性风格一致并避免大小写歧义。
- 具体位置：
  - `packages/slidev-addon-default/components/MermaidViewer.vue:19-25`、`40-46` 使用了驼峰事件监听。
  - `packages/slidev-addon-default/components/MermaidViewer/MermaidViewerToolbar.vue:3-11` 通过 `$emit('zoomOut'|'zoomIn'...)` 发出驼峰事件；`defineEmits` 也为驼峰。
  - `packages/slidev-addon-default/components/MermaidViewer/MermaidViewerDialog.vue:22-28` 模板中转发驼峰事件；`defineEmits` 同为驼峰。
- Markdown 报警：
  - `projects/slidevs/learn-threejs/pages/03-geometry-material.md:1-3` Frontmatter 缺少 `transition` 属性，触发自定义/工具的校验提醒（项目通常建议每页声明过渡）。
  - `MD046/code-block-style`：当前使用围栏代码块（```），规则期望缩进式代码块。对 `mermaid` 来说应保留围栏，否则解析/渲染会受影响。

## 修复策略
### 1) 统一自定义事件为 kebab-case
- 在 `MermaidViewerToolbar.vue`：将 `defineEmits` 与 `$emit()` 的事件名改为 `zoom-out`、`zoom-in`、`toggle-fullscreen`、`download-svg`、`download-png`（单词事件如 `reset`、`fit` 保持不变）。
- 在 `MermaidViewerDialog.vue`：同步将 `defineEmits` 事件名改为 kebab-case；模板中对 `<MermaidViewerToolbar>` 的事件转发改为 kebab-case。
- 在 `MermaidViewer.vue`：把所有事件监听改为 kebab-case（例如 `@zoom-out="zoomOut"` 等），功能方法名无需改动。
- TypeScript：`defineEmits([...])` 的字符串字面量更改即可，无需额外类型定义；保持现有组合式函数引用。

### 2) Markdown 页面
- 在 `03-geometry-material.md` 的 Frontmatter 补充 `transition` 字段（例如 `transition: fade` 或沿用主题推荐值），以满足校验。
- 关于 `MD046`：
  - 保持 `mermaid` 使用围栏代码块。为避免误报：
    - 在该代码块前后加 `<!-- markdownlint-disable MD046 -->` 与 `<!-- markdownlint-enable MD046 -->`，或
    - 调整工作区的 Markdownlint 配置将 MD046 风格设为 `fenced`，并对 `mermaid` 语言豁免。
  - 若项目已有统一规则，按项目偏好选择其一并在整个演示目录一致化。

## 验证
- 运行工作区 ESLint，确保 Vue 事件相关警告消除。
- 预览 `learn-threejs` 演示，验证 `mermaid` 渲染正常；过渡效果生效；Markdown 告警不再出现或被正确豁免。

## 变更范围与影响
- 仅修改三个组件的事件名与一个 Markdown 页的 Frontmatter/注释，不影响公共 API；组件间事件名一致性增强，降低大小写差异导致的潜在监听问题。