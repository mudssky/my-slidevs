## 背景与现状
- 目录 `projects/slidevs/learn-threejs/components` 下几乎所有组件在 `onUnmounted` 中重复执行停止动画、释放控制器/渲染器/场景资源、移除 canvas 等步骤，代码冗长且易遗漏。
- 已存在局部封装：`disposeScene(scene)` 在 `Demo001start.vue:96`、`Demo002GUI.vue:133`、`Demo003PerspectiveCamera.vue:82`，但多数组件仍内联实现，如 `Demo004BufferGeometry.vue:109`（材质数组处理在 `Demo004BufferGeometry.vue:114`）。

## 目标
- 将卸载/清理逻辑抽象为可复用工具与组合式函数，缩短每个组件的 `onUnmounted`，提高一致性并降低遗漏风险（特别是纹理与后处理资源）。

## 技术方案
1. 在工作区公共包沉淀工具（遵循项目规则：跨演示通用能力放入 `packages`）。建议位置：`packages/slidev-addon-default/src/utils/threeCleanup.ts`。
2. 提供两个层级的 API：
   - 过程式工具函数：`disposeThreeResources({ renderer, scene, controls, composer, extra, events })`，一次性完成标准清理步骤。
   - 组合式封装：`useThreeCleanup()`，在组件内注册需要跟踪的资源，自动在 `onUnmounted` 执行清理。
3. 统一场景遍历释放策略：在 `disposeScene(scene, options)` 中覆盖常见纹理键并可扩展：`map/envMap/normalMap/roughnessMap/metalnessMap/aoMap/emissiveMap/displacementMap/bumpMap/lightMap/alphaMap`。
4. 后处理与特殊资源：
   - `EffectComposer`：释放 `renderTarget1/2`，并遍历 `passes`，若 `pass.dispose` 存在则调用。
   - 额外资源（如 `PMREMGenerator/CubeTexture/Texture/WebGLRenderTarget`）通过 `extra` 参数传入统一释放。
5. 渲染器与 DOM：`renderer.dispose()` → `renderer.forceContextLoss?.()` → 安全移除 `renderer.domElement`。
6. 事件清理：提供 `cleanupEventListeners(target, listeners)`；如 `RaycastSelect.vue:18-47` 的 `mousemove` 监听统一纳入。

## API 设计（草案）
- `disposeScene(scene: THREE.Scene, opts?: { textureKeys?: string[] }): void`
- `disposeComposer(composer: EffectComposer): void`
- `disposeRenderer(renderer: WebGLRenderer): void`
- `disposeThreeResources({ renderer?, scene?, controls?, composer?, extra?: Array<{ dispose: () => void }>, events?: Array<{ target: EventTarget, type: string, handler: EventListener }> }): void`
- `useThreeCleanup()` 返回：
  - `trackRenderer(renderer)` `trackScene(scene)` `trackControls(controls)` `trackComposer(composer)` `trackExtra(...disposables)` `trackEvents(...listeners)`
  - 自动在 `onUnmounted` 执行统一清理；也暴露 `disposeNow()` 以便在懒加载场景中手动触发（参考 `LazyThreeDemo.vue:68-79`）。

## 组件改造方式
- 以最小改动替换内联清理：
  - 将各组件 `onUnmounted` 中的清理替换为：
    ```ts
    const cleanup = useThreeCleanup()
    cleanup.trackRenderer(renderer)
    cleanup.trackScene(scene)
    cleanup.trackControls(controls)
    cleanup.trackComposer(composer)
    cleanup.trackExtra(pmrem, cubeTex, envMap /* 按需 */)
    cleanup.trackEvents({ target: canvas, type: 'mousemove', handler: onMove })
    // onUnmounted 时自动执行
    ```
  - 或过程式一次性调用：
    ```ts
    disposeThreeResources({ renderer, scene, controls, composer, extra: [pmrem, cubeTex, envMap], events: [{ target: canvas, type: 'mousemove', handler: onMove }] })
    ```
- 现有已封装的 `disposeScene`（如 `Demo001start.vue:96`、`Demo002GUI.vue:133`、`Demo003PerspectiveCamera.vue:82`）可迁移到公共工具并删除组件内重复定义。

## 风险与兼容
- 纹理键扩展需谨慎，默认覆盖常见键；组件若使用自定义材质字段可通过 `textureKeys` 扩展。
- `forceContextLoss` 在类型上非必选，工具内将做可选调用与容错。
- `EffectComposer` 的 `pass.dispose` 并非标准接口，工具会做存在性判断。
- 不引入新第三方库，严格复用现有依赖（Vue 3 + Three.js + 项目已有包）。

## 验证与收益
- 本地对各组件进行卸载-重载循环，观察内存与 WebGL 资源释放是否稳定（不启动新进程，遵循项目规则）。
- 对 `EnvMapReflectRefract.vue:31-66`、`RaycastSelect.vue:18-47` 等含特殊资源/事件的组件进行重点验证。
- 预期每个组件的卸载代码缩短为 5-10 行，逻辑统一，后续新增演示只需注册资源即可。

如确认方案，我将：
1) 在公共包新增 `threeCleanup.ts` 并实现上述 API；
2) 迁移 `disposeScene`；
3) 分批改造所有组件的 `onUnmounted`；
4) 进行逐组件验证并提交改动说明。