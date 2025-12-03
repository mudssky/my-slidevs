**目标**

* 关闭触发当前报错的规则（MD036、MD041、MD013），确保计划文档与 Slidev 示例不被误报。

**修改文件**

* `c:\home\Projects\frontend\my-slidevs\.markdownlint.cjs`

**具体调整**

* 显式关闭代码名与别名两者，以适配不同运行器：

  * `MD036/no-emphasis-as-heading` → 在配置中添加：`'MD036': false`（已有 `'no-emphasis-as-heading': false`，保留并新增代码名）

  * `MD041/first-line-heading` → 在配置中添加：`'MD041': false`（已有 `'first-line-heading': false`，保留并新增代码名）

  * `MD013/line-length` → 在配置中添加：`'MD013': false`（已有 `'line-length': false`，保留并新增代码名）

**可选加强（若仍有误报）**

* 新增 `.markdownlintignore` 忽略内部规划文档目录：

  * `packages/slidev-style/.trae/documents/**`

* 保持项目文档仍参与校验，仅屏蔽规划型文档。

**验证步骤**

* 更新配置后，对以下路径重新检查以确认报错消失：

  * `packages/slidev-style/.trae/documents/整合相机配置至 cameraOption.md`

  * `projects/slidevs/learn-threejs/docs/mesh-template.md`

**说明**

* 现有配置已关闭别名规则，但报错显示运行器可能只识别代码名；本次调整通过同时声明代码名与别名确保生效。

