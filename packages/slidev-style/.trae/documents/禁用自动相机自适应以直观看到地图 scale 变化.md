## 原因分析

* `geoMercator().scale(...)` 改变几何尺寸，但 `MeshTemplate` 会自动基于物体包围盒计算相机位置与远近截面，使物体始终充满视口。

* 相关代码：

  * 外包围盒：`components\MeshTemplate.vue:81–95`

  * 相机默认值：`components\MeshTemplate.vue:101–129`

  * 相机应用：`components\MeshTemplate.vue:195–204`

## 变更项

* 将 `autoFit?: boolean` 移入 `cameraOption`，默认 `false`。

* 当 `cameraOption.autoFit=true` 时：

  * 使用包围盒计算的自适应相机（`computeBounding`/`buildAutoCameraDefaults`）。

* 当 `cameraOption.autoFit=false` 时：

  * 跳过自适应，完全使用用户传入的 `cameraOption` 或固定默认相机。

## 代码改动

* 文件：`projects/slidevs/learn-threejs/components/MeshTemplate.vue`

  * 在 `cameraOption` 中新增 `autoFit?: boolean`，默认 `false`。

  * 相机初始化改为：通过 `props.cameraOption?.autoFit` 判断是否走包围盒自适应；否则使用固定默认 `{ fov:60, near:1, far:5000, position:{x:0,y:0,z:600}, lookAt:(0,0,0) }` 与 `cameraOption` 合并。

  * 参考位置：`components/MeshTemplate.vue` 的 props 定义与 `useAuto` 判断。

* 文件：`projects/slidevs/learn-threejs/components/Demo033ChinaMap1.vue`

* 在模板中为 `MeshTemplate` 传入固定 `:camera-option`，并设置 `{ autoFit:false }`：`{ autoFit: false, fov:60, near:1, far:5000, position:{ x:0, y:0, z:600 } }`。

## 使用说明

* 想直观看到地图大小随投影 `scale` 变化：在示例组件禁用自动适配并传固定相机参数后，修改 `components/mesh/map/chinaMap1.ts:28` 的 `geoMercator().scale(...)` 即可看到变化。

* 或直接在示例中对分组缩放：`chinaMap.scale.set(s, s, s)`，配合固定相机即可生效。

## 实现步骤

1. 在 `MeshTemplate.vue` 的 `cameraOption` 中新增 `autoFit?: boolean`（默认 `false`）。
2. 在 `onMounted` 初始化相机时：

   * 若 `cameraOption.autoFit=true`，沿用现有逻辑（包围盒→自动相机）。

   * 若 `cameraOption.autoFit=false`，直接用 `cameraOption`（缺省则给固定默认：`fov=60, near=1, far=5000, position={x:0,y:0,z:600}`）。
3. 更新 `Demo033ChinaMap1.vue`：移除顶层 `:auto-fit`，改为在 `:camera-option` 中传 `{ autoFit:false, fov:60, near:1, far:5000, position:{ x:0, y:0, z:600 } }`。
4. 可选：在 `onFrame` 中支持交互演示（例如按钮或键盘事件）调用 `chinaMap.scale.set(s,s,s)` 以验证视觉大小确实变化。

## 验证

* 打开示例页面，先用固定相机观察当前大小。

* 调整 `geoMercator().scale(...)`（`components\mesh\map\chinaMap1.ts:28`）或直接 `chinaMap.scale.set(...)`，确认屏幕上地图大小随之变化。

* 检查 OrbitControls 与光源仍正常工作，切换 `autoFit` 回 `true` 时恢复原有自适应体验。
