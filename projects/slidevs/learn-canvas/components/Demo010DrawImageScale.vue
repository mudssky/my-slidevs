<template>
  <CanvasBoard
    ref="canvasBoardRef"
    :width="p.width"
    :height="p.height"
    :draw-fn="drawImageScaleDemo"
  ></CanvasBoard>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import canvas_backdrop from '/images/canvas_backdrop.png'

interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 200,
})
const canvasBoardRef = ref()
/**
 * 图片缩放后铺满
 * @param ctx
 * @param options
 */
function drawImageScaleDemo(ctx: CanvasRenderingContext2D) {
  const img = new Image()
  img.onload = function () {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.drawImage(img, j * 50, i * 38, 50, 38)
      }
    }
  }
  img.src = canvas_backdrop
}
</script>

<style lang="scss"></style>
