## 问题分析
- markdownlint 仍在报告 `MD036`、`MD041`、`MD013`，而当前配置仅关闭了别名：
  - `no-emphasis-as-heading` 已设为 false（c:\home\Projects\frontend\my-slidevs\.markdownlint.cjs:37）
  - `first-line-heading` 已设为 false（c:\home\Projects\frontend\my-slidevs\.markdownlint.cjs:39）
  - `line-length` 已设为 false（c:\home\Projects\frontend\my-slidevs\.markdownlint.cjs:18）
- 典型成因：
  - 运行目录不在仓库根，未加载根 `.markdownlint.cjs`；`markdownlint` 默认只在当前目录查找配置。
  - 仅关闭了别名，部分运行器只识别 MD 代码名（如 `MD036` 等），导致规则未真正关闭。
  - 规划类文档（如 `.trae/documents/**`）不需要校验，未忽略导致噪声。

## 方案
- 在根配置中同时关闭“代码名”和“别名”：
  - 新增：`'MD036': false`、`'MD041': false`、`'MD013': false`，并保留现有别名键。
- 显式使用配置文件：
  - 将 `lint-staged` 的 md 任务改为：`markdownlint --fix -c .markdownlint.cjs`，确保任意工作目录都能加载到根配置。
- 可选：忽略规划文档目录：
  - 新增 `.markdownlintignore`，添加 `packages/slidev-style/.trae/documents/**`。

## 实施步骤
1) 更新 `c:\home\Projects\frontend\my-slidevs\.markdownlint.cjs`，加入 `'MD036': false`、`'MD041': false`、`'MD013': false`。
2) 如需降噪，新增 `c:\home\Projects\frontend\my-slidevs\.markdownlintignore`，写入：`packages/slidev-style/.trae/documents/**`。
3) 修改 `lint-staged` 配置，将 `**/*.md` 的任务改为 `markdownlint --fix -c .markdownlint.cjs`（若为 ESM 则使用 `export default`，或改名为 `lint-staged.config.cjs`）。
4) 验证：在仓库根执行 `npx markdownlint -c .markdownlint.cjs packages/slidev-style/.trae/documents/关闭冲突的\ MarkdownLint\ 规则.md` 与一次完整 pre-commit；预期上述误报消失，钩子通过。

## 预期结果
- `MD036/MD041/MD013` 在整个仓库范围内不再触发。
- 预提交钩子恢复为成功状态，`husky` 不再失败。