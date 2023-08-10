<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { PositionOption, drawFromPosition } from '../utils/drawUtils'
import canvas_backdrop from '/images/canvas_backdrop.png'
const canvasBoardRef = ref()

function drawImageDemo(ctx: CanvasRenderingContext2D) {
  const img = new Image()
  img.onload = function () {
    ctx.drawImage(img, 0, 0)
  }
  img.src = canvas_backdrop
}

/**
 * 图片缩放后铺满
 * @param ctx
 * @param options
 */
function drawImageScaleDemo(
  ctx: CanvasRenderingContext2D,
  options: PositionOption
) {
  const img = new Image()
  img.onload = function () {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        drawFromPosition(
          ctx,
          () => {
            ctx.drawImage(img, j * 50, i * 38, 50, 38)
          },
          options
        )
      }
    }
  }
  img.src = canvas_backdrop
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!

  drawFromPosition(ctx, drawImageDemo, {
    startX: 10,
    startY: 10,
  })
  drawImageScaleDemo(ctx, {
    startX: 10,
    startY: 200,
  })
})
</script>

<style lang="scss"></style>
