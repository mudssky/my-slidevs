import { computed, ref } from 'vue'

export function usePanZoom(options: {
  renderMode: 'svg' | 'transform'
  minZoom: number
  maxZoom: number
  initialZoom: number
  autoFit: boolean
  svgRef: { value: SVGSVGElement | null }
  vb: { value: { x: number; y: number; w: number; h: number } }
  vbOrig: { value: { x: number; y: number; w: number; h: number } }
  containerInlineRef: { value: HTMLElement | null }
  containerFullRef: { value: HTMLElement | null }
  isFullscreen: { value: boolean }
}) {
  const scale = ref(options.initialZoom)
  const tx = ref(0)
  const ty = ref(0)
  const dragging = ref(false)
  const lastX = ref(0)
  const lastY = ref(0)

  const contentStyle = computed(() => ({
    transform:
      options.renderMode === 'transform'
        ? `translate(${Math.round(tx.value)}px, ${Math.round(ty.value)}px) scale(${scale.value})`
        : 'none',
  }))

  function applyViewBox() {
    const s = options.svgRef.value
    if (!s) return
    const b = s.viewBox.baseVal
    b.x = Math.round(options.vb.value.x)
    b.y = Math.round(options.vb.value.y)
    b.width = Math.max(1, options.vb.value.w)
    b.height = Math.max(1, options.vb.value.h)
  }

  function fit() {
    const container = options.isFullscreen.value
      ? options.containerFullRef.value
      : options.containerInlineRef.value
    const svg =
      options.svgRef.value ??
      (container?.querySelector('svg') as SVGElement | null)
    if (!container || !svg) return
    if (options.renderMode === 'svg' && options.svgRef.value) {
      const b = options.vbOrig.value
      options.vb.value = { ...b }
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
    scale.value = Math.min(options.maxZoom, Math.max(options.minZoom, s))
    tx.value = Math.round((cb.width - w * scale.value) / 2)
    ty.value = Math.round((cb.height - h * scale.value) / 2)
  }

  function reset() {
    scale.value = options.initialZoom
    tx.value = 0
    ty.value = 0
    if (options.renderMode === 'svg') {
      const b = options.vbOrig.value
      options.vb.value = { ...b }
      applyViewBox()
    }
  }

  function zoomIn() {
    if (options.renderMode === 'svg') {
      const prev = scale.value
      const next = Math.min(
        options.maxZoom,
        Math.max(options.minZoom, prev * 1.2),
      )
      const factor = next / prev
      options.vb.value.w = options.vb.value.w / factor
      options.vb.value.h = options.vb.value.h / factor
      applyViewBox()
      scale.value = next
      return
    }
    scale.value = Math.min(options.maxZoom, scale.value * 1.2)
  }

  function zoomOut() {
    if (options.renderMode === 'svg') {
      const prev = scale.value
      const next = Math.min(
        options.maxZoom,
        Math.max(options.minZoom, prev / 1.2),
      )
      const factor = next / prev
      options.vb.value.w = options.vb.value.w / factor
      options.vb.value.h = options.vb.value.h / factor
      applyViewBox()
      scale.value = next
      return
    }
    scale.value = Math.max(options.minZoom, scale.value / 1.2)
  }

  function onWheel(e: WheelEvent) {
    if (options.renderMode === 'svg' && options.svgRef.value) {
      const prev = scale.value
      const next = Math.min(
        options.maxZoom,
        Math.max(options.minZoom, prev * (e.deltaY < 0 ? 1.1 : 0.9)),
      )
      const factor = next / prev
      const container = options.isFullscreen.value
        ? options.containerFullRef.value
        : options.containerInlineRef.value
      if (!container) return
      const rect = container.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const sx = options.vb.value.w / rect.width
      const sy = options.vb.value.h / rect.height
      const px = options.vb.value.x + mx * sx
      const py = options.vb.value.y + my * sy
      options.vb.value.w = options.vb.value.w / factor
      options.vb.value.h = options.vb.value.h / factor
      options.vb.value.x = px - (px - options.vb.value.x) / factor
      options.vb.value.y = py - (py - options.vb.value.y) / factor
      applyViewBox()
      scale.value = next
      return
    }
    const prev = scale.value
    const next = Math.min(
      options.maxZoom,
      Math.max(options.minZoom, prev * (e.deltaY < 0 ? 1.1 : 0.9)),
    )
    const container = options.isFullscreen.value
      ? options.containerFullRef.value
      : options.containerInlineRef.value
    if (!container) return
    const rect = container.getBoundingClientRect()
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
    if (options.renderMode === 'svg' && options.svgRef.value) {
      const container = options.isFullscreen.value
        ? options.containerFullRef.value
        : options.containerInlineRef.value
      if (!container) return
      const rect = container.getBoundingClientRect()
      const sx = options.vb.value.w / rect.width
      const sy = options.vb.value.h / rect.height
      options.vb.value.x -= dx * sx
      options.vb.value.y -= dy * sy
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

  return {
    scale,
    tx,
    ty,
    contentStyle,
    fit,
    reset,
    zoomIn,
    zoomOut,
    onWheel,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  }
}
