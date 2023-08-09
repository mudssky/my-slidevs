<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPosition } from '../utils/drawUtils'
import canvas_createpattern from '../assets/images/canvas_createpattern.png'
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
    const ptrn = ctx.createPattern(img, 'repeat')
    ctx.fillStyle = ptrn!
    ctx.fillRect(0, 0, 150, 150)
  }
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!

  drawFromPosition(ctx, drawPatterns, {
    startX: 10,
    startY: 10,
  })
})
</script>

<style lang="scss"></style>
