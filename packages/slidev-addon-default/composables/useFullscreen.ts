import { computed, onMounted, onUnmounted, ref } from 'vue'

export function useFullscreen(options: {
  containerInlineRef: { value: HTMLElement | null }
  containerFullRef: { value: HTMLElement | null }
}) {
  const isFullscreen = ref(false)
  const dlgRef = ref<HTMLDialogElement | null>(null)

  const teleportTarget = computed<HTMLElement | null>(() => (isFullscreen.value ? options.containerFullRef.value : options.containerInlineRef.value))

  function toggleFullscreen() {
    isFullscreen.value = !isFullscreen.value
    if (isFullscreen.value) {
      dlgRef.value?.showModal()
    } else {
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

