<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPosition } from '../utils/drawUtils'
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

function drawSmile(
  ctx: CanvasRenderingContext2D,
  options?: {
    startX?: number
    startY?: number
  }
) {
  const { startX = 0, startY = 0 } = options || {}
  // 保存初始状态
  ctx.save()
  // 移动起点
  ctx.translate(startX, startY)
  ctx.beginPath()
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制圆弧
  ctx.moveTo(110, 75)
  ctx.arc(75, 75, 35, 0, Math.PI, false) // 口 (顺时针)
  ctx.moveTo(65, 65)
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
  ctx.moveTo(95, 65)
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
  ctx.stroke()
  // 恢复初始状态
  ctx.restore()
}

function drawTriangle2(ctx: CanvasRenderingContext2D) {
  // 填充三角形
  ctx.beginPath()
  ctx.moveTo(25, 25)
  ctx.lineTo(105, 25)
  ctx.lineTo(25, 105)
  ctx.fill()

  // 描边三角形
  ctx.beginPath()
  ctx.moveTo(125, 125)
  ctx.lineTo(125, 45)
  ctx.lineTo(45, 125)
  // 闭合路径，相当于画了第三条边
  ctx.closePath()
  ctx.stroke()
}

function drawArcs(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath()
      let x = 25 + j * 50 // x 坐标值
      let y = 25 + i * 50 // y 坐标值
      let radius = 20 // 圆弧半径
      let startAngle = 0 // 开始点
      let endAngle = Math.PI + (Math.PI * j) / 2 // 结束点
      let anticlockwise = i % 2 == 0 ? false : true // 顺时针或逆时针

      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

      if (i > 1) {
        ctx.fill()
      } else {
        ctx.stroke()
      }
    }
  }
}
/**
 * 二次贝塞尔曲线 对话气泡
 * @param ctx
 */
function drawCurve1(ctx: CanvasRenderingContext2D) {
  // 二次贝塞尔曲线
  ctx.beginPath()
  ctx.moveTo(75, 25)
  ctx.quadraticCurveTo(25, 25, 25, 62.5)
  ctx.quadraticCurveTo(25, 100, 50, 100)
  ctx.quadraticCurveTo(50, 120, 30, 125)
  ctx.quadraticCurveTo(60, 120, 65, 100)
  ctx.quadraticCurveTo(125, 100, 125, 62.5)
  ctx.quadraticCurveTo(125, 25, 75, 25)
  ctx.stroke()
}

/**
 * 三次贝塞尔曲线 心形
 * @param ctx
 */
function drawCurve2(ctx: CanvasRenderingContext2D) {
  //三次贝塞尔曲线
  ctx.beginPath()
  ctx.moveTo(75, 40)
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25)
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120)
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40)
  ctx.fill()
}

function drawGame(ctx: CanvasRenderingContext2D) {
  roundedRect(ctx, 12, 12, 150, 150, 15)
  roundedRect(ctx, 19, 19, 150, 150, 9)
  roundedRect(ctx, 53, 53, 49, 33, 10)
  roundedRect(ctx, 53, 119, 49, 16, 6)
  roundedRect(ctx, 135, 53, 49, 33, 10)
  roundedRect(ctx, 135, 119, 25, 49, 10)

  ctx.beginPath()
  ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false)
  ctx.lineTo(31, 37)
  ctx.fill()

  for (var i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4)
  }

  for (i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4)
  }

  for (i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4)
  }

  ctx.beginPath()
  ctx.moveTo(83, 116)
  ctx.lineTo(83, 102)
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88)
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102)
  ctx.lineTo(111, 116)
  ctx.lineTo(106.333, 111.333)
  ctx.lineTo(101.666, 116)
  ctx.lineTo(97, 111.333)
  ctx.lineTo(92.333, 116)
  ctx.lineTo(87.666, 111.333)
  ctx.lineTo(83, 116)
  ctx.fill()

  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.moveTo(91, 96)
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101)
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106)
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101)
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96)
  ctx.moveTo(103, 96)
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101)
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106)
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101)
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96)
  ctx.fill()

  ctx.fillStyle = 'black'
  ctx.beginPath()
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true)
  ctx.fill()

  ctx.beginPath()
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true)
  ctx.fill()
}

// 封装的一个用于绘制圆角矩形的函数。
function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath()
  ctx.moveTo(x, y + radius)
  ctx.lineTo(x, y + height - radius)
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height)
  ctx.lineTo(x + width - radius, y + height)
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
  ctx.lineTo(x + width, y + radius)
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y)
  ctx.lineTo(x + radius, y)
  ctx.quadraticCurveTo(x, y, x, y + radius)
  ctx.stroke()
}

function drawPath2DTest(ctx: CanvasRenderingContext2D) {
  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  const circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)
}

function drawPath2DTest2(ctx: CanvasRenderingContext2D) {
  const p = new Path2D('M10 10 h 80 v 80 h -80 Z')
  // ctx.stroke(p)
  ctx.fill(p)
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  drawRectangular(ctx)
  drawTriangle(ctx, {
    startX: 0,
    startY: 150,
  })
  drawSmile(ctx, {
    startX: 0,
    startY: 250,
  })
  drawFromPosition(ctx, drawTriangle2, {
    startX: 250,
  })

  drawFromPosition(ctx, drawArcs, {
    startX: 250,
    startY: 200,
  })
  drawFromPosition(ctx, drawCurve1, {
    startX: 450,
  })

  drawFromPosition(ctx, drawCurve2, {
    startX: 450,
    startY: 200,
  })

  drawFromPosition(ctx, drawGame, {
    startX: 650,
  })
  drawFromPosition(ctx, drawPath2DTest, {
    startX: 650,
    startY: 200,
  })

  drawFromPosition(ctx, drawPath2DTest2, {
    startX: 650,
    startY: 300,
  })
})
</script>

<style lang="scss"></style>
