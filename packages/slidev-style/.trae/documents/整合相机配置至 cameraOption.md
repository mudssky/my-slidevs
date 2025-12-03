**目标**

* 进行破坏性升级：移除 `fov/near/far/cameraPosition`，统一改为单一 `cameraOption`。

* 升级组件与文档，并检查项目中使用处。

**范围**

* 组件：`c:\home\Projects\frontend\my-slidevs\projects\slidevs\learn-threejs\components\MeshTemplate.vue`

* 文档：`c:\home\Projects\frontend\my-slidevs\projects\slidevs\learn-threejs\docs\mesh-template.md`

* 全仓检索结果显示暂无其他实际使用文件需要同步改动（示例仅在上述文档内）。

**API 变更**

* 新增并强制使用：`cameraOption?: { fov: number; near: number; far: number; position: { x: number; y: number; z: number } }`

* 删除以下 props：`fov`, `near`, `far`, `cameraPosition`

* 默认值通过 `withDefaults` 提供：

  * `cameraOption: () => ({ fov: 60, near: 1, far: 1000, position: { x: 200, y: 200, z: 200 } })`

**代码修改要点**

* 在 `MeshTemplate.vue`：

  * 从 `defineProps` 移除 `fov/near/far/cameraPosition` 定义与默认值。

  * 新增 `cameraOption` 类型，内部字段不使用可选，依赖默认对象保障必填。

  * 创建相机：`new THREE.PerspectiveCamera(props.cameraOption.fov, aspect, props.cameraOption.near, props.cameraOption.far)`

  * 设相机位置：`camera.position.set(props.cameraOption.position.x, props.cameraOption.position.y, props.cameraOption.position.z)`

  * 保持其余逻辑不变（controls/background/lights/shadows/循环渲染）。

  * 不新增代码注释。

**文档更新**

* 在 `mesh-template.md`：

  * Props 列表删除 `fov/near/far/cameraPosition`，新增并完整说明 `cameraOption` 字段与默认值。

  * 更新所有示例为统一写法：

    * `<MeshTemplate :object3d="mesh" :cameraOption="{ fov: 75, near: 0.1, far: 2000, position: { x: 300, y: 180, z: 260 } }" />`

  * 在“提示”部分说明：相机配置仅通过 `cameraOption` 提供。

**验证**

* 运行示例页面，确认：

  * 仅 `cameraOption` 生效，组件渲染、交互与光照/阴影保持原状。

  * 画布尺寸与 Slidev 配置一致。

**迁移指导**

* 将旧用法统一迁移为：

  * `cameraOption = { fov, near, far, position: cameraPosition }`

* 文档中的

