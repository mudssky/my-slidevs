# WebGL 布局懒渲染（LazyRender）

`layout: webgl` 现已内置懒渲染，无需在每个页面手动引入 `LazyRender`。通过布局 props 可灵活控制是否启用及在概览页（overview）中的渲染行为。

## 默认行为

- 默认开启懒渲染：仅当页面进入视口时才创建内容
- 概览页默认不渲染，以保持性能与滚动流畅

## 配置项

- `lazy: boolean`，默认 `true`，控制是否启用懒渲染
- `enableInOverview: boolean`，默认 `false`，控制概览页是否也渲染

## 使用示例
关闭懒渲染：

```yaml
---
layout: webgl
lazy: false
---
```

在概览页也渲染：

```yaml
---
layout: webgl
enableInOverview: true
---
```

## 迁移指南

- 如果之前在 WebGL 页面中手动使用了 `LazyRender`，可移除该组件，改用以上布局配置项
- 不需要改动页面内容结构，布局会自动包裹并管理渲染时机

## 常见问题

- 懒渲染的占位容器会有最小高度（来自组件内部样式），以便视口可见性检测；在全屏 WebGL 场景下不会影响最终显示
- 如果页面需要在概览模式下展示实际渲染结果（例如截图或演示），开启 `enableInOverview`

## 实现说明

- 布局文件：`packages/slidev-addon-default/layouts/webgl.vue`
- 懒渲染组件：`packages/slidev-addon-default/components/LazyRender.vue`
