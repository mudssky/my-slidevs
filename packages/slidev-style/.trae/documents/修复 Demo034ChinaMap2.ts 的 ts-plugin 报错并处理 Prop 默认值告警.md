## 问题原因
- 报错来源：VS Code 的 Volar TypeScript 插件（TypeScript Vue Plugin，问题列表里显示“ts-plugin”）。它用 TS 对 .vue 的 `<script setup lang="ts">` 做类型检查。
- 具体触发点：`Demo034ChinaMap2.vue:24` 处 `import { creatMap } from './mesh/map/chinaMap2'`。被导入模块 `components/mesh/map/chinaMap2.ts` 内部包含静态资源与别名导入：
  - `pos.png`：`chinaMap2.ts:5` `import posImg from '@/assets/pos.png'`
  - `china-full.json`：`chinaMap2.ts:3` `import chinaGeojson from '@/assets/geojson/china-full.json'`
  - 别名 `@/*`：`learn-threejs/tsconfig.json` 已设置 `paths`，正常。
- 常见根因：
  1) 资源类型声明未被 TS 项目包含或未生效，导致该模块整体在 TS 视角下“不可解析”，进而在使用处报“找不到模块”。虽然项目已有 `env.d.ts`（`learn-threejs/env.d.ts` 已声明 `*.png` 等），但若未被 TS 项目收录，会让插件判定导入失败。
  2) 第三方库类型缺失也可能级联到导入失败（例如 `three-spritetext` 无类型），但当前诊断条目只指向 `chinaMap2`，更可能是资源模块声明包含问题。

## 验证现状
- `chinaMap2.ts` 文件存在且导出 `creatMap`，路径正确：`components/mesh/map/chinaMap2.ts`。
- 资源文件存在：`learn-threejs/assets/pos.png`、`learn-threejs/assets/geojson/china-full.json`。
- 别名已配置：`learn-threejs/tsconfig.json` 设置 `paths: { "@/*": ["./*"] }`，基础配置 `packages/tsconfig/base.json` 启用 `resolveJsonModule: true`。

## 解决方案
- 使资源类型声明对 TS 插件生效：
  - 在 `learn-threejs/tsconfig.json` 显式加入 `include`，确保收录 `env.d.ts` 与所有 .vue/.ts 文件：
    - `include: ["**/*.ts", "**/*.d.ts", "**/*.vue"]`
  - 或在 `compilerOptions.types` 增加 `vite/client`（若用 Vite），让常见静态资源类型自动生效。
- 如仍报错，补充第三方模块声明：在项目根添加 `shims.d.ts`（或复用 `env.d.ts`）写入：
  - `declare module 'three-spritetext'`（若该库缺少类型）。
- 可选改法：将图片导入改为 `new URL('@/assets/pos.png', import.meta.url).href` 并用 `TextureLoader.load(url)`；这在某些 TS 配置下更稳定（但现有 `env.d.ts` 正常情况下已足够）。

## Prop 默认值告警处理
- 诊断显示 `MeshTemplate.vue` 多个可选 Prop 触发 `vue/require-default-prop`：例如 `object3d`、`cameraOption`、`background`、`lights`、`title`、`onFrame`、`onMount`、`onUnmount`。
- 方案：
  - 使用 `withDefaults(defineProps<...>(), { ... })` 为这些可选项补默认值（如 `title: ''`、`background: undefined` 不满足规则时改为 `''`、`onFrame: () => {}` 等）。
  - 或在 ESLint 配置中下调/关闭 `vue/require-default-prop`（尤其针对 `<script setup>`），以免为纯可选回调强制设默认。

## 执行计划
1) 更新 `learn-threejs/tsconfig.json`：添加 `include`（或 `compilerOptions.types: ["vite/client"]`）。
2) 若依旧报错，补充 `declare module 'three-spritetext'`。
3) 视项目规范，给 `MeshTemplate.vue` 的可选 Props 补充合理默认值，或调整 ESLint 规则。
4) 运行类型检查与构建，验证 `Demo034ChinaMap2.vue` 与 `Demo033ChinaMap1.vue` 均无报错，并确认交互功能正常。