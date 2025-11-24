## 目标
- 在 `packages/slidev-addon-default/components` 增加 `MermaidViewer.vue` 组件，接收字符串内容并用 Mermaid 渲染。
- 支持传入 Mermaid 配置与主题、安全级别等参数。
- 提供平移与缩放能力，便于查看大型图；包含工具栏与鼠标滚轮缩放、拖拽平移。

## 现状确认
- 工作区未检索到现有 `components` 目录与 Mermaid 使用痕迹，计划在 `slidev-addon-default` 包内新增组件文件并导出使用。
- 遵循项目规则使用 Vue 3 Composition API 与 TypeScript，避免引入额外重量级依赖。

## 技术方案
- 依赖：在 `@mudssky/slidev-addon-default` 包中引入 `mermaid`（按工作区依赖管理）。
- 渲染：使用 `import('mermaid')` 动态加载，`mermaid.initialize({ startOnLoad:false, ... })` 与 `await mermaid.run({ nodes:[el] })`。
- 安全：默认 `securityLevel:'strict'`，可通过 props 覆盖；支持 `theme`。
- 缩放/平移：无需第三方库，使用 CSS `transform: translate/scale` 与指针事件实现；提供工具栏按钮与滚轮缩放，支持自动适配容器尺寸。
- 自适应：`ResizeObserver` 监听容器尺寸变化，启用 `autoFit` 时重新计算缩放。

## 组件 API（建议）
- `content: string` Mermaid 文本内容（必填）
- `config?: object` Mermaid 初始化配置（可选）
- `theme?: string` Mermaid 主题（如 `default|dark|neutral|forest`）
- `securityLevel?: 'sandbox'|'strict'|'loose'|'antiscript'` 默认 `strict`
- `zoom?: boolean` 是否启用缩放工具，默认 `true`
- `minZoom?: number` 默认 `0.25`
- `maxZoom?: number` 默认 `4`
- `initialZoom?: number` 默认 `1`
- `autoFit?: boolean` 载入后按容器适配，默认 `true`
- 事件：`rendered(svg:SVGElement)`、`error(err:Error)`

## 组件实现（示例草案，无注释）
```vue
<template>
  <div class="mermaid-viewer">
    <div v-if="zoom" class="toolbar">
      <button @click="zoomOut">-</button>
      <button @click="zoomIn">+</button>
      <button @click="reset">Reset</button>
      <button @click="fit">Fit</button>
    </div>
    <div ref="containerRef" class="viewport" @wheel.prevent="onWheel" @mousedown="onPointerDown" @mousemove="onPointerMove" @mouseup="onPointerUp" @mouseleave="onPointerUp">
      <div class="content" :style="contentStyle">
        <pre ref="elRef"></pre>
      </div>
    </div>
    <div v-if="err" class="error">{{ err }}</div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
interface Props {
  content: string
  config?: Record<string, any>
  theme?: string
  securityLevel?: 'sandbox'|'strict'|'loose'|'antiscript'
  zoom?: boolean
  minZoom?: number
  maxZoom?: number
  initialZoom?: number
  autoFit?: boolean
}
const p = withDefaults(defineProps<Props>(), {
  config: () => ({}),
  theme: 'default',
  securityLevel: 'strict',
  zoom: true,
  minZoom: 0.25,
  maxZoom: 4,
  initialZoom: 1,
  autoFit: true,
})
const elRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const scale = ref(p.initialZoom)
const tx = ref(0)
const ty = ref(0)
const dragging = ref(false)
const lastX = ref(0)
const lastY = ref(0)
const err = ref('')
const contentStyle = computed(() => ({ transform: `translate(${tx.value}px, ${ty.value}px) scale(${scale.value})` }))
let ro: ResizeObserver | null = null
async function renderMermaid() {
  err.value = ''
  const host = elRef.value
  if (!host) return
  const { default: mermaid } = await import('mermaid')
  mermaid.initialize({ startOnLoad: false, theme: p.theme, securityLevel: p.securityLevel, ...p.config })
  host.classList.add('mermaid')
  host.textContent = p.content
  await nextTick()
  await mermaid.run({ nodes: [host] })
  const svg = host.querySelector('svg') as SVGElement | null
  if (!svg) return
  if (p.autoFit) fit()
}
function fit() {
  const container = containerRef.value
  const svg = elRef.value?.querySelector('svg') as SVGElement | null
  if (!container || !svg) return
  const cb = container.getBoundingClientRect()
  const vb = svg.viewBox?.baseVal
  const w = vb ? vb.width : svg.getBoundingClientRect().width
  const h = vb ? vb.height : svg.getBoundingClientRect().height
  if (!w || !h) return
  const s = Math.min(cb.width / w, cb.height / h)
  scale.value = Math.min(p.maxZoom, Math.max(p.minZoom, s))
  tx.value = (cb.width - w * scale.value) / 2
  ty.value = (cb.height - h * scale.value) / 2
}
function reset() {
  scale.value = p.initialZoom
  tx.value = 0
  ty.value = 0
}
function zoomIn() {
  scale.value = Math.min(p.maxZoom, scale.value * 1.2)
}
function zoomOut() {
  scale.value = Math.max(p.minZoom, scale.value / 1.2)
}
function onWheel(e: WheelEvent) {
  const delta = e.deltaY > 0 ? -1 : 1
  const prev = scale.value
  const next = Math.min(p.maxZoom, Math.max(p.minZoom, prev * (delta > 0 ? 1.1 : 0.9)))
  const rect = containerRef.value!.getBoundingClientRect()
  const mx = e.clientX - rect.left
  const my = e.clientY - rect.top
  const factor = next / prev
  tx.value = mx - factor * (mx - tx.value)
  ty.value = my - factor * (my - ty.value)
  scale.value = next
}
function onPointerDown(e: MouseEvent) {
  dragging.value = true
  lastX.value = e.clientX
  lastY.value = e.clientY
}
function onPointerMove(e: MouseEvent) {
  if (!dragging.value) return
  const dx = e.clientX - lastX.value
  const dy = e.clientY - lastY.value
  tx.value += dx
  ty.value += dy
  lastX.value = e.clientX
  lastY.value = e.clientY
}
function onPointerUp() { dragging.value = false }
watch(() => [p.content, p.theme, p.securityLevel], () => { renderMermaid().catch(e => { err.value = String(e) }) })
onMounted(() => {
  renderMermaid().catch(e => { err.value = String(e) })
  ro = new ResizeObserver(() => { if (p.autoFit) fit() })
  if (containerRef.value) ro.observe(containerRef.value)
})
</script>
<style scoped>
.mermaid-viewer { display: flex; flex-direction: column; gap: 8px; }
.toolbar { display: flex; gap: 8px; }
.viewport { position: relative; width: 100%; height: 100%; min-height: 240px; overflow: hidden; background: transparent; }
.content { transform-origin: 0 0; will-change: transform; }
.error { color: #e11d48; font-size: 12px; }
</style>
```

## 文件改动
- 在 `packages/slidev-addon-default/components` 新增 `MermaidViewer.vue`。
- 若包内有出口文件（如 `index.ts`），增加导出：`export { default as MermaidViewer } from './components/MermaidViewer.vue'`。
- 在包的 `package.json` 依赖中引入 `mermaid`。

## 使用示例
```md
<MermaidViewer
  :content="`graph TD; A-->B; A-->C; B-->D; C-->D;`"
  :config="{ fontFamily: 'trebuchet ms' }"
  theme="default"
  :autoFit="true"
  :zoom="true"
/>
```

## 验证方案
- 在任一演示 `slides.md` 中插入上述示例，预览确认渲染正常。
- 测试缩放与平移：工具栏按钮、滚轮缩放、拖拽平移；测试 `autoFit` 与容器尺寸变化。
- 切换 `theme` 与 `securityLevel` 验证安全策略与样式效果。

## 兼容与性能
- 动态导入 Mermaid，只有使用组件时加载，避免首屏体积增大。
- 默认严格安全级别，减少潜在 XSS 风险。
- 大图渲染时仅更新 `transform`，尽量减少重排与重绘。

## 后续可选增强
- 导出为 PNG/SVG。
- 支持代码高亮与错误定位输出。
- 支持外部控制方法（例如 `fitToWidth()`、`center()`）。

请确认以上方案与 API，确认后我将按计划在包内新增组件文件并完成导出与验证。