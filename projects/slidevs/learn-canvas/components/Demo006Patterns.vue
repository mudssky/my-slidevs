<template>
  <div>
    <div>Demo006Patterns</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
      :draw-fn="drawPatterns"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import canvas_createpattern from '/images/canvas_createpattern.png'

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
 * 图案样式demo
 * @param ctx
 */
function drawPatterns(ctx: CanvasRenderingContext2D) {
  // 创建新 image 对象，用作图案
  var img = new Image()
  img.src = canvas_createpattern
  img.onload = function () {
    // 创建图案
    const pattern = ctx.createPattern(img, 'repeat')
    ctx.fillStyle = pattern!
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }
}
</script>

<style lang="scss"></style>
