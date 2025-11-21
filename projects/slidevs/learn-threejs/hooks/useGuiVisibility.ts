import { onUnmounted } from 'vue'
import type { Ref } from 'vue'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'

export type GuiVisibilityOptions = {
  threshold?: number
}

export function useGuiVisibility(
  domRef: Ref<HTMLElement | null | undefined>,
  options: GuiVisibilityOptions = {},
) {
  let observer: IntersectionObserver | null = null
  let gui: GUI | null = null

  const create = () => {
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

  return { create }
}