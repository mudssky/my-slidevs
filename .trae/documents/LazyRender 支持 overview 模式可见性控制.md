## 目标

* 为 `packages/slidev-addon-default/components/LazyRender``.vue` **增加一个**可选属性，用于在 Slidev 的 `overview` 模式下不创建（不渲染）插槽内容，避免加载重型组件，降低资源占用。

* 保持现有“视口可见性懒渲染”行为不变，在普通模式下（slide/presenter）仍按可见性创建与销毁。

## API 设计

* 新增组件属性：`disableInOverview?: boolean`（kebab-case 用法：`disable-in-overview`），默认 `false`。

  * `false`：保持当前行为（在视口可见时渲染）。

  * `true`：当 `$renderContext === 'overview'` 时不渲染，即使在视口内也不创建插槽内容。

* 后续可扩展（不在本次实现中）：`allowedContexts?: ('overview'|'slide'|'presenter')[]`，实现更细粒度的上下文白名单。

## 组件实现

* 在 `<script setup>` 中：

  1. `defineProps<{ disableInOverview?: boolean }>()` 获取新属性。
  2. 使用 Slidev 的上下文：`const { $renderContext } = useSlideContext()`（沿用当前文件的自动导入方式）。
  3. `import { computed } from 'vue'`，计算 `isOverview = computed(() => $renderContext.value === 'overview')`。
  4. 组合条件：`canRenderByContext = computed(() => !(props.disableInOverview && isOverview.value))`。
  5. 保持现有 `shouldRender` 逻辑（基于 `useElementVisibility` + `watch`），最终渲染条件为 `shouldRender && canRenderByContext`。

* 在 `<template>` 中：

  * 将原来的 `<slot v-if="shouldRender" />` 改为 `<slot v-if="shouldRender && canRenderByContext" />`；其余结构不变（容器与占位符仍存在）。

* 代码风格与约束：

  * 复用现有自动导入 `useSlideContext`；仅新增 `computed` 引入与响应式组合，不添加多余注释与日志。

  * 命名保持 `camelCase`/`PascalCase` 既有约定，属性默认值与现有行为向后兼容。

## 兼容性与影响范围

* 现有所有 `<LazyRender>` 用法不需要改动；只有在需要在 overview 模式禁用渲染的页面中，才增加 `disable-in-overview` 属性。

* 对 `projects/slidevs/learn-threejs/pages/*` 中已使用的 `<LazyRender>` 不产生破坏性影响；仅按需增强。

## 验证方案

* 在已运行的开发服务下：

  * 普通模式：确认滚动到视口时仍按 200ms 延迟创建插槽内容；离开视口立即销毁。

  * 切换到 overview 模式：添加 `disable-in-overview` 的页面中，确认插槽内容不被创建（占位符显示），返回普通模式后恢复按可见性渲染。

  * 观察切换上下文时的资源释放（组件卸载），无错误日志与内存异常。

## 变更清单

* 修改：`packages/slidev-addon-default/components/LazyRender.vue`

  * 新增 `disableInOverview` 属性、`computed` 派生、模板条件合并。

* 无其他文件改动。

## 下一步（用户确认后执行）

* 按上述方案更新组件，实现并进行本地验证；若后续需要更灵活的上下文控制，再评估 `allowedContexts` 扩展。

