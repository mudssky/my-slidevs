<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPosition } from '../utils/drawUtils'

const canvasBoardRef = ref()

function drawTextDemo(ctx: CanvasRenderingContext2D) {
  ctx.font = '48px serif'
  ctx.fillText('Hello world', 10, 50)
}

function drawTextStrokeDemo(ctx: CanvasRenderingContext2D) {
  ctx.font = '48px serif'
  ctx.strokeText('Hello world', 10, 50)
}
onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!

  drawFromPosition(ctx, drawTextDemo, {
    startX: 10,
    startY: 10,
  })
  drawFromPosition(ctx, drawTextStrokeDemo, {
    startX: 10,
    startY: 100,
  })
})
</script>

<style lang="scss"></style>
