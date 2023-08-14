<template>
  <div class="inline-block">
    <div class="text-[12px]">setLineDash 参数例子</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
      :draw-fn="drawLineDashDemo2"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { drawLineDashDemo2 } from '../example/examples'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 200,
})
const canvasBoardRef = ref()
</script>

<style lang="scss"></style>
