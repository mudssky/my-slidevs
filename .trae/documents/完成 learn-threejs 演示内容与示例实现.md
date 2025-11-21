## 目标与范围
- 完成 `projects/slidevs/learn-threejs` 的 PPT 内容编写与演示示例组件实现，覆盖 01–16 章节。
- 保持与现有结构一致：多页聚合在 `slides.md`（projects/slidevs/learn-threejs/slides.md:25–85），演示组件在 `components/`（Demo001start.vue、Demo002GUI.vue、Demo003PerspectiveCamera.vue）。
- 复用现有工具与样式：`Vue 3 + Slidev + TypeScript`，`@mudssky/slidev-style`，`useSlideContext`、`useGuiVisibility`（hooks/useGuiVisibility.ts:1–40）。

## 交付物
- 章节内容：每页含目标、核心知识点、简要讲解与小结，必要时包含代码片段。
- 示例组件：为关键章节提供可交互 Demo，统一 `<script setup lang="ts">` 与 `OrbitControls` 交互模式。
- 资源位：轻量 glTF/HDR/纹理示例置于 `public/assets/*`（相对演示根），按需加载。
- 验证脚本：使用现有 `pnpm dev` 与 `slidev:export` 流程验证预览与导出。

## 内容编写计划（pages）
- 01 安装与最小闭环（pages/01-install.md）：安装方式与最小渲染闭环，列出 `three` 导入与渲染循环代码；说明 `pnpm dev`/`slidev build` 使用。
- 02 基础闭环（pages/02-basics.md）：扩展 Scene/Renderer/Camera 的职责，加入像素比/清屏/自适应案例；嵌入基础 Demo。
- 03 几何体与材质（pages/03-geometry-material.md）：展示常见几何体、Basic/Phong/Standard 对比；材质参数表述与取舍。
- 04 光源与阴影（pages/04-lights-shadows.md）：Ambient/Directional/Point/Spot 用法；阴影启用与软阴影参数；性能权衡。
- 05 相机与控制（pages/05-camera-controls.md）：透视/正交差异、视锥与投影；`OrbitControls` 边界与阻尼。
- 06 纹理与环境贴图（pages/06-textures-envmap.md）：色空间、过滤、EnvMap（HDR/EXR）；贴图加载与转换注意事项。
- 07 加载器与 glTF（pages/07-loaders-gltf.md）：`GLTFLoader`/`DRACOLoader` 用法、资源组织与动画通道；常见路径/材质丢失问题。
- 08 动画系统（pages/08-animation.md）：`AnimationMixer`、剪辑混合/淡入淡出、时间步长控制。
- 09 射线拾取（pages/09-raycaster.md）：`Raycaster` 拾取、坐标变换与设备像素比、选择/高亮/信息面板。
- 10 后期处理（pages/10-postprocessing.md）：`EffectComposer` 通道链路，抗锯齿/景深/风格化效果与顺序。
- 11 Shader 入门（pages/11-shader.md）：GLSL 顶点/片元结构，`ShaderMaterial` 与常见坑位。
- 12 高级与性能（pages/12-advanced-performance.md）：`InstancedMesh`、LOD、裁剪、合批与监测策略。
- 13 物理（pages/13-physics.md，可选）：讲解物理步进/渲染同步与刚体基础，示例尽量采用轻量自定义步进，避免新增重依赖。
- 14 调试与最佳实践（pages/14-debug-best-practices.md）：GUI/Helpers 驱动演示，工程结构与命名约定。
- 15 综合案例（pages/15-case-study.md）：串联加载→材质→光影→交互→后期→性能，交付可复用微场景。
- 16 参考资料（pages/16-resources.md）：官方文档与示例集合链接、常用工具链与社区资源。

## 示例组件实现计划（components）
- 基础：`Demo001start.vue` 已有最小闭环（components/Demo001start.vue:15–90），微调以适配像素比/清屏；
- GUI：`Demo002GUI.vue` 已接入 `useGuiVisibility`（components/Demo002GUI.vue:25–88），补充更多控件类型与场景参数；
- 相机：`Demo003PerspectiveCamera.vue` 已展示 CameraHelper 与参数面板（components/Demo003PerspectiveCamera.vue:37–56），补充正交相机对比。
- 新增 Demo（命名示例）：
  - `GeometryShowcase.vue`（03）：多几何与材质对比、切换控件；
  - `LightsAndShadows.vue`（04）：阴影开关、软阴影参数；
  - `ControlsOrbitLimits.vue`（05）：控制器边界/阻尼；
  - `EnvMapReflectRefract.vue`（06）：HDR 环境反射/折射；
  - `GLTFLoadAndAnimate.vue`（07）：加载模型与动画播放；
  - `AnimationBlend.vue`（08）：剪辑混合与淡入；
  - `RaycastSelect.vue`（09）：拾取高亮与信息面板；
  - `ComposerPipeline.vue`（10）：后期通道链路；
  - `ShaderMaterialIntro.vue`（11）：最小自定义着色器；
  - `InstancedLOD.vue`（12）：实例化与 LOD；
  - `PhysicsStepDemo.vue`（13）：自定义步进模拟基础物理。

## 技术约定与复用
- 统一 `<script setup lang="ts">` 与 Composition API；尺寸获取走 `useSlideContext`（components/Demo001start.vue:19–23）。
- 控件使用 `lil-gui`（hooks/useGuiVisibility.ts:3、17–29），在非可见时自动隐藏。
- 资源路径：演示内 Markdown 引用与 Demo 加载统一相对 `public/` 根。
- 不引入重量级依赖；必要的 three/examples 模块按需导入（`OrbitControls`、Composer Passes 等）。

## 资源规划（轻量）
- 纹理：一张漫反射/法线贴图 PNG；
- 环境：1 个小尺寸 HDR；
- 模型：一个简化 glTF（含基础动画）；
- 按需压缩与体积控制，放置 `public/assets/*` 并在对应 Demo 中引用。

## 验证与导出
- 本地预览：Windows11 下在仓库根或演示目录运行 `pnpm dev`，打开 Slidev；检查每页内容与 Demo 显示。
- 导出：使用 `slidev:export` 或 `slidev:exportAllFormat` 生成 `png/pdf` 与 `with-clicks` 版本。
- 自测：交互拾取、GUI 变更、后期管线、动画混合与性能示例均可正常运行。

## 风险与假设
- 物理引擎页不新增重依赖；若确需 cannon-es/ammo.js，将评估体积与替代方案再行添加。
- glTF/HDR 资源需体积友好；如现有仓库已有通用资源，优先复用。

## 下一步
- 据此计划开始编写页面内容与实现/接入各 Demo 组件；在完成后进行本地验证与导出。