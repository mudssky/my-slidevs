## 目标
- 所有演示页中的 Demo 组件统一使用 `LazyRender` 包裹，离开视口即卸载，避免显存与上下文占用。
- 在每个 Demo 组件内补充 `onUnmounted` 清理逻辑：停止动画、释放 `WebGLRenderer`/`Controls`/几何材质纹理/PMREM/事件等，避免 `THREE.WebGLRenderer: Context Lost`。

## 现状确认
- `LazyRender` 组件位置：`packages/slidev-addon-default/components/LazyRender.vue:1`
- 已包裹：`pages/02-basics.md:282-284` 使用 `<LazyRender> <Demo003PerspectiveCamera /> </LazyRender>`。
- 未包裹的 Demo 标签：
  - `pages/02-basics.md:124` `<Demo001start />`、`pages/02-basics.md:237` `<Demo002GUI />`
  - `pages/03-geometry-material.md:265` `<Demo004BufferGeometry/>`、`pages/03-geometry-material.md:285` `<GeometryShowcase />`
  - `pages/04-lights-shadows.md:21` `<LightsAndShadows />`
  - `pages/05-camera-controls.md:21` `<ControlsOrbitLimits />`
  - `pages/06-textures-envmap.md:21` `<EnvMapReflectRefract />`
  - `pages/07-loaders-gltf.md:21` `<GLTFLoadAndAnimate />`
  - `pages/08-animation.md:21` `<AnimationBlend />`
  - `pages/09-raycaster.md:21` `<RaycastSelect />`
  - `pages/10-postprocessing.md:21` `<ComposerPipeline />`
  - `pages/11-shader.md:21` `<ShaderMaterialIntro />`
  - `pages/12-advanced-performance.md:21` `<InstancedLOD />`
  - `pages/13-physics.md:21` `<PhysicsStepDemo />`

## 改动方案
### 1) Markdown 包裹
- 将以上所有 Demo 标签改为：
  - `<LazyRender><Demo001start /></LazyRender>` 等同样形式。
- 保留原有 `layout`/分隔结构不变，仅替换标签。

### 2) 组件卸载清理（所有 `components/*.vue` Demo）
在每个 Demo 组件中补充统一清理：
- 存储动画帧 id，`cancelAnimationFrame(rafId)` 并置停标志。
- `controls?.dispose()`、`renderer?.dispose()`、`renderer?.forceContextLoss()`，并移除 `renderer.domElement`。
- 遍历 `scene`：`geometry.dispose()`、`material.dispose()`、纹理 `texture.dispose()`。
- 环境/后处理：`pmrem?.dispose()`、`cubeTex?.dispose()`、`envMap?.dispose()`、`composer?.dispose?.()` 等按组件实际使用释放。
- GUI：使用 `useGuiAutoVisibility` 的组件其 GUI 在 `hooks/debug.ts:31-37` 已销毁，无需重复；其余若有 GUI，`gui?.destroy()`。
- 监听：移除 `window`/DOM 事件监听（若有）。
- 可选：`defineExpose({ dispose })` 暴露显式释放方法，便于与 `LazyThreeDemo.vue:42-79` 类懒加载组件联动（当前统一依赖 Vue 卸载即可）。

### 3) 参考实现（示例：在 `Demo003PerspectiveCamera.vue` 中加入清理）
```ts
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { useSlideContext } from '@slidev/client'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useGuiAutoVisibility } from '@/hooks'

const domRef = ref<HTMLElement | null>()
const slideContext = useSlideContext()
let raf = 0
let stop = false
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let scene: THREE.Scene | null = null

onMounted(() => {
  const w = slideContext.$slidev.configs.canvasWidth || window.innerWidth
  const h =
    slideContext.$slidev.configs.canvasWidth / slideContext.$slidev.configs.aspectRatio || window.innerHeight
  scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, w / h, 1, 1000)
  camera.position.set(200, 200, 200)
  const camera2 = new THREE.PerspectiveCamera(20, 16 / 9, 100, 300)
  const cameraHelper = new THREE.CameraHelper(camera2)
  scene.add(cameraHelper)
  const { createGui } = useGuiAutoVisibility(domRef)
  const gui = createGui()
  const onChange = () => {
    camera2.updateProjectionMatrix()
    cameraHelper.update()
  }
  gui.add(camera2, 'fov', [30, 60, 10]).onChange(onChange)
  gui.add(camera2, 'aspect', { '16/9': 16 / 9, '4/3': 4 / 3 }).onChange(onChange)
  gui.add(camera2, 'near', 0, 300).onChange(onChange)
  gui.add(camera2, 'far', 300, 800).onChange(onChange)
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(w, h)
  const render = () => {
    if (stop) return
    renderer!.render(scene!, camera)
    raf = requestAnimationFrame(render)
  }
  render()
  domRef.value!.appendChild(renderer!.domElement)
  controls = new OrbitControls(camera, renderer!.domElement)
})

const disposeScene = (s: THREE.Scene) => {
  s.traverse(obj => {
    const m = (obj as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined
    const g = (obj as THREE.Mesh).geometry as THREE.BufferGeometry | undefined
    if (Array.isArray(m)) m.forEach(mm => mm && mm.dispose())
    else if (m) m.dispose()
    if (g) g.dispose()
    // @ts-expect-error texture
    const t = (obj as any).material?.map as THREE.Texture | undefined
    t && t.dispose()
  })
}

onUnmounted(() => {
  stop = true
  raf && cancelAnimationFrame(raf)
  controls && controls.dispose()
  if (renderer) {
    renderer.dispose()
    // @ts-expect-error forceContextLoss
    renderer.forceContextLoss && renderer.forceContextLoss()
    const el = renderer.domElement
    el && el.parentNode && el.parentNode.removeChild(el)
  }
  scene && disposeScene(scene)
  renderer = null
  controls = null
  scene = null
})
</script>
```

### 4) 一致性与风格
- 保持 Composition API 与现有 TypeScript 使用；不改动演示行为，仅在卸载路径释放资源。
- 所有 Demo 统一持有 `raf`/`stop`/`renderer`/`controls`/`scene` 等引用，保证清理覆盖。

## 验证
- 在已运行的本地预览中切换各页与上下滚动，确认离开视口后不再渲染、返回时正常重建。
- 观察控制台不再出现 `THREE.WebGLRenderer: Context Lost`；查看 `renderer.info` 数量随卸载下降。
- 高频切换页面与滚动列表，不出现 GPU 内存持续增长。

## 提交范围与影响
- 修改：`pages/*` 中上述 Demo 标签；`components/*` 中所有 Demo 组件的 `onUnmounted` 清理逻辑。
- 不新增依赖、不改动公共包 API；遵循项目样式与 Lint 规则。