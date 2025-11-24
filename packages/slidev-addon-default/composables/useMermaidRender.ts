/* eslint-disable @typescript-eslint/no-explicit-any */
import { nextTick, ref } from 'vue'

export function useMermaidRender(options: {
  hostRef: { value: HTMLElement | null }
  theme: string
  securityLevel: 'sandbox' | 'strict' | 'loose' | 'antiscript'
  config: Record<string, any>
  getText: () => string
  autoFit: boolean
}) {
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
  const err = ref('')

  async function renderMermaid() {
    err.value = ''
    const host = options.hostRef.value
    if (!host) return
    for (const child of Array.from(host.childNodes)) {
      if (child.nodeType === Node.COMMENT_NODE) host.removeChild(child)
    }
    let mermaidMod: unknown
    try {
      // @ts-expect-error lint error
      mermaidMod = await import('mermaid/dist/mermaid.esm.mjs')
    } catch {
      mermaidMod = await import('mermaid')
    }
    const mermaid = (mermaidMod as { default?: any }).default ?? mermaidMod
    mermaid.initialize({
      startOnLoad: false,
      theme: options.theme as any,
      securityLevel: options.securityLevel,
      ...options.config,
    })
    host.classList.add('mermaid')
    const text = options.getText()
    if (!text) return
    host.textContent = text
    await nextTick()
    await mermaid.run({ nodes: [host] })
    const svg = host.querySelector('svg') as SVGElement | null
    if (!svg) return
    if (svg instanceof SVGSVGElement) {
      svgRef.value = svg
      const base = svg.viewBox.baseVal
      let vx = base.x
      let vy = base.y
      let vw = base.width
      let vh = base.height
      if (!vw || !vh) {
        const bbox = svg.getBBox()
        vx = 0
        vy = 0
        vw = Math.max(1, Math.ceil(bbox.width))
        vh = Math.max(1, Math.ceil(bbox.height))
        svg.setAttribute('viewBox', `${vx} ${vy} ${vw} ${vh}`)
      }
      vb.value = { x: vx, y: vy, w: vw, h: vh }
      vbOrig.value = { ...vb.value }
      svg.style.width = '100%'
      svg.style.height = '100%'
    }
  }

  return { svgRef, vb, vbOrig, err, renderMermaid }
}
