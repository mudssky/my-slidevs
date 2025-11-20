<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { PositionOption, drawFromPosition } from '../utils/drawUtils'

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
  const lineCap: CanvasLineCap[] = ['butt', 'round', 'square']

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

function drawLineJoinDemo(ctx: CanvasRenderingContext2D) {
  const lineJoin: CanvasLineJoin[] = ['round', 'bevel', 'miter']
  ctx.lineWidth = 10
  for (let i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i]
    ctx.beginPath()
    ctx.moveTo(-5, 5 + i * 40)
    ctx.lineTo(35, 45 + i * 40)
    ctx.lineTo(75, 5 + i * 40)
    ctx.lineTo(115, 45 + i * 40)
    ctx.lineTo(155, 5 + i * 40)
    ctx.stroke()
  }
}

/**
 * miterLimit 属性效果
 * @param ctx
 */
function drawLineJoinDemo2(ctx: CanvasRenderingContext2D) {
  // 绘制参考线
  ctx.strokeStyle = '#09f'
  ctx.lineWidth = 2
  ctx.strokeRect(-5, 50, 160, 50)

  // 设置线条样式
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 10

  // 检查输入
  ctx.miterLimit = 10

  // 绘制线条
  ctx.beginPath()
  ctx.moveTo(0, 100)
  for (let i = 0; i < 24; i++) {
    const dy = i % 2 == 0 ? 25 : -25
    ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy)
  }
  ctx.stroke()
  return false
}
function drawLineDashDemo(
  ctx: CanvasRenderingContext2D,
  options?: PositionOption
) {
  let offset = 0
  function drawLineDash1(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, 120, 120)
    ctx.setLineDash([4, 2])
    ctx.lineDashOffset = -offset
    ctx.strokeRect(10, 10, 100, 100)
  }
  // 蚂蚁线行军
  function march() {
    offset++
    if (offset > 16) {
      offset = 0
    }
    drawFromPosition(ctx, drawLineDash1, options)
    setTimeout(march, 20)
  }
  march()
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!

  drawFromPosition(ctx, drawLineWidthDemo, {
    startX: 10,
    startY: 10,
  })
  drawFromPosition(ctx, drawLineCapDemo, {
    startX: 10,
    startY: 200,
  })
  drawFromPosition(ctx, drawLineJoinDemo, {
    startX: 200,
    startY: 10,
  })

  drawFromPosition(ctx, drawLineJoinDemo2, {
    startX: 200,
    startY: 200,
  })

  drawLineDashDemo(ctx, {
    startX: 400,
  })
})
</script>

<style lang="scss"></style>
