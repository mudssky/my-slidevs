/* eslint-disable @typescript-eslint/no-explicit-any */
import { onUnmounted } from 'vue'
import type {
  Scene,
  Object3D,
  Mesh,
  Material,
  Texture,
  BufferGeometry,
  WebGLRenderer,
} from 'three'
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import type { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'

type Listener = {
  target: EventTarget
  type: string
  handler: EventListenerOrEventListenerObject
  options?: boolean | AddEventListenerOptions
}

const defaultTextureKeys = [
  'map',
  'envMap',
  'normalMap',
  'roughnessMap',
  'metalnessMap',
  'aoMap',
  'emissiveMap',
  'displacementMap',
  'bumpMap',
  'lightMap',
  'alphaMap',
]

function disposeMaterialTextures(m: Material, keys: string[]) {
  const anyMat = m as unknown as Record<string, unknown>
  for (const k of keys) {
    const t = anyMat[k] as Texture | undefined
    if (t && typeof t.dispose === 'function') t.dispose()
    if (k in anyMat) anyMat[k] = null
  }
}

export function disposeScene(scene: Scene, opts?: { textureKeys?: string[] }) {
  const keys = opts?.textureKeys ?? defaultTextureKeys
  scene.traverse((obj: Object3D) => {
    const mesh = obj as Mesh
    const g = mesh.geometry as BufferGeometry | undefined
    const m = mesh.material as Material | Material[] | undefined
    if (Array.isArray(m)) {
      for (const mm of m) {
        if (mm) {
          disposeMaterialTextures(mm, keys)
          mm.dispose()
        }
      }
    } else if (m) {
      disposeMaterialTextures(m, keys)
      m.dispose()
    }
    if (g) g.dispose()
  })
}

export function disposeComposer(composer: EffectComposer | null | undefined) {
  if (!composer) return
  const c: any = composer as any
  if (c.renderTarget1 && typeof c.renderTarget1.dispose === 'function')
    c.renderTarget1.dispose()
  if (c.renderTarget2 && typeof c.renderTarget2.dispose === 'function')
    c.renderTarget2.dispose()
  const passes: any[] = Array.isArray((composer as any).passes)
    ? (composer as any).passes
    : []
  for (const p of passes) {
    if (p && typeof p.dispose === 'function') p.dispose()
  }
}

export function disposeRenderer(renderer: WebGLRenderer | null | undefined) {
  if (!renderer) return
  renderer.dispose()
  const anyR = renderer as any
  if (typeof anyR.forceContextLoss === 'function') anyR.forceContextLoss()
  const el = renderer.domElement as HTMLElement | null
  if (el && el.parentNode) el.parentNode.removeChild(el)
}

export function cleanupEventListeners(listeners: Listener[]) {
  for (const l of listeners) {
    try {
      l.target.removeEventListener(
        l.type,
        l.handler as EventListener,
        l.options as any,
      )
    } catch {
      console.warn('removeEventListener failed', l)
    }
  }
}

export function disposeThreeResources(args: {
  renderer?: WebGLRenderer | null
  scene?: Scene | null
  controls?: OrbitControls | null
  composer?: EffectComposer | null
  extra?: Array<{ dispose: () => void } | null | undefined>
  events?: Listener[]
  rafs?: number[]
}) {
  if (args.rafs && args.rafs.length) {
    for (const id of args.rafs) {
      try {
        cancelAnimationFrame(id)
      } catch {
        console.warn('cancelAnimationFrame failed', id)
      }
    }
  }
  if (args.controls && typeof args.controls.dispose === 'function')
    args.controls.dispose()
  if (args.events && args.events.length) cleanupEventListeners(args.events)
  disposeComposer(args.composer)
  disposeRenderer(args.renderer)
  if (args.scene) disposeScene(args.scene)
  if (args.extra && args.extra.length) {
    for (const e of args.extra) {
      if (e && typeof e.dispose === 'function') e.dispose()
    }
  }
}

export function useThreeCleanup() {
  const state: {
    renderer: WebGLRenderer | null
    scene: Scene | null
    controls: OrbitControls | null
    composer: EffectComposer | null
    extra: Array<{ dispose: () => void }>
    events: Listener[]
    rafs: number[]
  } = {
    renderer: null,
    scene: null,
    controls: null,
    composer: null,
    extra: [],
    events: [],
    rafs: [],
  }
  const trackRenderer = (r: WebGLRenderer | null) => (state.renderer = r)
  const trackScene = (s: Scene | null) => (state.scene = s)
  const trackControls = (c: OrbitControls | null) => (state.controls = c)
  const trackComposer = (c: EffectComposer | null) => (state.composer = c)
  const trackExtra = (
    ...d: Array<{ dispose: () => void } | null | undefined>
  ) => {
    for (const x of d) if (x) state.extra.push(x)
  }
  const trackEvents = (...l: Listener[]) => state.events.push(...l)
  const trackRAF = (...ids: number[]) => state.rafs.push(...ids)
  const disposeNow = () => disposeThreeResources(state)
  onUnmounted(disposeNow)
  return {
    trackRenderer,
    trackScene,
    trackControls,
    trackComposer,
    trackExtra,
    trackEvents,
    trackRAF,
    disposeNow,
  }
}

export type { Listener }
