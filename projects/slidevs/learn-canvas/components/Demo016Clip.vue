<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPosition } from '../utils/drawUtils'
const canvasBoardRef = ref()

function drawTransformsDemo(ctx: CanvasRenderingContext2D) {
  ctx.fillRect(0, 0, 150, 150)
  ctx.translate(75, 75)

  // Create a circular clipping path
  ctx.beginPath()
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true)
  ctx.clip()

  // draw background
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75)
  lingrad.addColorStop(0, '#232256')
  lingrad.addColorStop(1, '#143778')

  ctx.fillStyle = lingrad
  ctx.fillRect(-75, -75, 150, 150)

  // draw stars
  for (var j = 1; j < 50; j++) {
    ctx.save()
    ctx.fillStyle = '#fff'
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150)
    )
    drawStar(ctx, Math.floor(Math.random() * 4) + 2)
    ctx.restore()
  }
}

function drawStar(ctx: CanvasRenderingContext2D, r: number) {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(r, 0)
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5)
    if (i % 2 == 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0)
    } else {
      ctx.lineTo(r, 0)
    }
  }
  ctx.closePath()
  ctx.fill()
  ctx.restore()
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
