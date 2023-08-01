<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPostion } from '../utils/drawUtils'

const canvasBoardRef = ref()

function drawLineWidthDemo(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i
    ctx.beginPath()
    ctx.moveTo(5 + i * 14, 5)
    ctx.lineTo(5 + i * 14, 140)
    ctx.stroke()
  }
}
function drawLineCapDemo(ctx: CanvasRenderingContext2D) {
  var lineCap: CanvasLineCap[] = ['butt', 'round', 'square']

  // 创建路径
  ctx.strokeStyle = '#09f'
  ctx.beginPath()
  ctx.moveTo(10, 10)
  ctx.lineTo(140, 10)
  ctx.moveTo(10, 140)
  ctx.lineTo(140, 140)
  ctx.stroke()

  // 画线条
  ctx.strokeStyle = 'black'
  for (let i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15
    ctx.lineCap = lineCap[i]
    ctx.beginPath()
    ctx.moveTo(25 + i * 50, 10)
    ctx.lineTo(25 + i * 50, 140)
    ctx.stroke()
  }
}

function drawGlobalAlphaDemo(ctx: CanvasRenderingContext2D) {
  // 画背景
  ctx.fillStyle = '#FD0'
  ctx.fillRect(0, 0, 75, 75)
  ctx.fillStyle = '#6C0'
  ctx.fillRect(75, 0, 75, 75)
  ctx.fillStyle = '#09F'
  ctx.fillRect(0, 75, 75, 75)
  ctx.fillStyle = '#F30'
  ctx.fillRect(75, 75, 75, 75)
  ctx.fillStyle = '#FFF'

  // 设置透明度值
  ctx.globalAlpha = 0.2

  // 画半透明圆
  for (let i = 0; i < 7; i++) {
    ctx.beginPath()
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true)
    ctx.fill()
  }
}

function drawRGBADemo(ctx: CanvasRenderingContext2D) {
  // 画背景
  ctx.fillStyle = 'rgb(255,221,0)'
  ctx.fillRect(0, 0, 150, 37.5)
  ctx.fillStyle = 'rgb(102,204,0)'
  ctx.fillRect(0, 37.5, 150, 37.5)
  ctx.fillStyle = 'rgb(0,153,255)'
  ctx.fillRect(0, 75, 150, 37.5)
  ctx.fillStyle = 'rgb(255,51,0)'
  ctx.fillRect(0, 112.5, 150, 37.5)

  // 画半透明矩形
  for (var i = 0; i < 10; i++) {
    ctx.fillStyle = 'rgba(255,255,255,' + (i + 1) / 10 + ')'
    for (let j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5)
    }
  }
}
onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!

  drawFromPostion(ctx, drawLineWidthDemo, {
    startX: 10,
    startY: 10,
  })
  drawFromPostion(ctx, drawLineCapDemo, {
    startX: 10,
    startY: 200,
  })
  drawFromPostion(ctx, drawGlobalAlphaDemo, {
    startX: 200,
    startY: 10,
  })

  drawFromPostion(ctx, drawRGBADemo, {
    startX: 200,
    startY: 200,
  })
})
</script>

<style lang="scss"></style>
