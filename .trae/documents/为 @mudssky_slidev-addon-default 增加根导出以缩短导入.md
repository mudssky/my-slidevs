## 目标
- 在包根新增入口 `index.ts` 导出 `composables`，并在 `package.json` 设置 `module` 指向该入口。
- 更新目标组件以使用根导入（其余文件保持不变）。

## 修改点
- 新增文件：`packages/slidev-addon-default/index.ts` 内容：`export * from './composables'`。
- 编辑：`packages/slidev-addon-default/package.json` 增加字段 `"module": "./index.ts"`（保持 `type: "module"` 现状）。
- 编辑：`projects/slidevs/learn-threejs/components/Demo004BufferGeometry4.vue` 的导入改为 `import { disposeThreeResources } from '@mudssky/slidev-addon-default'`。

## 验证
- 依赖为工作区链接，Vite 会将 `module` 指向的 TS 源作为源码处理；根导入应解析到 `composables/index.ts`。
- 保持现有深路径导入不受影响（未启用 `exports` 收窄）。

如确认，开始实施并逐项完成。