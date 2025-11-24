<template>
  <div class="mermaid-viewer">
    <div v-if="zoom" class="toolbar">
      <button @click="zoomOut">-</button>
      <button @click="zoomIn">+</button>
      <button @click="reset">Reset</button>
      <button @click="fit">Fit</button>
      <button @click="toggleFullscreen">Fullscreen</button>
      <button @click="downloadSVG">SVG</button>
      <button @click="downloadPNG">PNG</button>
    </div>
    <div
      ref="containerRef"
      :class="['viewport', { fullscreen: isFullscreen }]"
      @wheel.prevent="onWheel"
      @mousedown="onPointerDown"
      @mousemove="onPointerMove"
      @mouseup="onPointerUp"
      @mouseleave="onPointerUp"
      @dblclick="toggleFullscreen"
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
  content?: string
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
  renderMode?: 'svg' | 'transform'
  exportScale?: number
}

const p = withDefaults(defineProps<Props>(), {
  content: '',
  config: () => ({}),
  theme: 'default',
  securityLevel: 'strict',
  zoom: true,
  minZoom: 0.25,
  maxZoom: 4,
  initialZoom: 1,
  autoFit: true,
  downloadName: 'mermaid-graph',
  renderMode: 'svg',
  exportScale: 2,
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
const isFullscreen = ref(false)
const svgRef = ref<SVGSVGElement | null>(null)
const vb = ref<{ x: number; y: number; w: number; h: number }>({
  x: 0,
  y: 0,
  w: 0,
  h: 0,
})
const vbOrig = ref<{ x: number; y: number; w: number; h: number }>({
  x: 0,
  y: 0,
  w: 0,
  h: 0,
})

const contentStyle = computed(() => ({
  transform:
    p.renderMode === 'transform'
      ? `translate(${Math.round(tx.value)}px, ${Math.round(ty.value)}px) scale(${scale.value})`
      : 'none',
}))

let ro: ResizeObserver | null = null
let mo: MutationObserver | null = null
let renderTimer: number | null = null

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
  if (svg instanceof SVGSVGElement) {
    svgRef.value = svg
    const base = svg.viewBox.baseVal
    vb.value = { x: base.x, y: base.y, w: base.width, h: base.height }
    vbOrig.value = { ...vb.value }
    svg.style.width = '100%'
    svg.style.height = '100%'
  }
  if (p.autoFit) fit()
}

function fit() {
  const container = containerRef.value
  const svg = elRef.value?.querySelector('svg') as SVGElement | null
  if (!container || !svg) return
  if (p.renderMode === 'svg' && svgRef.value) {
    const b = vbOrig.value
    vb.value = { ...b }
    applyViewBox()
    scale.value = 1
    tx.value = 0
    ty.value = 0
    return
  }
  const cb = container.getBoundingClientRect()
  let w = svg.getBoundingClientRect().width
  let h = svg.getBoundingClientRect().height
  if (svg instanceof SVGSVGElement) {
    const base = svg.viewBox.baseVal
    if (base && base.width && base.height) {
      w = base.width
      h = base.height
    }
  }
  if (!w || !h) return
  const s = Math.min(cb.width / w, cb.height / h)
  scale.value = Math.min(p.maxZoom, Math.max(p.minZoom, s))
  tx.value = Math.round((cb.width - w * scale.value) / 2)
  ty.value = Math.round((cb.height - h * scale.value) / 2)
}

function reset() {
  scale.value = p.initialZoom
  tx.value = 0
  ty.value = 0
}

function zoomIn() {
  if (p.renderMode === 'svg') {
    const prev = scale.value
    const next = Math.min(p.maxZoom, Math.max(p.minZoom, prev * 1.2))
    const factor = next / prev
    vb.value.w = vb.value.w / factor
    vb.value.h = vb.value.h / factor
    applyViewBox()
    scale.value = next
    return
  }
  scale.value = Math.min(p.maxZoom, scale.value * 1.2)
}

function zoomOut() {
  if (p.renderMode === 'svg') {
    const prev = scale.value
    const next = Math.min(p.maxZoom, Math.max(p.minZoom, prev / 1.2))
    const factor = next / prev
    vb.value.w = vb.value.w / factor
    vb.value.h = vb.value.h / factor
    applyViewBox()
    scale.value = next
    return
  }
  scale.value = Math.max(p.minZoom, scale.value / 1.2)
}

function onWheel(e: WheelEvent) {
  if (p.renderMode === 'svg' && svgRef.value) {
    const prev = scale.value
    const next = Math.min(
      p.maxZoom,
      Math.max(p.minZoom, prev * (e.deltaY < 0 ? 1.1 : 0.9)),
    )
    const factor = next / prev
    const rect = containerRef.value!.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    const sx = vb.value.w / rect.width
    const sy = vb.value.h / rect.height
    const px = vb.value.x + mx * sx
    const py = vb.value.y + my * sy
    vb.value.w = vb.value.w / factor
    vb.value.h = vb.value.h / factor
    vb.value.x = px - (px - vb.value.x) / factor
    vb.value.y = py - (py - vb.value.y) / factor
    applyViewBox()
    scale.value = next
    return
  }
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
  if (p.renderMode === 'svg' && svgRef.value) {
    const rect = containerRef.value!.getBoundingClientRect()
    const sx = vb.value.w / rect.width
    const sy = vb.value.h / rect.height
    vb.value.x -= dx * sx
    vb.value.y -= dy * sy
    applyViewBox()
  } else {
    tx.value += dx
    ty.value += dy
  }
  lastX.value = e.clientX
  lastY.value = e.clientY
}

function onPointerUp() {
  dragging.value = false
}

function applyViewBox() {
  const s = svgRef.value
  if (!s) return
  const b = s.viewBox.baseVal
  b.x = Math.round(vb.value.x)
  b.y = Math.round(vb.value.y)
  b.width = Math.max(1, vb.value.w)
  b.height = Math.max(1, vb.value.h)
}

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
  if (isFullscreen.value) {
    fit()
  }
}

watch(
  () => [p.content, p.theme, p.securityLevel],
  () => {
    if (renderTimer) window.clearTimeout(renderTimer)
    renderTimer = window.setTimeout(() => {
      renderMermaid().catch((e) => {
        err.value = String(e)
      })
    }, 50)
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
  if (!p.content && elRef.value) {
    mo = new MutationObserver(() => {
      if (renderTimer) window.clearTimeout(renderTimer)
      renderTimer = window.setTimeout(() => {
        renderMermaid().catch((e) => {
          err.value = String(e)
        })
      }, 50)
    })
    mo.observe(elRef.value, {
      childList: true,
      characterData: true,
      subtree: true,
    })
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFullscreen.value) {
      toggleFullscreen()
    }
  })
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
    canvas.width = Math.ceil(w * p.exportScale)
    canvas.height = Math.ceil(h * p.exportScale)
    const ctx = canvas.getContext('2d')!
    ctx.setTransform(p.exportScale, 0, 0, p.exportScale, 0, 0)
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
.viewport.fullscreen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--slidev-slide-container-background, rgba(0, 0, 0, 0.85));
}
.content {
  transform-origin: 0 0;
}
.mermaid svg {
  shape-rendering: geometricPrecision;
  text-rendering: optimizeLegibility;
}
.error {
  color: #e11d48;
  font-size: 12px;
}
</style>
