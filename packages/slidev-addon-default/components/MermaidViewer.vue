<template>
  <div class="mermaid-viewer">
    <div v-if="zoom" class="toolbar">
      <button @click="zoomOut">-</button>
      <button @click="zoomIn">+</button>
      <button @click="reset">Reset</button>
      <button @click="fit">Fit</button>
      <button @click="downloadSVG">SVG</button>
      <button @click="downloadPNG">PNG</button>
    </div>
    <div
      ref="containerRef"
      class="viewport"
      @wheel.prevent="onWheel"
      @mousedown="onPointerDown"
      @mousemove="onPointerMove"
      @mouseup="onPointerUp"
      @mouseleave="onPointerUp"
    >
      <div class="content" :style="contentStyle">
        <pre ref="elRef"><slot v-if="!content" /></pre>
      </div>
    </div>
    <div v-if="err" class="error">{{ err }}</div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'

interface Props {
  content: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: Record<string, any>
  theme?: string
  securityLevel?: 'sandbox' | 'strict' | 'loose' | 'antiscript'
  zoom?: boolean
  minZoom?: number
  maxZoom?: number
  initialZoom?: number
  autoFit?: boolean
  downloadName?: string
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
  downloadName: 'mermaid-graph',
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

const contentStyle = computed(() => ({
  transform: `translate(${tx.value}px, ${ty.value}px) scale(${scale.value})`,
}))

let ro: ResizeObserver | null = null

async function renderMermaid() {
  err.value = ''
  const host = elRef.value
  if (!host) return
  for (const child of Array.from(host.childNodes)) {
    if (child.nodeType === Node.COMMENT_NODE) host.removeChild(child)
  }
  let mermaidMod: unknown
  try {
    // @ts-expect-error 类型报错
    mermaidMod = await import('mermaid/dist/mermaid.esm.mjs')
  } catch {
    mermaidMod = await import('mermaid')
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mermaid = (mermaidMod as { default?: any }).default ?? mermaidMod
  mermaid.initialize({
    startOnLoad: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    theme: p.theme as any,
    securityLevel: p.securityLevel,
    ...p.config,
  })
  host.classList.add('mermaid')
  const text =
    p.content && p.content.length > 0
      ? p.content
      : (host.textContent ?? '').trim()
  if (!text) return
  host.textContent = text
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
  let w = svg.getBoundingClientRect().width
  let h = svg.getBoundingClientRect().height
  if (svg instanceof SVGSVGElement) {
    const vb = svg.viewBox.baseVal
    if (vb && vb.width && vb.height) {
      w = vb.width
      h = vb.height
    }
  }
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
  const prev = scale.value
  const next = Math.min(
    p.maxZoom,
    Math.max(p.minZoom, prev * (e.deltaY < 0 ? 1.1 : 0.9)),
  )
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

function onPointerUp() {
  dragging.value = false
}

watch(
  () => [p.content, p.theme, p.securityLevel],
  () => {
    renderMermaid().catch((e) => {
      err.value = String(e)
    })
  },
)

onMounted(() => {
  renderMermaid().catch((e) => {
    err.value = String(e)
  })
  ro = new ResizeObserver(() => {
    if (p.autoFit) fit()
  })
  if (containerRef.value) ro.observe(containerRef.value)
})

function downloadSVG() {
  const svg = elRef.value?.querySelector('svg') as SVGSVGElement | null
  if (!svg) return
  const serializer = new XMLSerializer()
  let source = serializer.serializeToString(svg)
  if (!/^<svg[^>]+xmlns=/.test(source)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')
  }
  const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${p.downloadName}.svg`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function downloadPNG() {
  const svg = elRef.value?.querySelector('svg') as SVGSVGElement | null
  if (!svg) return
  const serializer = new XMLSerializer()
  let source = serializer.serializeToString(svg)
  if (!/^<svg[^>]+xmlns=/.test(source)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')
  }
  const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const img = new Image()
  img.onload = () => {
    const vb = svg.viewBox.baseVal
    const w = vb && vb.width ? Math.ceil(vb.width) : Math.ceil(img.width)
    const h = vb && vb.height ? Math.ceil(vb.height) : Math.ceil(img.height)
    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(img, 0, 0, w, h)
    const pngUrl = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = pngUrl
    a.download = `${p.downloadName}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  img.src = url
}
</script>
<style scoped>
.mermaid-viewer {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.toolbar {
  display: flex;
  gap: 8px;
}
.viewport {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 240px;
  overflow: hidden;
  background: transparent;
}
.content {
  transform-origin: 0 0;
  will-change: transform;
}
.error {
  color: #e11d48;
  font-size: 12px;
}
</style>
