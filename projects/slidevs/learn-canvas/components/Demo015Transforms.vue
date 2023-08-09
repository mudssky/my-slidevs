<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPosition } from '../utils/drawUtils'
const canvasBoardRef = ref()

function drawTransformsDemo(ctx: CanvasRenderingContext2D) {
  var sin = Math.sin(Math.PI / 6)
  var cos = Math.cos(Math.PI / 6)
  ctx.translate(100, 100)
  var c = 0
  for (let i = 0; i <= 12; i++) {
    c = Math.floor((255 / 12) * i)
    ctx.fillStyle = 'rgb(' + c + ',' + c + ',' + c + ')'
    ctx.fillRect(0, 0, 100, 10)
    ctx.transform(cos, sin, -sin, cos, 0, 0)
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100)
  ctx.fillStyle = 'rgba(255, 128, 255, 0.5)'
  ctx.fillRect(0, 50, 100, 100)
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  // drawTranslateDemo(ctx)
  drawFromPosition(ctx, drawTransformsDemo, {
    startX: 0,
    startY: 0,
  })
})
</script>

<style lang="scss"></style>
