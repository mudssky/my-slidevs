## 目标
- 在 `webgl` 布局中内置懒渲染，减少每处手动引入 `LazyRender` 的负担
- 提供可配置的开关与概览页（overview）行为控制
- 增加文档，说明用法、默认值与示例

## 现状洞察
- `layouts/webgl.vue` 目前直接渲染 `<slot />`（c:\home\Projects\frontend\my-slidevs\packages\slidev-addon-default\layouts\webgl.vue:1–7），无惰性渲染逻辑
- `components/LazyRender.vue` 已实现视口可见性与渲染上下文控制（c:\home\Projects\frontend\my-slidevs\packages\slidev-addon-default\components\LazyRender.vue:3–31, 34–46）

## 设计方案
- 在 `webgl.vue` 中默认使用 `LazyRender` 包裹原来的 `<slot />`
- 通过布局 props 控制行为：
  - `lazy?: boolean`（默认 `true`）— 是否启用懒渲染
  - `lazyEnableInOverview?: boolean`（默认 `false`）— 概览页是否也渲染
- 当 `lazy=false` 时，回退为当前的直接 `<slot />` 行为
- 保持样式与结构不变（`.webgl-layout`, `.webgl-stage` 原样保留）

## 代码改动（示例，仅说明）
- 更新 `webgl.vue`：
  - `import LazyRender from '../components/LazyRender.vue'`
  - `withDefaults(defineProps<{ lazy?: boolean; lazyEnableInOverview?: boolean }>(), { lazy: true, lazyEnableInOverview: false })`
  - 模板：`v-if="lazy"` 时使用 `<LazyRender :enable-in-overview="lazyEnableInOverview"> <slot /> </LazyRender>`；否则直接 `<slot />`

## 文档新增
- 在 `packages/slidev-addon-default/docs` 添加 `webgl.md`：
  - 介绍内置懒渲染、默认行为
  - 前言（frontmatter）示例：
    - 关闭：
      ```yaml
      ---
      layout: webgl
      lazy: false
      ---
      ```
    - 在概览开启：
      ```yaml
      ---
      layout: webgl
      lazyEnableInOverview: true
      ---
      ```
  - 常见问题与性能提示

## 兼容性与验证
- 行为回退清晰：`lazy=false` 与当前实现一致
- 验证场景：
  - 普通播放模式：滑动切换时仅可见页渲染
  - 概览模式：根据 `lazyEnableInOverview` 验证渲染/不渲染

## 迁移建议
- 之前手动在 WebGL 页引入 `LazyRender` 的地方可移除，改用布局的 props 控制

## 交付项
- 更新后的 `webgl.vue`
- 新增文档 `docs/webgl.md`（或同目录结构下的说明文件）
- 简短变更说明（CHANGELOG 或 README 片段，若需要）