<template>
  <div class="mermaid-viewer">
    <!-- 普通视图容器 -->
    <div
      ref="containerInlineRef"
      class="viewport"
      @wheel.prevent="onWheel"
      @mousedown="onPointerDown"
      @mousemove="onPointerMove"
      @mouseup="onPointerUp"
      @mouseleave="onPointerUp"
      @dblclick="toggleFullscreen"
      @contextmenu.prevent
    >
      <div v-if="zoom" class="toolbar">
        <button @click="zoomOut" title="缩小">−</button>
        <button @click="zoomIn" title="放大">＋</button>
        <button @click="reset" title="重置">Reset</button>
        <button @click="fit" title="适配">Fit</button>
        <button @click="toggleFullscreen" title="全屏">⤢</button>
        <button @click="downloadSVG" title="下载SVG">SVG</button>
        <button @click="downloadPNG" title="下载PNG">PNG</button>
      </div>
    </div>

    <!-- 全屏对话框（原生 dialog） -->
    <dialog ref="dlgRef" class="mv-dialog" @close="onDialogClose">
      <div
        ref="containerFullRef"
        class="viewport fullscreen"
        @wheel.prevent="onWheel"
        @mousedown="onPointerDown"
        @mousemove="onPointerMove"
        @mouseup="onPointerUp"
        @mouseleave="onPointerUp"
        @dblclick="toggleFullscreen"
        @contextmenu.prevent
      >
        <button class="close-btn" @click="toggleFullscreen" title="关闭">
          ×
        </button>
        <div v-if="zoom" class="toolbar left">
          <button @click="zoomOut" title="缩小">−</button>
          <button @click="zoomIn" title="放大">＋</button>
          <button @click="reset" title="重置">Reset</button>
          <button @click="fit" title="适配">Fit</button>
          <button @click="toggleFullscreen" title="退出">⤡</button>
          <button @click="downloadSVG" title="下载SVG">SVG</button>
          <button @click="downloadPNG" title="下载PNG">PNG</button>
        </div>
      </div>
    </dialog>

    <!-- 内容通过 Teleport 进入当前激活容器 -->
    <Teleport v-if="teleportTarget" :to="teleportTarget">
      <div class="content" :style="contentStyle">
        <pre ref="elRef"><slot v-if="!content" /></pre>
      </div>
    </Teleport>

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
const containerInlineRef = ref<HTMLElement | null>(null)
const containerFullRef = ref<HTMLElement | null>(null)
const dlgRef = ref<HTMLDialogElement | null>(null)
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

const teleportTarget = computed<HTMLElement | null>(() =>
  isFullscreen.value ? containerFullRef.value : containerInlineRef.value,
)

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
  const container = isFullscreen.value
    ? containerFullRef.value
    : containerInlineRef.value
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
    const rect = (
      isFullscreen.value ? containerFullRef.value : containerInlineRef.value
    )!.getBoundingClientRect()
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
  const rect = (
    isFullscreen.value ? containerFullRef.value : containerInlineRef.value
  )!.getBoundingClientRect()
  const mx = e.clientX - rect.left
  const my = e.clientY - rect.top
  const factor = next / prev
  tx.value = mx - factor * (mx - tx.value)
  ty.value = my - factor * (my - ty.value)
  scale.value = next
}

function onPointerDown(e: MouseEvent) {
  if (e.button !== 0) return
  e.preventDefault()
  dragging.value = true
  lastX.value = e.clientX
  lastY.value = e.clientY
}

function onPointerMove(e: MouseEvent) {
  if (!dragging.value) return
  const dx = e.clientX - lastX.value
  const dy = e.clientY - lastY.value
  if (p.renderMode === 'svg' && svgRef.value) {
    const rect = (
      isFullscreen.value ? containerFullRef.value : containerInlineRef.value
    )!.getBoundingClientRect()
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
    dlgRef.value?.showModal()
    fit()
  } else {
    dlgRef.value?.close()
  }
}

function onDialogClose() {
  if (isFullscreen.value) isFullscreen.value = false
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

watch(teleportTarget, (t) => {
  if (!t) return
  if (renderTimer) window.clearTimeout(renderTimer)
  renderTimer = window.setTimeout(() => {
    nextTick().then(() => {
      renderMermaid().catch((e) => {
        err.value = String(e)
      })
      if (p.autoFit) fit()
    })
  }, 0)
})

onMounted(() => {
  renderMermaid().catch((e) => {
    err.value = String(e)
  })
  ro = new ResizeObserver(() => {
    if (p.autoFit) fit()
  })
  if (containerInlineRef.value) ro.observe(containerInlineRef.value)
  if (containerFullRef.value) ro.observe(containerFullRef.value)
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
      dlgRef.value?.close()
      isFullscreen.value = false
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
  width: 100vw;
  height: 100vh;
  background-color: white;
}
.content {
  transform-origin: 0 0;
  user-select: none;
}
.toolbar {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 6px;
  padding: 6px;
  border-radius: 8px;
  background: color-mix(
    in oklab,
    var(--slidev-slide-container-background, #1f2937) 80%,
    transparent
  );
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 1;
}
.viewport:hover .toolbar {
  opacity: 1;
  pointer-events: auto;
}
.toolbar.left {
  left: 8px;
  right: auto;
}
.toolbar button {
  min-width: auto;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  color: inherit;
}
.toolbar button:hover {
  background: rgba(255, 255, 255, 0.12);
}
.mv-dialog {
  border: none;
  padding: 0;
  width: auto;
  background: var(--slidev-slide-container-background, rgba(0, 0, 0, 0.85));
}
.mv-dialog::backdrop {
  background: color-mix(
    in oklab,
    var(--slidev-slide-container-background, rgba(0, 0, 0, 0.85)) 90%,
    #000 10%
  );
}
.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: inherit;
  z-index: 2;
}
.mermaid svg {
  shape-rendering: geometricPrecision;
  text-rendering: optimizeLegibility;
  user-select: none;
}
.error {
  color: #e11d48;
  font-size: 12px;
}
</style>
