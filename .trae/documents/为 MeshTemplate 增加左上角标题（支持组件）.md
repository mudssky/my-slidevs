## 改动目标
- 在 MeshTemplate 左上角显示标题，可传入纯文本或任意组件
- 以 props 与命名插槽两种方式提供（插槽优先）
- 不影响 Three.js 渲染与交互

## 组件改动
- 模板结构：为 WebGL 容器外包一层相对定位容器，加入绝对定位的标题层
- 新增 props：
  - `title?: string`（可选，纯文本标题）
- 新增插槽：
  - `#title`（命名插槽，若提供则优先渲染插槽内容）
- 样式：
  - 容器 `position: relative`
  - 标题层 `position: absolute; top: 8px; left: 8px; z-index: 10`
  - 处理指针事件：标题层 `pointer-events: none`，直系子元素 `pointer-events: auto`，避免影响 OrbitControls 拖拽

## 代码要点
- 保持现有渲染逻辑与 `domRef` 不变，仅调整模板结构与新增 props/插槽
- 不引入新依赖，遵循现有 TypeScript + Vue 3 Composition API 规范

## 文档更新（mesh-template.md）
- 在 Props 列表中新增 `title` 与 “插槽：#title” 小节
- 增加两个使用示例：
  - 传入字符串：`<MeshTemplate title="我的标题" />`
  - 传入组件：
    ```vue
    <MeshTemplate>
      <template #title>
        <MyTitle />
      </template>
    </MeshTemplate>
    ```
- 说明插槽优先于 props 渲染

## 验证方案
- 本地预览：在现有示例页添加两个用例（纯文本/组件）核对显示位置与层级
- 交互检查：OrbitControls 拖拽、缩放正常；标题组件交互正常（因子元素恢复 pointer-events）

## 变更范围
- `projects/slidevs/learn-threejs/components/MeshTemplate.vue`
- `projects/slidevs/learn-threejs/docs/mesh-template.md`