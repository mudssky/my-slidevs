<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPosition } from '../utils/drawUtils'
const canvasBoardRef = ref()

function drawScaleDemo(ctx: CanvasRenderingContext2D) {
  // draw a simple rectangle, but scale it.
  ctx.save()
  ctx.scale(10, 3)
  ctx.fillRect(1, 10, 10, 10)
  ctx.restore()

  // mirror horizontally
  ctx.scale(-1, 1)
  ctx.font = '48px serif'
  ctx.fillText('MDN', -135, 120)
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  // drawTranslateDemo(ctx)
  drawFromPosition(ctx, drawScaleDemo, {
    startX: 10,
    startY: 10,
  })
})
</script>

<style lang="scss"></style>
