## 命名目标

* 提高可读性：直观表达“与可见性联动的 lil‑gui 创建/显示”

* 保持一致：遵循 Vue 组合式 API 的 `useXxx` 钩子命名与 camelCase

* 降低歧义：避免通用的 `create` 导致语义不清

## 提议命名

## 钩子：`useGuiAutoVisibility`（推荐）

* 备选：`useGuiVisibilityObserver`、`useLilGuiAutoVisibility`

- 返回方法：`create` → `createGui`（推荐）

  * 备选：`initGui`、`setupGui`、`mountGui`
- 可选类型：`GuiVisibilityOptions` → `GuiAutoVisibilityOptions`

## 变更范围

* 源文件：`projects/slidevs/learn-threejs/hooks/useGuiVisibility.ts`

  * 位置：函数定义 `projects/slidevs/learn-threejs/hooks/useGuiVisibility.ts:9`

  * 返回方法定义 `projects/slidevs/learn-threejs/hooks/useGuiVisibility.ts:16-29`

* 引用组件：

  * `projects/slidevs/learn-threejs/components/Demo002GUI.vue`

  * `projects/slidevs/learn-threejs/components/Demo003PerspectiveCamera.vue`

  * `projects/slidevs/learn-threejs/components/ControlsOrbitLimits.vue`

  * `projects/slidevs/learn-threejs/components/AnimationBlend.vue`

* 文档页面：

  * `projects/slidevs/learn-threejs/pages/02-basics.md`

  * `projects/slidevs/learn-threejs/pages/14-debug-best-practices.md`

## 实施步骤

1. 在钩子文件中将导出函数重命名为 `useGuiAutoVisibility`；返回对象的属性由 `{ create }` 改为 `{ createGui }`
2. 同步更新类型名为 `GuiAutoVisibilityOptions`（若使用到）
3. 执行代码引用替换：组件内改为 `const { createGui } = useGuiAutoVisibility(domRef)`，并将 `const gui = create()` 改为 `const gui = createGui()`
4. 更新文档中示例与文字描述为新名称
5. 可选：在钩子文件中临时保留别名导出以平滑过渡：`export { useGuiAutoVisibility as useGuiVisibility }`

## 验证

* 启动演示开发服务器，访问上述四个组件页，确认：

  * GUI 正常创建、页面可见时 `show()`、不可见时 `hide()`

  * 卸载时 `observer.disconnect()` 与 `gui.destroy()` 正常触发

* 全局类型检查通过，无未更新引用

## 回滚与兼容策略

* 若发现外部示例或文章仍依赖旧名，保留别名导出一段时间并在文档标注重命名说明

## 产出示例（目标用法）

* `const { createGui } = useGuiAutoVisibility(domRef, { threshold: 0.05 })`

* `const gui = createGui()`

若同意以上方案，我将据此完成重命名与引用更新，并验证运行效果。
