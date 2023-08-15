<template>
  <div>
    <img
      class="inline-block"
      id="source"
      :src="rhino"
      width="300"
      height="227"
    />
    <img
      class="inline-block"
      id="frame"
      :src="canvas_picture_frame"
      width="132"
      height="150"
    />
  </div>
  <div>通过裁剪拼接图片</div>
  <CanvasBoard
    ref="canvasBoardRef"
    :width="p.width"
    :height="p.height"
    :draw-fn="drawImageScaleDemo"
  ></CanvasBoard>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import canvas_picture_frame from '/images/canvas_picture_frame.png'
import rhino from '/images/rhino.jpg'

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
  // Draw slice
  ctx.drawImage(
    document.getElementById('source') as HTMLImageElement,
    33,
    71,
    104,
    124,
    21,
    20,
    87,
    104
  )

  // Draw frame
  ctx.drawImage(document.getElementById('frame') as HTMLImageElement, 0, 0)
}
</script>

<style lang="scss"></style>
