/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three'
import { onUnmounted } from 'vue'

type Disposable = { dispose: () => void } | null | undefined

export function useThreeDemoLifecycle() {
  let rafId: number | null = null
  let stopFlag = false

  const geometries = new Set<THREE.BufferGeometry>()
  const materials = new Set<THREE.Material>()
  const textures = new Set<THREE.Texture>()
  const passes = new Set<Disposable>()
  const mixers = new Set<THREE.AnimationMixer>()

  let renderer: THREE.WebGLRenderer | null = null
  let scene: THREE.Scene | null = null
  let controls: { dispose: () => void } | null = null
  let pmrem: { dispose: () => void } | null = null
  let composer: ({ reset?: () => void; passes?: any[] } & Disposable) | null =
    null

  const setRenderer = (r: THREE.WebGLRenderer) => (renderer = r)
  const setScene = (s: THREE.Scene) => (scene = s)
  const setControls = (c: { dispose: () => void }) => (controls = c)
  const setPMREM = (p: { dispose: () => void }) => (pmrem = p)
  const setComposer = (
    c: { reset?: () => void; passes?: any[] } & Disposable,
  ) => (composer = c)
  const registerMixer = (m: THREE.AnimationMixer) => mixers.add(m)
  const registerPass = (p: Disposable) => passes.add(p)
  const registerGeometry = (g: THREE.BufferGeometry) => geometries.add(g)
  const registerMaterial = (m: THREE.Material) => materials.add(m)
  const registerTexture = (t: THREE.Texture) => textures.add(t)
  const setRaf = (id: number) => (rafId = id)
  const registerStop = () => (stopFlag = true)

  const disposeSceneResources = () => {
    if (scene) {
      scene.traverse((obj) => {
        const mesh = obj as unknown as THREE.Mesh
        const geo = (mesh as any).geometry as THREE.BufferGeometry | undefined
        const mat = (mesh as any).material as
          | THREE.Material
          | THREE.Material[]
          | undefined
        if (geo) geometries.add(geo)
        if (mat) {
          if (Array.isArray(mat)) mat.forEach((m) => materials.add(m))
          else materials.add(mat)
        }
      })
    }
    geometries.forEach((g) => g.dispose())
    materials.forEach((m) => {
      const uniforms = (m as any).uniforms as Record<string, any> | undefined
      if (uniforms)
        Object.values(uniforms).forEach((v) => {
          const tex = v && (v.value as THREE.Texture | undefined)
          if (tex) textures.add(tex)
        })
      m.dispose()
    })
    textures.forEach((t) => t.dispose())
  }

  const disposePostProcessing = () => {
    passes.forEach((p) => p && p.dispose && p.dispose())
    if (composer) {
      if (composer.reset) composer.reset()
      if (Array.isArray(composer.passes)) composer.passes.length = 0
      composer.dispose && composer.dispose()
      composer = null
    }
    if (pmrem) {
      pmrem.dispose()
      pmrem = null
    }
  }

  const disposeControls = () => {
    if (controls) {
      controls.dispose()
      controls = null
    }
  }

  const disposeRenderer = () => {
    if (renderer) {
      renderer.dispose()
      try {
        ;(renderer as any).forceContextLoss &&
          (renderer as any).forceContextLoss()
      } catch (e) {
        console.error(e)
      }
      renderer = null
    }
    try {
      ;(THREE as any).Cache &&
        (THREE as any).Cache.clear &&
        (THREE as any).Cache.clear()
    } catch (e) {
      console.error(e)
    }
  }

  const disposeAnimation = () => {
    mixers.forEach((m) => {
      try {
        m.stopAllAction()
        const root = (m as any).getRoot && (m as any).getRoot()
        if (root && (m as any).uncacheRoot) (m as any).uncacheRoot(root)
      } catch (e) {
        console.error(e)
      }
    })
    mixers.clear()
  }

  const stop = () => {
    stopFlag = true
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  const dispose = () => {
    stop()
    disposeAnimation()
    disposePostProcessing()
    disposeControls()
    disposeSceneResources()
    disposeRenderer()
  }

  onUnmounted(() => dispose())

  return {
    setRenderer,
    setScene,
    setControls,
    setPMREM,
    setComposer,
    registerMixer,
    registerPass,
    registerGeometry,
    registerMaterial,
    registerTexture,
    setRaf,
    registerStop,
    stop,
    dispose,
    get stopFlag() {
      return stopFlag
    },
  }
}
