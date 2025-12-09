## 结论与推荐

* 推荐在 `MeshTemplate.vue` 增加生命周期钩子型的回调 `onMount` 与 `onUnmount`，用于父组件绑定/解绑事件；并将当前的 `@frame` 使用改为正确的 `:on-frame`（或 `:onFrame`）传参。
* 在父组件 `Demo034ChinaMap2.vue` 中，使用 `onMount` 完成点击事件绑定与射线拾取，命中圆点后创建 `SpriteText` 并清理其他标签。

## MeshTemplate 需要的改动

* Props 增加：

```ts
onMount?: (ctx: {
  scene: THREE.Scene
  camera: THREE.Camera
  renderer: THREE.WebGLRenderer
  THREE: typeof THREE
  dom: HTMLCanvasElement
  size: { width: number; height: number }
  controls: OrbitControls | null
}) => void
onUnmount?: () => void
```

* 触发时机：
  - 在 `renderer` 初始化并 `appendChild(renderer.domElement)` 之后调用 `props.onMount?.(ctx)`。
  - 在组件卸载时调用 `props.onUnmount?.()`（紧跟资源释放）。

* 代码插入点（示意）：
  - `components/MeshTemplate.vue:285` 之后：

```ts
const size = renderer.getSize(new THREE.Vector2())
props.onMount?.({
  scene: scene!,
  camera,
  renderer: renderer!,
  THREE,
  dom: renderer!.domElement,
  size: { width: size.x, height: size.y },
  controls: orbitControls,
})
```

  - `components/MeshTemplate.vue:292-308` 卸载逻辑内：

```ts
try { props.onUnmount?.() } catch {}
```

## 父组件 Demo034ChinaMap2.vue 的使用

* 修正传参与新增挂载钩子：

```vue
<MeshTemplate
  :object3d="chinaMap"
  :controls="true"
  :lights="pointLight"
  :axes-helper="true"
  :on-frame="onFrame"
  :on-mount="onMount"
/>
```

* 事件绑定逻辑（示意）：

```ts
import SpriteText from 'three-spritetext'
let mounted = false
function onMount(ctx: { scene: THREE.Scene; camera: THREE.Camera; renderer: THREE.WebGLRenderer; THREE: typeof THREE; dom: HTMLCanvasElement; size: { width: number; height: number } }) {
  if (mounted) return
  mounted = true
  const { scene, camera, renderer, THREE: T, dom, size } = ctx
  const handleClick = (e: MouseEvent) => {
    const width = dom.clientWidth || size.width
    const height = dom.clientHeight || size.height
    const x = (e.offsetX / width) * 2 - 1
    const y = -((e.offsetY / height) * 2 - 1)
    const ray = new T.Raycaster()
    ray.setFromCamera(new T.Vector2(x, y), camera)
    const hits = ray.intersectObjects(scene.children, true)
    if (!hits.length) return
    const obj = hits[0].object as THREE.Object3D & { isSprite?: boolean; name?: string }
    if ((obj as any).isSprite && obj.name?.startsWith('annotation')) {
      scene.traverse((node) => {
        // @ts-expect-error three built-in flag
        if ((node as any).isSprite) node.children?.forEach((c) => c.name === 'posName' && node.remove(c))
      })
      const label = new SpriteText(obj.name.replace('annotation', ''), 1)
      label.name = 'posName'
      label.color = 'black'
      label.backgroundColor = 'white'
      label.padding = 1.5
      label.borderWidth = 0.2
      label.borderRadius = 1
      label.borderColor = 'orange'
      label.position.set(0, 3, 0)
      obj.add(label)
    }
  }
  dom.addEventListener('click', handleClick)
}
```

## 其他更优做法（可选增强）

* 事件透出：在 `MeshTemplate` 内部统一处理指针坐标与拾取，向父组件 `emit('sprite-click', { object, name })`，父组件仅关注业务逻辑，UI组件负责通用指针逻辑（需 `defineEmits(['sprite-click'])` 并在点击时触发）。

* 组件暴露上下文：通过 `defineExpose({ getCtx })` 暴露获取上下文的方法，父组件用 `ref` 拿到 `renderer/scene/camera` 后自由绑定事件，避免 props 里放函数式钩子。

* 可配置拾取：增加 `enablePointerRaycaster?: boolean` 与 `pointerFilter?: (o: THREE.Object3D) => boolean`，由 `MeshTemplate` 自动监听并只对满足过滤器的对象求交与 `emit`。

## 验证

* 点击任意省份圆点：当前圆点上方出现文字；再点其他圆点：旧文字移除，仅保留新文字。
* 非圆点区域点击：不显示文字。
* 组件卸载/切换页面：无重复绑定与内存泄漏。