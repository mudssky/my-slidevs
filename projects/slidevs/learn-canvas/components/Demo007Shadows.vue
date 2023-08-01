<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPostion } from '../utils/drawUtils'

const canvasBoardRef = ref()
/**
 * 阴影demo
 * @param ctx
 */
function drawTextShadow(ctx: CanvasRenderingContext2D) {
  ctx.shadowOffsetX = 2
  ctx.shadowOffsetY = 2
  ctx.shadowBlur = 2
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'

  ctx.font = '20px Times New Roman'
  ctx.fillStyle = 'Black'
  ctx.fillText('Sample String', 5, 30)
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!

  drawFromPostion(ctx, drawTextShadow, {
    startX: 10,
    startY: 10,
  })
})
</script>

<style lang="scss"></style>
