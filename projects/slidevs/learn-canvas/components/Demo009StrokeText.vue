<template>
  <div class="inline-block">
    <div class="text-[12px]">strokeText 例子</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
      :draw-fn="drawStrokeTextDemo"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { drawStrokeTextDemo } from '../example/examples'
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
