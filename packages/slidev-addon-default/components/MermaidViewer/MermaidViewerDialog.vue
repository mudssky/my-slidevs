<template>
  <dialog ref="dlgRef" class="mv-dialog" @close="$emit('close')">
    <div
      ref="containerRef"
      class="viewport fullscreen"
      @wheel.prevent="onWheel && onWheel($event)"
      @mousedown="onPointerDown && onPointerDown($event)"
      @mousemove="onPointerMove && onPointerMove($event)"
      @mouseup="onPointerUp && onPointerUp($event)"
      @mouseleave="onPointerUp && onPointerUp($event)"
      @dblclick="$emit('toggle-fullscreen')"
      @contextmenu.prevent
    >
      <button
        class="close-btn"
        @click="$emit('toggle-fullscreen')"
        title="关闭"
      >
        ×
      </button>
      <MermaidViewerToolbar
        v-if="zoom"
        :left="true"
        :fullscreen="true"
        :zoom="zoom"
        @zoom-out="$emit('zoom-out')"
        @zoom-in="$emit('zoom-in')"
        @reset="$emit('reset')"
        @fit="$emit('fit')"
        @toggle-fullscreen="$emit('toggle-fullscreen')"
        @download-svg="$emit('download-svg')"
        @download-png="$emit('download-png')"
      />
    </div>
  </dialog>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import MermaidViewerToolbar from './MermaidViewerToolbar.vue'
interface Props {
  open?: boolean
  zoom?: boolean
  onWheel?: (e: WheelEvent) => void
  onPointerDown?: (e: MouseEvent) => void
  onPointerMove?: (e: MouseEvent) => void
  onPointerUp?: (e: MouseEvent) => void
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
  zoom: true,
  onWheel: undefined,
  onPointerDown: undefined,
  onPointerMove: undefined,
  onPointerUp: undefined,
})

const emit = defineEmits([
  'close',
  'zoom-out',
  'zoom-in',
  'reset',
  'fit',
  'toggle-fullscreen',
  'download-svg',
  'download-png',
  'ready',
])

const dlgRef = ref<HTMLDialogElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

defineExpose({ dlgRef, containerRef })

watch(
  () => props.open,
  (v) => {
    if (v) dlgRef.value?.showModal()
    else dlgRef.value?.close()
    if (v) emit('ready', { dlgRef, containerRef })
  },
)

onMounted(() => {
  if (props.open) dlgRef.value?.showModal()
  emit('ready', { dlgRef, containerRef })
})
</script>
<style scoped>
.mv-dialog {
  border: none;
  padding: 0;
  width: auto;
  background: var(--slidev-slide-container-background, rgba(0, 0, 0, 0.85));
}
.mv-dialog::backdrop {
  background: color-mix(
    in oklab,
    var(--slidev-slide-container-background, rgba(0, 0, 0, 0.85)) 90%,
    #000 10%
  );
}
.viewport {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 240px;
  overflow: hidden;
  background: transparent;
}
.fullscreen {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
}
.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: inherit;
  z-index: 2;
}
.viewport:hover .toolbar {
  opacity: 1;
  pointer-events: auto;
}
</style>
