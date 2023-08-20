<template>
  <div>
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
    <div>裁剪犀牛头部，放到相框里</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
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
  const rhinoDom = document.getElementById('source') as HTMLImageElement
  const frameDom = document.getElementById('frame') as HTMLImageElement

  // Draw slice
  ctx.drawImage(rhinoDom, 33, 71, 104, 124, 21, 20, 87, 104)

  // 绘制到指定位置
  ctx.drawImage(frameDom, 0, 0)
}
onMounted(() => {
  const ctx: CanvasRenderingContext2D =
    canvasBoardRef.value.canvasDom.getContext('2d')
  setTimeout(() => {
    drawImageScaleDemo(ctx)
  }, 2000)
})
</script>

<style lang="scss"></style>
