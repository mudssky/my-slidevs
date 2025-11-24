<template>
  <div :class="['toolbar', left ? 'left' : '']">
    <button v-if="zoom" @click="$emit('zoom-out')" title="缩小">−</button>
    <button v-if="zoom" @click="$emit('zoom-in')" title="放大">＋</button>
    <button v-if="zoom" @click="$emit('reset')" title="重置">Reset</button>
    <button v-if="zoom" @click="$emit('fit')" title="适配">Fit</button>
    <button @click="$emit('toggle-fullscreen')" :title="fullscreenTitle">
      {{ fullscreenIcon }}
    </button>
    <button @click="$emit('download-svg')" title="下载SVG">SVG</button>
    <button @click="$emit('download-png')" title="下载PNG">PNG</button>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  zoom?: boolean
  left?: boolean
  fullscreen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  zoom: true,
  left: false,
  fullscreen: false,
})

defineEmits([
  'zoom-in',
  'zoom-out',
  'reset',
  'fit',
  'toggle-fullscreen',
  'download-svg',
  'download-png',
])

const fullscreenTitle = computed(() => (props.fullscreen ? '退出' : '全屏'))
const fullscreenIcon = computed(() => (props.fullscreen ? '⤡' : '⤢'))
</script>
<style scoped>
.toolbar {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 6px;
  padding: 6px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.72);
  color: #fff;
  backdrop-filter: saturate(120%) blur(6px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 1;
}
.left {
  left: 8px;
  right: auto;
}
.toolbar button {
  min-width: auto;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
}
.toolbar button:hover {
  background: rgba(255, 255, 255, 0.26);
}
</style>
