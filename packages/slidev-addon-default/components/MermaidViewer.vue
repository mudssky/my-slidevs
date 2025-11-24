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
      <MermaidViewerToolbar
        v-if="zoom"
        :zoom="zoom"
        :fullscreen="isFullscreen"
        @zoom-out="zoomOut"
        @zoom-in="zoomIn"
        @reset="reset"
        @fit="fit"
        @toggle-fullscreen="toggleFullscreen"
        @download-svg="downloadSVG"
        @download-png="downloadPNG"
      />
    </div>

    <!-- 全屏对话框 -->
    <MermaidViewerDialog
      ref="dialogCompRef"
      :zoom="zoom"
      :open="isFullscreen"
      :on-wheel="onWheel"
      :on-pointer-down="onPointerDown"
      :on-pointer-move="onPointerMove"
      :on-pointer-up="onPointerUp"
      @ready="onDialogReady"
      @close="onDialogClose"
      @zoom-out="zoomOut"
      @zoom-in="zoomIn"
      @reset="reset"
      @fit="fit"
      @toggle-fullscreen="toggleFullscreen"
      @download-svg="downloadSVG"
      @download-png="downloadPNG"
    />

    <!-- 内容通过 Teleport 进入当前激活容器 -->
    <Teleport v-if="teleportTarget" :to="teleportTarget">
      <div
        class="content"
        :style="contentStyle"
        :key="isFullscreen ? 'full' : 'inline'"
      >
        <pre ref="elRef"><slot v-if="!content" /></pre>
      </div>
    </Teleport>

    <div v-if="err" class="error">{{ err }}</div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted, nextTick, onUnmounted } from 'vue'
import MermaidViewerToolbar from './MermaidViewer/MermaidViewerToolbar.vue'
import MermaidViewerDialog from './MermaidViewer/MermaidViewerDialog.vue'
import { useMermaidRender } from '../composables/useMermaidRender'
import { usePanZoom } from '../composables/usePanZoom'
import { useFullscreen } from '../composables/useFullscreen'
import { useDownloads } from '../composables/useDownloads'

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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dialogCompRef = ref<any>(null)

const { svgRef, vb, vbOrig, err, renderMermaid } = useMermaidRender({
  hostRef: elRef,
  theme: p.theme,
  securityLevel: p.securityLevel,
  config: p.config ?? {},
  getText: () =>
    p.content && p.content.length > 0
      ? p.content
      : (elRef.value?.textContent ?? '').trim(),
  autoFit: p.autoFit,
})

const {
  isFullscreen,
  dlgRef,
  teleportTarget,
  toggleFullscreen,
  onDialogClose,
} = useFullscreen({
  containerInlineRef,
  containerFullRef,
})

const {
  contentStyle,
  fit,
  reset,
  zoomIn,
  zoomOut,
  onWheel,
  onPointerDown,
  onPointerMove,
  onPointerUp,
} = usePanZoom({
  renderMode: p.renderMode,
  minZoom: p.minZoom,
  maxZoom: p.maxZoom,
  initialZoom: p.initialZoom,
  autoFit: p.autoFit,
  svgRef,
  vb,
  vbOrig,
  containerInlineRef,
  containerFullRef,
  isFullscreen,
})

const { downloadSVG, downloadPNG } = useDownloads({
  hostRef: elRef,
  downloadName: p.downloadName,
  exportScale: p.exportScale,
})

function onDialogReady(payload: {
  dlgRef: { value: HTMLDialogElement | null }
  containerRef: { value: HTMLElement | null }
}) {
  dlgRef.value = payload.dlgRef.value
  containerFullRef.value = payload.containerRef.value
}

watch(
  dialogCompRef,
  () => {
    const comp = dialogCompRef.value
    if (comp && comp.containerRef) {
      containerFullRef.value = comp.containerRef?.value ?? null
    }
    if (comp && comp.dlgRef) {
      dlgRef.value = comp.dlgRef?.value ?? null
    }
  },
  { immediate: true },
)

let ro: ResizeObserver | null = null
let mo: MutationObserver | null = null
let renderTimer: number | null = null

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

watch(containerFullRef, (el) => {
  if (ro && el) ro.observe(el)
})

watch(isFullscreen, async (v) => {
  if (v) {
    await nextTick()
    // ensure fullscreen container is ready for Teleport
    const comp = dialogCompRef.value
    if (comp && comp.containerRef) {
      containerFullRef.value =
        comp.containerRef?.value ?? containerFullRef.value
    }
    if (!containerFullRef.value && comp && comp.containerRef) {
      window.setTimeout(() => {
        containerFullRef.value =
          comp.containerRef?.value ?? containerFullRef.value
        if (p.autoFit) fit()
      }, 16)
    }
    if (p.autoFit) fit()
  }
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
})

onUnmounted(() => {
  if (ro && containerInlineRef.value) ro.unobserve(containerInlineRef.value)
  if (ro && containerFullRef.value) ro.unobserve(containerFullRef.value)
  if (mo) mo.disconnect()
})
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
  width: 100%;
  height: 100%;
}
.content > pre {
  width: 100%;
  height: 100%;
}
.toolbar {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 6px;
  padding: 6px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.72);
  color: #fff;
  backdrop-filter: saturate(120%) blur(6px);
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
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
}
.toolbar button:hover {
  background: rgba(255, 255, 255, 0.26);
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
