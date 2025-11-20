<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPosition } from '../utils/drawUtils'

const canvasBoardRef = ref()
/**
 * 线性渐变demo
 * @param ctx
 */
function drawLinearGradientDemo(ctx: CanvasRenderingContext2D) {
  // Create gradients
  // 纵向渐变
  const lingrad = ctx.createLinearGradient(0, 0, 0, 150)
  // 添加色标
  lingrad.addColorStop(0, '#00ABEB')
  lingrad.addColorStop(0.5, '#fff')
  lingrad.addColorStop(0.5, '#26C000')
  // lingrad.addColorStop(0.75, 'red')
  lingrad.addColorStop(1, '#fff')

  // 纵向渐变
  const lingrad2 = ctx.createLinearGradient(0, 50, 0, 95)
  // 黑色到透明度0的渐变
  lingrad2.addColorStop(0.5, '#000')
  lingrad2.addColorStop(1, 'rgba(0,0,0,0)')

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad
  ctx.strokeStyle = lingrad2

  // draw shapes
  ctx.fillRect(10, 10, 130, 130)
  ctx.strokeRect(50, 50, 50, 50)
}

/**
 * 径向渐变demo
 * @param ctx
 */
function drawRadialGradientDemo(ctx: CanvasRenderingContext2D) {
  // 创建渐变
  const radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30)
  radgrad.addColorStop(0, '#A7D30C')
  radgrad.addColorStop(0.9, '#019F62')
  radgrad.addColorStop(1, 'rgba(1,159,98,0)')

  const radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50)
  radgrad2.addColorStop(0, '#FF5F98')
  radgrad2.addColorStop(0.75, '#FF0188')
  radgrad2.addColorStop(1, 'rgba(255,1,136,0)')

  const radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40)
  radgrad3.addColorStop(0, '#00C9FF')
  radgrad3.addColorStop(0.8, '#00B5E2')
  radgrad3.addColorStop(1, 'rgba(0,201,255,0)')

  const radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90)
  radgrad4.addColorStop(0, '#F4F201')
  radgrad4.addColorStop(0.8, '#E4C700')
  radgrad4.addColorStop(1, 'rgba(228,199,0,0)')

  // 画图形
  ctx.fillStyle = radgrad4
  ctx.fillRect(0, 0, 150, 150)
  ctx.fillStyle = radgrad3
  ctx.fillRect(0, 0, 150, 150)
  ctx.fillStyle = radgrad2
  ctx.fillRect(0, 0, 150, 150)
  ctx.fillStyle = radgrad
  ctx.fillRect(0, 0, 150, 150)
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!

  drawFromPosition(ctx, drawLinearGradientDemo, {
    startX: 10,
    startY: 10,
  })
  drawFromPosition(ctx, drawRadialGradientDemo, {
    startX: 10,
    startY: 200,
  })
})
</script>

<style lang="scss"></style>
