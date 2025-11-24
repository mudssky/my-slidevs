export function useDownloads(options: {
  containerInlineRef: { value: HTMLElement | null }
  containerFullRef: { value: HTMLElement | null }
  isFullscreen: { value: boolean }
  svgRef?: { value: SVGSVGElement | null }
  downloadName: string
  exportScale: number
}) {
  function downloadSVG() {
    const container = options.isFullscreen.value
      ? options.containerFullRef.value
      : options.containerInlineRef.value
    let svg = (options.svgRef?.value ?? null) as SVGSVGElement | null
    if (!svg) svg = container?.querySelector('svg') as SVGSVGElement | null
    if (!svg && container) {
      const dlg = container.closest('dialog')
      const found = (dlg ?? container).querySelector(
        'svg',
      ) as SVGSVGElement | null
      if (found) svg = found
    }
    if (!svg) return
    const serializer = new XMLSerializer()
    let source = serializer.serializeToString(svg)
    if (!/^<svg[^>]+xmlns=/.test(source)) {
      source = source.replace(
        /^<svg/,
        '<svg xmlns="http://www.w3.org/2000/svg"',
      )
    }
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${options.downloadName}.svg`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 100)
  }

  function downloadPNG() {
    const container = options.isFullscreen.value
      ? options.containerFullRef.value
      : options.containerInlineRef.value
    let svg = (options.svgRef?.value ?? null) as SVGSVGElement | null
    if (!svg) svg = container?.querySelector('svg') as SVGSVGElement | null
    if (!svg && container) {
      const dlg = container.closest('dialog')
      const found = (dlg ?? container).querySelector(
        'svg',
      ) as SVGSVGElement | null
      if (found) svg = found
    }
    if (!svg) return
    const serializer = new XMLSerializer()
    let source = serializer.serializeToString(svg)
    if (!/^<svg[^>]+xmlns=/.test(source)) {
      source = source.replace(
        /^<svg/,
        '<svg xmlns="http://www.w3.org/2000/svg"',
      )
    }
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const img = new Image()
    img.onload = () => {
      try {
        const vb = svg.viewBox.baseVal
        let w = vb && vb.width ? Math.ceil(vb.width) : Math.ceil(img.width)
        let h = vb && vb.height ? Math.ceil(vb.height) : Math.ceil(img.height)
        if ((!w || !h) && svg instanceof SVGSVGElement) {
          const bbox = svg.getBBox()
          w = Math.ceil(bbox.width)
          h = Math.ceil(bbox.height)
        }
        const canvas = document.createElement('canvas')
        canvas.width = Math.ceil(w * options.exportScale)
        canvas.height = Math.ceil(h * options.exportScale)
        const ctx = canvas.getContext('2d')!
        ctx.setTransform(options.exportScale, 0, 0, options.exportScale, 0, 0)
        ctx.drawImage(img, 0, 0, w, h)
        const pngUrl = canvas.toDataURL('image/png')
        const a = document.createElement('a')
        a.href = pngUrl
        a.download = `${options.downloadName}.png`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      } catch {
        const a = document.createElement('a')
        a.href = url
        a.download = `${options.downloadName}.svg`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      } finally {
        setTimeout(() => URL.revokeObjectURL(url), 100)
      }
    }
    img.src = url
  }

  return { downloadSVG, downloadPNG }
}
