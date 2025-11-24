import { computed, onMounted, onUnmounted, ref, nextTick } from 'vue'

export function useFullscreen(options: {
  containerInlineRef: { value: HTMLElement | null }
  containerFullRef: { value: HTMLElement | null }
}) {
  const isFullscreen = ref(false)
  const dlgRef = ref<HTMLDialogElement | null>(null)

  const teleportTarget = computed<HTMLElement | null>(() => (isFullscreen.value ? options.containerFullRef.value : options.containerInlineRef.value))

  function toggleFullscreen() {
    if (!isFullscreen.value) {
      dlgRef.value?.showModal()
      isFullscreen.value = true
      nextTick().then(() => {
        if (!options.containerFullRef.value && dlgRef.value) {
          const el = dlgRef.value.querySelector('.viewport')
          if (el instanceof HTMLElement) options.containerFullRef.value = el
        }
      })
    } else {
      isFullscreen.value = false
      dlgRef.value?.close()
    }
  }

  function onDialogClose() {
    if (isFullscreen.value) isFullscreen.value = false
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isFullscreen.value) {
      dlgRef.value?.close()
      isFullscreen.value = false
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
  })

  return { isFullscreen, dlgRef, teleportTarget, toggleFullscreen, onDialogClose }
}
