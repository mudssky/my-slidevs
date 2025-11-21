## 目标与受众
- 面向前端/可视化开发者，系统掌握 Three.js 基础到进阶
- 以可运行 Demo 驱动教学，结合 Slidev 分页与代码片段展示

## 结构与命名
- 采用 pages/ 分页，文件名以两位序号前缀：`01install.md`、`02-basics.md`...
- 在 `slides.md` 通过 frontmatter 的 `src` 聚合章节，保证单页简洁
- 复用演示内 `components/` 与 `styles/index.ts`，示例组件以 `PascalCase` 命名

## 章节目录（建议 14–18 章，可按时长裁剪）
1. 安装与环境（已存在：`01install.md`）
   - Three.js 简介、生态、渲染管线概览
   - 安装方式（CDN/包管理器）、项目结构、坐标系与单位
   - Demo：渲染器+场景+相机最小闭环
2. 场景与渲染器（Scene & WebGLRenderer）
   - 场景树、背景、雾化；渲染器参数、像素比、清屏
   - Demo：窗口自适应与基础循环
3. 几何体与材质（Geometry & Material）
   - BufferGeometry 要点、常用几何体；MeshBasic/Phong/Standard 对比
   - Demo：材质切换、法线/高光效果
4. 光源与阴影（Lights & Shadows）
   - 常用光型（Ambient/Directional/Point/Spot）；阴影开启与优化
   - Demo：阴影参数调优、软阴影
5. 相机与控制（Camera & Controls）
   - 透视/正交相机；视锥与投影视图
   - Demo：OrbitControls 交互、相机飞行
6. 纹理与环境贴图（Textures & EnvMap）
   - 纹理类型与色空间；立方体贴图与反射/折射
   - Demo：PBR 反射环境
7. 加载器与模型（Loaders & GLTF）
   - `GLTFLoader`、`DRACOLoader`；资源路径与压缩
   - Demo：加载 glTF 模型、动画通道
8. 动画系统（Animation System）
   - `AnimationMixer`、`KeyframeTrack`、剪辑组合
   - Demo：时间轴控制、跨剪辑混合
9. 交互与射线（Raycaster）
   - 指针拾取、对象高亮、事件处理
   - Demo：选择/拖拽/信息面板
10. 后期处理（Postprocessing）
   - `EffectComposer`、通道链路、抗锯齿与景深
   - Demo：多效果组合与性能取舍
11. Shader 入门（RawShader/ShaderMaterial）
   - GLSL 基础、顶点/片元、`uniform` 与 `varying`
   - Demo：自定义着色器、渐变/噪声
12. 高级渲染与性能（Instancing/LOD）
   - `InstancedMesh`、批处理、LOD、裁剪；性能监测
   - Demo：万级实例渲染与优化对比
13. 物理与生态（可选）
   - `cannon-es`/`ammo.js` 集成思路与约束
   - Demo：简易刚体与碰撞
14. 调试与最佳实践
   - GUI 面板、辅助线与坐标；代码/资源组织与常见坑
   - Demo：参数面板驱动演示
15. 案例串讲（综合小项目）
   - 以一页多段落串联：加载→材质→光影→交互→后期→性能
   - Demo：完整微场景与讲解脚本
16. 参考资料与拓展（附录）
   - 官方文档与示例、社区资源、常用工具链

## Demo 组件映射（现有与计划）
- 已有：`Demo001start.vue`（最小闭环）、`Demo002GUI.vue`（参数面板）、`Demo003PerspectiveCamera.vue`（透视相机）
- 计划：每章 1–2 个组件，命名如 `Demo1xTopic.vue`，通过 `pages/*.md` 引用

## 讲解节奏（每章结构）
- 概念要点 → 动图/图示 → Live Demo → 参数实验 → 注意事项/坑位
- 页内提供代码片段和关键 API 摘要，链接到扩展阅读

## 资源与样式
- 统一从演示 `public/` 组织图片/模型；相对路径引用
- 复用工作区主题包与样式入口 `styles/index.ts`

## 验证与发布
- 本地预览：在 Windows 环境运行工作区脚本预览 Slidev（不在此阶段执行）
- 章节完成后统一在 `slides.md` 的 frontmatter 汇总并检查分页导航

## 后续扩展专题（按需增加）
- 地理可视化/地图叠加、GPU 计算、WebXR、节点材质（NodeMaterial）、多视图/多渲染目标

## 交付物
- `pages/` 多文件章节结构 + 对应 `components/` Demo
- `slides.md` 聚合展示，每章可独立演示与组合