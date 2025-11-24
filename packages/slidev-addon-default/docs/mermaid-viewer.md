# MermaidViewer 使用文档

## 组件概述

- 位置：`packages/slidev-addon-default/components/MermaidViewer.vue`
- 功能：将传入的 Mermaid 文本渲染为 SVG，支持缩放、平移与下载（SVG/PNG）。

## 快速使用

```md
<MermaidViewer
  :content="`graph TD; A-->B; A-->C; B-->D; C-->D;`"
  :config="{ fontFamily: 'trebuchet ms' }"
  theme="default"
  :autoFit="true"
  :zoom="true"
  downloadName="my-diagram"
/>
```

## 属性

- `content: string` Mermaid 图描述文本（必填）
- `config?: object` Mermaid 初始化配置（将合并到 `mermaid.initialize`）
- `theme?: string` Mermaid 主题（如 `default`、`dark`、`neutral`、`forest`），默认 `default`
- `securityLevel?: 'sandbox'|'strict'|'loose'|'antiscript'` 默认 `strict`
- `zoom?: boolean` 是否显示缩放工具栏，默认 `true`
- `minZoom?: number` 最小缩放，默认 `0.25`
- `maxZoom?: number` 最大缩放，默认 `4`
- `initialZoom?: number` 初始缩放，默认 `1`
- `autoFit?: boolean` 渲染后自动适配容器，默认 `true`
- `downloadName?: string` 下载导出的基础文件名，默认 `mermaid-graph`

## 交互与下载

- 工具栏按钮：`-`、`+`、`Reset`、`Fit`、`SVG`、`PNG`
- 鼠标滚轮缩放，按住拖拽平移
- 点击 `SVG` 下载原始 SVG；点击 `PNG` 将当前图转为 PNG 下载

## Slot 传入内容
当你更偏好在 Markdown 中直接书写图内容时，使用默认 slot：

```md
<MermaidViewer>
sequenceDiagram
  participant A as Client
  participant B as Server
  A->>B: Request
  B-->>A: Response
</MermaidViewer>
```

说明：若同时传入 `content` 与 slot，组件优先使用 `content`；若 `content` 为空，则使用 slot 文本。

## 兼容与安全

- 默认 `securityLevel: 'strict'`，降低潜在 XSS 风险；如你能保证内容安全可改为 `loose` 或 `antiscript`
- 大图渲染采用 CSS `transform`，交互流畅；当 `viewBox` 存在时以其为导出尺寸，否则回退到元素边界尺寸

## 示例内容

```text
sequenceDiagram
  participant A as Client
  participant B as Server
  A->>B: Request
  B-->>A: Response
```

## 常见问题

- 主题未生效：请确保传入的 `theme` 在当前 Mermaid 版本可用
- 内容报错：检查 `content` 是否符合 Mermaid 语法，必要时在外部先用 Mermaid Live Editor 验证

## 依赖与安装

- 该组件内使用动态导入 `mermaid`，请在工作区根执行 `pnpm install` 以确保依赖安装完成
