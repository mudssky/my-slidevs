## 目标
- 保留 `texture.ts` 中的图片以模块方式导入，解决 TypeScript 对 `*.jpg` 资源类型缺失导致的错误。

## 变更文件
- 新增：`projects/slidevs/learn-threejs/env.d.ts`

## 具体内容
```
/// <reference types="vite/client" />

declare module '*.jpg' { const src: string; export default src }
declare module '*.jpeg' { const src: string; export default src }
declare module '*.png' { const src: string; export default src }
declare module '*.gif' { const src: string; export default src }
declare module '*.webp' { const src: string; export default src }
declare module '*.avif' { const src: string; export default src }
```
- 说明：
  - `vite/client` 参考类型补齐常用环境声明。
  - 为常见图片后缀声明模块，导入值为 `string`，与 Vite 资产处理一致。

## 保留现有代码
- 目标文件：`projects/slidevs/learn-threejs/components/mesh/texture.ts:2`
```
import diqiu from '@/public/assets/world.topo.bathy.200401.jpg'
const loader = new THREE.TextureLoader()
const texture = loader.load(diqiu)
```

## 验证步骤
- Lint/类型检查：错误「找不到模块或类型声明」在 `texture.ts:2` 处消失。
- 运行态：纹理正常加载，球体材质贴图显示正常。
- 交叉验证：其他演示使用图片导入仍保持一致性，无新增告警。