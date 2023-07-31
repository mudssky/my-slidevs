<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'

const canvasBoardRef = ref()

function drawRectangular(ctx: CanvasRenderingContext2D) {
  ctx.fillRect(25, 25, 100, 100)
  ctx.clearRect(45, 45, 60, 60)
  ctx.strokeRect(50, 50, 50, 50)
}

// 使用路径绘制三角形
function drawTriangle(
  ctx: CanvasRenderingContext2D,
  options?: {
    startX: number
    startY: number
  }
) {
  const { startX = 0, startY = 0 } = options || {}
  ctx.beginPath()
  ctx.moveTo(startX + 75, startY + 50)
  ctx.lineTo(startX + 100, startY + 75)
  ctx.lineTo(startX + 100, startY + 25)
  ctx.fill()
}
onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  drawRectangular(ctx)
  drawTriangle(ctx, {
    startX: 0,
    startY: 150,
  })
})
</script>

<style lang="scss"></style>
