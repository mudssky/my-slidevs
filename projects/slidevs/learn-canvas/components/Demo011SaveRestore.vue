<template>
  <div class="inline-block">
    <div class="text-[12px]">Demo011SaveRestore</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
      :draw-fn="drawSaveRestoreDemo"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { drawSaveRestoreDemo } from '../example/examples'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 200,
})
const canvasBoardRef = ref()
</script>

<style lang="scss"></style>
