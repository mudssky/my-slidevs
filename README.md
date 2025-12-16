# my-slidevs
## 发版流程

本项目使用 [Changesets](https://github.com/changesets/changesets) 来管理版本发布和变更日志。

### 前置条件

- 确保你有发布包的权限
- 确保本地代码已同步到最新的 main 分支
- 确保所有测试通过

### 发版步骤

#### 1. 添加变更集 (Changeset)

当你完成一个功能或修复后，需要添加一个变更集来描述这次变更：

```bash
# 添加变更集
pnpm changeset

```

执行后会进入交互式界面：

- 选择哪些包需要发布
- 选择版本类型（major/minor/patch）
- 编写变更描述（这里我们可以在命令行添加总结）

如果需要详细的changelog，之后我们需要在 .changesets/ 目录下手动编辑对应的 changelog.md 文件。
多人协作时，每次变更，每个人我们都可以执行pnpm changeset创建一个changset,文件名是随机生成的。
后面version步骤时，我们一般是在main分支操作，所有changeset的分支合并到main分支，然后统一处理version的逻辑。

#### 2. 提交变更集

```bash
git add .
git commit -m "feat: add changeset for new feature"
git push
```

#### 3. 发布版本

提交变更集之后的流程可以走CI CD 执行

##### 方式一：完整发布流程（推荐）

```bash
# 执行完整的发布流程：检查代码 -> 更新版本 -> 发布
pnpm run publish-packages
```

##### 方式二：分步执行

```bash
# 1. 运行代码检查和测试
pnpm run lint
pnpm run test

# 2. 更新版本号和生成 CHANGELOG
pnpm changeset version

# 3. 发布到 npm
pnpm changeset publish
```

### 常用命令

```bash
# 查看当前变更集状态
pnpm changeset status

# 查看哪些包会被发布
pnpm changeset status --verbose

# 预览版本更新（不实际更新）
pnpm changeset version --dry-run
```

### 注意事项

1. **版本选择原则**：
   - `patch`: 修复 bug，向后兼容
   - `minor`: 新增功能，向后兼容
   - `major`: 破坏性变更，不向后兼容

2. **变更描述规范**：
   - 使用清晰、简洁的语言描述变更
   - 遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范
   - 包含足够的上下文信息

3. **发布前检查**：
   - 确保所有 CI 检查通过
   - 确保变更集描述准确
   - 确保版本号符合语义化版本规范

4. **回滚处理**：
   - 如果发布后发现问题，可以发布一个新的 patch 版本修复
   - 避免删除已发布的版本

### 工作流程图

```
开发功能 -> 添加 changeset -> 提交代码 -> 合并到 main -> 执行发布命令 -> 版本发布完成
    ↓           ↓              ↓           ↓              ↓              ↓
  编码实现   pnpm changeset   git commit   git merge    publish-packages  npm 包更新
```
