export function useDownloads(options: {
  hostRef: { value: HTMLElement | null }
  downloadName: string
  exportScale: number
}) {
  function downloadSVG() {
    const svg = options.hostRef.value?.querySelector('svg') as SVGSVGElement | null
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
    a.download = `${options.downloadName}.svg`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  function downloadPNG() {
    const svg = options.hostRef.value?.querySelector('svg') as SVGSVGElement | null
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
      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  return { downloadSVG, downloadPNG }
}

