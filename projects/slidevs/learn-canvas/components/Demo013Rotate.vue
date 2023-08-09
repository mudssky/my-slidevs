<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPosition } from '../utils/drawUtils'
const canvasBoardRef = ref()

function drawRotateDemo(ctx: CanvasRenderingContext2D) {
  // left rectangles, rotate from canvas origin
  ctx.save()
  // blue rect
  ctx.fillStyle = '#0095DD'
  ctx.fillRect(30, 30, 100, 100)
  ctx.rotate((Math.PI / 180) * 25)
  // grey rect
  ctx.fillStyle = '#4D4E53'
  ctx.fillRect(30, 30, 100, 100)
  ctx.restore()

  // right rectangles, rotate from rectangle center
  // draw blue rect
  ctx.fillStyle = '#0095DD'
  ctx.fillRect(150, 30, 100, 100)

  ctx.translate(200, 80) // translate to rectangle center
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25) // rotate
  ctx.translate(-200, -80) // translate back

  // draw grey rect
  ctx.fillStyle = '#4D4E53'
  ctx.fillRect(150, 30, 100, 100)
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  // drawTranslateDemo(ctx)
  drawFromPosition(ctx, drawRotateDemo, {
    startX: 100,
    startY: 10,
  })
})
</script>

<style lang="scss"></style>
