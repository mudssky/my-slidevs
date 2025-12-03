## 目标

* 优化 `cameraOption` 默认值策略，支持对传入对象自动取景与深度合并。

* 使不传或部分传 `cameraOption` 时能合理定位并包裹要渲染的对象。

## 设计要点

* 保留现有类型为可选：`fov? near? far? position?: { x? y? z? }`。

* 自动取景：当存在 `object3d`（单个或数组）时，计算其联合包围盒与中心点，生成更合理的默认相机参数。

* 深度合并：将“自动默认”与用*户提供的* *`cameraOption`* *进行深度合并*，支持仅覆盖子字段（如只覆写 `position.x`）。

* 参数校验：对 `fov/near/far` 做边界校验与关系约束（如 `near > 0`、`far > near`）。

## 具体实现

1. 提取工具方法（组件内实现）：

   * `computeBounding(objects: THREE.Object3D | THREE.Object3D[])`：返回 `{ center: THREE.Vector3, radius: number }`，基于 `THREE.Box3().setFromObject` 合并所有对象。

   * `buildAutoCameraDefaults(bounds?)`：

     * 若有 `bounds`：

       * `fov`: 60

       * `near`: `Math.max(0.1, bounds.radius * 0.01)`

       * `far`: `Math.max(near + 1, bounds.radius * 10)`

       * `position`: 根据视锥体计算在 Z 轴方向留白；示例：在中心点基础上 `{ x: r*0.8, y: r*0.6, z: r / Math.tan(fov/2) + r*0.5 }`

       * `lookAt`: 绑定中心点

     * 若无 `bounds`：沿用现有默认 `{ fov:60, near:1, far:1000, position:{ x:200,y:200,z:200 } }`

   * `deepMergeCamera(defaults, user)`：深度合并 `position` 嵌套字段。
2. 在 `onMounted` 中：

   * 读取 `props.object3d` 计算 `bounds`（`projects/slidevs/learn-threejs/components/MeshTemplate.vue:109-116`）。

   * 使用 `buildAutoCameraDefaults(bounds)` 得到 `autoDefaults`。

   * 合并得到最终 `camOpt = deepMergeCamera(autoDefaults, props.cameraOption || {})`。

   * 创建相机与设置位置：

     * `PerspectiveCamera(camOpt.fov, slideWidth/slideHeight, camOpt.near, camOpt.far)`（`components/MeshTemplate.vue:128-133`）。

     * `camera.position.set(camOpt.position.x, camOpt.position.y, camOpt.position.z)` 并 `lookAt(bounds?.center || new THREE.Vector3(0,0,0))`（`components/MeshTemplate.vue:134-136`）。
3. 参数校验与回退：

   * `fov` 限制在 `[10, 120]`。

   * `near = Math.max(1e-3, near)`；`far = Math.max(near + 1, far)`。
4. 文档更新（`projects/slidevs/learn-threejs/docs/mesh-template.md`）：

   * 说明“自动取景与默认值”行为：存在 `object3d` 时会自动计算并设置相机，用户可通过 `cameraOption` 局部覆盖。

   * 增加示例：仅传 `position.x` 或仅传 `fov` 覆盖其余保留自动默认。

## 验证方案

* 场景为空：不传 `object3d` 与 `cameraOption`，相机使用静态默认，画面正常。

* 单对象：传入一个 `mesh` 不传 `cameraOption`，相机自动框选对象并居中。

* 多对象：传入多个 `mesh`，验证联合包围盒取景正确。

* 局部覆盖：仅传 `{ position: { x: 300 } }` 或 `{ fov: 70 }`，其他参数保持自动默认。

* 极端值：传入非法 `near/far/fov`，校验与回退生效。

## 代码位置

* 主要修改：`projects/slidevs/learn-threejs/components/MeshTemplate.vue:109-136`（计算 bounds、生成与合并默认、创建相机）。

* 文档：`projects/slidevs/learn-threejs/docs/mesh-template.md` 增加说明与示例。

请确认以上方案后，我将实施修改与验证。
