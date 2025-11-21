# 项目规则（my-slidevs）

本规则用于规范 AI 在本项目中的协作与输出，使 Slidev 演示的开发与维护保持一致性、可复用性与高质量。

## 项目简介
- 项目类型：多 Slidev 演示集合（`projects/slidevs/*`）
- 站点：VitePress 文档站（`site`）
- 工作区包：`packages/slidev-theme-default`、`packages/slidev-addon-default`、`packages/slidev-style`

## 技术与框架
- 首选技术：`Vue 3 + Slidev`，增量脚本与组件推荐使用 `TypeScript`。
- 主题与样式：统一使用工作区包 `@mudssky/slidev-style`、`@mudssky/slidev-theme-default`，布局通过 `@mudssky/slidev-addon-default`。
- 依赖引入：优先复用已有工作区包与已配置插件（如 AutoImport/Components），避免在单个演示内引入重量级框架。

## 代码风格
- 缩进与格式：遵循根目录 `eslint.config.js` 与 `.prettierrc.cjs` 的现有规则。
- 命名约定：
  - 变量/函数使用 `camelCase`
  - Vue 组件使用 `PascalCase`
  - 文件名以语义为先，Markdown 页面名与演示主题一致
- 组件规范：使用 Composition API，尽量保持无副作用与纯展示；跨演示通用组件请沉淀到 `packages`。

## 目录与命名
- 每个演示目录应包含：
  - `slides.md`（主入口）
  - `components/`（演示内使用的组件）
  - `pages/`（拆分的 Markdown 子页面）
  - `public/`（静态资源，如 `assets/`、`images/`）
  - `styles/index.ts`（样式/主题入口，引入共享样式）
- 资源路径：Markdown 中引用的图片与资源以当前演示 `public/` 为根进行相对路径组织。

## Markdown/Frontmatter 约定
- 常用字段：`layout`、`title`、`level`、`image` 等。
- 多页拆分：在 `slides.md` 中通过 frontmatter 的 `src` 引入 `pages/*.md`，避免超长单文件。
- 代码高亮与主题：沿用工作区的 Shiki/主题设置，避免自定义与公共设置冲突。

## Lint 与格式化
- 统一在工作区根执行 Lint/格式化脚本；当演示子项目需要额外规则时，优先以局部 `tsconfig.json` 或 ESLint 配置扩展，不覆盖根规则。
- 与 Prettier 的冲突由 `eslint-config-prettier` 管理，禁止自定义与根规则相冲突的格式化设置。

## 依赖与版本管理
- 引入新依赖前优先检查工作区包是否已提供同类能力；如需修改公共包 API，遵循兼容优先与版本化发布。
- 资源体积控制：图片与媒体资源应进行压缩与按需引入，避免演示打包体积异常膨胀。

## AI 协作规范（含 Context7）
- 文档检索：统一使用 Context7 获取第三方库的权威文档，先解析库 ID，再拉取对应主题文档。
- 代码引用：解释或定位代码时，使用 `file_path:line_number` 格式标注，便于快速跳转。
- 修改策略：严格遵循现有架构与依赖，不引入未验证库；优先复用 `packages/` 与站点/演示中已有模式与工具。
- Windows 环境：涉及路径、命令与预览说明时默认以 Windows 11 环境为参考。

## 禁用与限制
- 禁止在仓库提交任何密钥或私有令牌。
- 演示内不编写服务端逻辑或长驻进程；所有示例以前端静态演示为主。
- 不破坏公共包的对外 API；涉及重大更改需评审并版本化。

## 提交与验证
- 变更以演示为单位组织；提交通常包含：页面/组件改动、资源更新与样式入口维护。
- 验证方式：本地预览、必要的单元/端到端测试、或在站点中联动验证（如组件在 VitePress 中的使用）。

## 生效范围与维护
- 本规则仅在当前项目中生效，位于 `/.trae/rules/project_rules.md`。
- 规则更新：直接编辑本文件；如规则与现有工具/包冲突，以工作区公共配置为准并同步修订。