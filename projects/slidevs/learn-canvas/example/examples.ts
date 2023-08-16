/**
 * 绘制矩形的例子，需要150*150以上的画布
 * @param ctx
 */
export function drawRectangular(ctx: CanvasRenderingContext2D) {
  ctx.fillRect(25, 25, 100, 100)
  ctx.clearRect(45, 45, 60, 60)
  ctx.strokeRect(50, 50, 50, 50)
}

// 使用路径绘制三角形
export function drawTriangle(
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
  // ctx.closePath()
  // ctx.stroke()
}

export function drawSmile(ctx: CanvasRenderingContext2D) {
  // 移动起点
  ctx.beginPath()
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制圆弧
  ctx.moveTo(110, 75)
  ctx.arc(75, 75, 35, 0, Math.PI, false) // 口 (顺时针)
  ctx.moveTo(65, 65)
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
  ctx.moveTo(95, 65)
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
  ctx.stroke()
}

export function drawArcTo(ctx: CanvasRenderingContext2D) {
  // ctx.beginPath()
  // ctx.moveTo(50, 50)
  // ctx.setLineDash([4, 5]) //表示4像素实线和5像素间隔,重复这样的模式
  // ctx.lineTo(100, 50)
  // ctx.lineTo(100, 100)
  // ctx.stroke()
  // ctx.setLineDash([])

  ctx.beginPath()
  ctx.moveTo(50, 50)
  ctx.arcTo(100, 50, 100, 100, 50)
  ctx.stroke()
}

export function drawTriangle2(ctx: CanvasRenderingContext2D) {
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

export function drawArcs(ctx: CanvasRenderingContext2D) {
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 3; x++) {
      ctx.beginPath()
      const centerX = 25 + x * 50 // 圆心 x 坐标值
      const centerY = 25 + y * 50 // 圆心 y 坐标值
      const radius = 20 // 圆弧半径
      const startAngle = 0 // 开始点
      const endAngle = Math.PI + (Math.PI * x) / 2 // 结束点
      const anticlockwise = y % 2 == 0 ? false : true // 顺时针或逆时针

      ctx.arc(centerX, centerY, radius, startAngle, endAngle, anticlockwise)

      if (y > 1) {
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
export function drawCurve1(ctx: CanvasRenderingContext2D) {
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
export function drawCurve2(ctx: CanvasRenderingContext2D) {
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
// 封装的一个用于绘制圆角矩形的函数。
export function roundedRect(
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

export function drawGame(ctx: CanvasRenderingContext2D) {
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

  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4)
  }

  for (let i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4)
  }

  for (let i = 0; i < 8; i++) {
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

export function drawPath2DDemo(ctx: CanvasRenderingContext2D) {
  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  const circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)

  // rectangle.addPath(circle)
  // ctx.stroke(rectangle)
}

export function drawPath2DSvg(ctx: CanvasRenderingContext2D) {
  const p = new Path2D('M10 10 h 80 v 80 h -80 Z')
  ctx.stroke(p)
  // ctx.fill(p)
}

export function drawFillStyleDemo(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle =
        'rgb(' +
        Math.floor(255 - 42.5 * i) +
        ',' +
        Math.floor(255 - 42.5 * j) +
        ',0)'
      ctx.fillRect(j * 25, i * 25, 25, 25)
    }
  }
}
export function drawStrokeStyleDemo(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.strokeStyle =
        'rgb(0,' +
        Math.floor(255 - 42.5 * i) +
        ',' +
        Math.floor(255 - 42.5 * j) +
        ')'
      // ctx.fillStyle =
      //   'rgb(' +
      //   Math.floor(255 - 42.5 * i) +
      //   ',' +
      //   Math.floor(255 - 42.5 * j) +
      //   ',0)'
      ctx.beginPath()
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
      ctx.stroke()
    }
  }
}

export function drawGlobalAlphaDemo(ctx: CanvasRenderingContext2D) {
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

export function drawRGBADemo(ctx: CanvasRenderingContext2D) {
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
  for (let x = 0; x < 10; x++) {
    ctx.fillStyle = 'rgba(255,255,255,' + (x + 1) / 10 + ')'
    for (let y = 0; y < 4; y++) {
      ctx.fillRect(5 + x * 14, 5 + y * 37.5, 14, 27.5)
    }
  }
}

export function drawLineWidthDemo(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i
    ctx.beginPath()
    ctx.moveTo(5 + i * 14, 5)
    ctx.lineTo(5 + i * 14, 140)
    ctx.stroke()
  }
}
export function drawLineCapDemo(ctx: CanvasRenderingContext2D) {
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

export function drawLineJoinDemo(ctx: CanvasRenderingContext2D) {
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

export function drawMiterLimitDemo(
  ctx: CanvasRenderingContext2D,
  miterLimit: number = 10
) {
  // 清空画布
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.fillStyle = 'purple'
  ctx.font = '16px Fira Sans'
  ctx.fillText(`miterLimit:${miterLimit}`, 100, 20, 100)
  // 绘制参考线
  ctx.strokeStyle = '#09f'
  ctx.lineWidth = 2
  ctx.strokeRect(-5, 50, 160, 50)

  // 设置线条样式
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 10

  ctx.miterLimit = miterLimit
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

export function drawLineDashDemo(ctx: CanvasRenderingContext2D) {
  let offset = 0
  function _drawLineDash(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.setLineDash([4, 2])
    ctx.lineDashOffset = -offset
    ctx.strokeRect(10, 10, 100, 100)
  }
  // 蚂蚁线运行
  function march() {
    offset++
    if (offset > 16) {
      offset = 0
    }
    _drawLineDash(ctx)
    setTimeout(march, 20)
    // requestAnimationFrame(march)
  }
  march()
  //  _drawLineDash(ctx)
}

export function drawLineDashDemo2(ctx: CanvasRenderingContext2D) {
  let y = 15
  function drawDashedLine(segment: number[]) {
    ctx.beginPath()
    ctx.setLineDash(segment)
    ctx.moveTo(0, y)
    ctx.lineTo(ctx.canvas.width, y)
    ctx.stroke()
    y += 20
  }

  drawDashedLine([])
  drawDashedLine([1, 1])
  drawDashedLine([10, 10])
  drawDashedLine([20, 5])
  drawDashedLine([15, 3, 3, 3])
  drawDashedLine([20, 3, 3, 3, 3, 3, 3, 3])
  drawDashedLine([12, 3, 3]) // Equals [12, 3, 3, 12, 3, 3]
}

export function drawLinearGradientDemo(ctx: CanvasRenderingContext2D) {
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

export function drawRadialGradientDemo(ctx: CanvasRenderingContext2D) {
  // 创建渐变
  const radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30)
  radgrad.addColorStop(0, '#A7D30C') //内圈
  radgrad.addColorStop(0.9, '#019F62') //中间
  radgrad.addColorStop(1, 'rgba(1,159,98,0)') //外径

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

export function drawFillTextDemo(ctx: CanvasRenderingContext2D) {
  ctx.font = '48px serif'
  // ctx.font = '48px Microsoft Yahei'
  // ctx.direction = 'rtl'
  ctx.fillText('Hello world', 10, 50)
}

export function drawStrokeTextDemo(ctx: CanvasRenderingContext2D) {
  ctx.font = '48px serif'
  ctx.strokeText('Hello world', 10, 50)
}

export function drawSaveRestoreDemo(ctx: CanvasRenderingContext2D) {
  ctx.fillRect(0, 0, 150, 150) // 使用默认设置绘制一个矩形
  ctx.save() // 保存默认状态

  ctx.fillStyle = '#09F' // 在原有配置基础上对颜色做改变
  ctx.fillRect(15, 15, 120, 120) // 使用新的设置绘制一个矩形

  ctx.save() // 保存当前状态
  ctx.fillStyle = '#FFF' // 再次改变颜色配置
  ctx.globalAlpha = 0.5
  ctx.fillRect(30, 30, 90, 90) // 使用新的配置绘制一个矩形

  ctx.restore() // 重新加载之前的颜色状态
  ctx.fillRect(45, 45, 60, 60) // 使用上一次的配置绘制一个矩形

  ctx.restore() // 加载默认颜色配置
  ctx.fillRect(60, 60, 30, 30) // 使用加载的配置绘制一个矩形
}

export function drawTranslateDemo(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.save()
      ctx.fillStyle = 'rgb(' + 51 * i + ', ' + (255 - 51 * i) + ', 255)'
      ctx.translate(10 + j * 50, 10 + i * 50)
      ctx.fillRect(0, 0, 25, 25)
      ctx.restore()
    }
  }
}

export function drawRotateDemo(ctx: CanvasRenderingContext2D) {
  // left rectangles, rotate from canvas origin
  ctx.save()
  // blue rect
  ctx.fillStyle = '#0095DD'
  ctx.fillRect(30, 30, 100, 100)
  ctx.rotate((Math.PI / 180) * 25)
  // grey rect
  ctx.fillStyle = '#4D4E53'
  ctx.fillRect(30, 30, 100, 100)
  ctx.restore()

  // right rectangles, rotate from rectangle center
  // draw blue rect
  ctx.fillStyle = '#0095DD'
  ctx.fillRect(150, 30, 100, 100)

  ctx.translate(200, 80) // translate to rectangle center
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25) // rotate
  ctx.translate(-200, -80) // translate back

  // draw grey rect
  ctx.fillStyle = '#4D4E53'
  ctx.fillRect(150, 30, 100, 100)
}

export function drawScaleDemo(ctx: CanvasRenderingContext2D) {
  //绘制一个矩形并缩放
  ctx.save()
  ctx.scale(10, 3)
  ctx.fillRect(1, 10, 10, 10)
  ctx.restore()

  // 关于x轴对称
  ctx.scale(-1, 1)
  ctx.font = '48px serif'
  ctx.fillText('SCALE', -135, 120)
}

export function drawTransformsDemo(ctx: CanvasRenderingContext2D) {
  const sin = Math.sin(Math.PI / 6)
  // const sin = 0
  const cos = Math.cos(Math.PI / 6)
  ctx.translate(100, 100)
  let c = 0
  // ctx.scale(cos, cos)
  for (let i = 0; i <= 12; i++) {
    c = Math.floor((255 / 12) * i)
    // ctx.fillStyle = 'rgb(' + c + ',' + c + ',' + c + ')'
    ctx.fillStyle = `rgb(${c},${c},${c})`
    ctx.fillRect(0, 0, 100, 10)

    ctx.transform(cos, sin, -sin, cos, 0, 0)
    // 翻译
    // ctx.rotate(Math.PI / 6)
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100)
  ctx.fillStyle = 'rgba(255, 128, 255, 0.5)'
  ctx.fillRect(0, 50, 100, 100)
}
