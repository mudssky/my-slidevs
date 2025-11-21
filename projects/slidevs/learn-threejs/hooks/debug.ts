import { onUnmounted } from 'vue'
import type { Ref } from 'vue'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'

export type GuiAutoVisibilityOptions = {
  threshold?: number
}

export function useGuiAutoVisibility(
  domRef: Ref<HTMLElement | null | undefined>,
  options: GuiAutoVisibilityOptions = {},
) {
  let observer: IntersectionObserver | null = null
  let gui: GUI | null = null

  const createGui = () => {
    gui = new GUI()
    const el = domRef.value as HTMLElement | null
    observer = new IntersectionObserver(
      ([entry]) => {
        if (!gui) return
        if (entry && entry.isIntersecting) gui.show()
        else gui.hide()
      },
      { root: null, threshold: options.threshold ?? 0.01 },
    )
    if (el) observer.observe(el)
    return gui
  }

  onUnmounted(() => {
    observer && observer.disconnect()
    if (gui) {
      gui.destroy()
      gui = null
    }
  })

  return { createGui }
}
