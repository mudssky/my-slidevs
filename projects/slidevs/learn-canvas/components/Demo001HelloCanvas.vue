<template>
  <div>
    <canvas id="canvasHello" width="900.5" height="450">
      当前浏览器不支持canvas元素，请升级或更换浏览器！
    </canvas>
  </div>
</template>


<script setup lang="ts">

import { onMounted } from 'vue'
onMounted(() => {
  // 1. 获取canvas dom对象
  const canvasDom = <HTMLCanvasElement>document.getElementById('canvasHello')
  if (canvasDom?.getContext) {
    // 2、从HTMLCanvasElement获取上下文环境对象context
    const ctx = canvasDom.getContext('2d')!
    // console.log({ ctx })
    // 3. 绘制图形
    // ctx.imageSmoothingEnabled = false
    // ctx.imageSmoothingEnabled=true
    // ctx.imageSmoothingQuality = 'high'
    
    // ctx.lineWidth=1
    // ctx.lineCap = 'round'
    // ctx.lineJoin='round'
    // Window.devicePixelRatio 当前显示设备的物理像素分辨率与CSS 像素分辨率之比。简单来说，它告诉浏览器应使用多少屏幕实际像素来绘制单个 CSS 像素。
    // 主要用于适配视网膜屏
    // ctx.canvas.width = ctx.canvas.width *window.devicePixelRatio
    // ctx.canvas.height = ctx.canvas.height*window.devicePixelRatio
    // ctx.canvas.width = ctx.canvas.width
    // ctx.canvas.height=ctx.canvas.height
    ctx.moveTo(80, 55) //左上角为坐标起点0.0
    ctx.lineTo(800, 150)
    ctx.stroke()

    // 绘制矩形
    ctx.fillStyle = 'green'
    ctx.fillRect(50, 250, 400, 100)
    // 绘制文字
    ctx.fillStyle = 'purple'
    ctx.font = '50px Arial'
    ctx.fillText('hello canvas', 200, 400, 400) //y是文字基线的位置，因此不能为0，会超出画布之外

    // ctx.fillStyle = 'rgb(200,0,0)'
    // ctx.fillRect(10, 10, 55, 50)

    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
    // ctx.fillRect(30, 30, 55, 50)
  }
})
</script>

<style lang="scss">
#canvasHello {
  // width: 100%;
  // height: 100%;
  // width: 900px;
  // height: 450px;

  border: 1px solid #eee;
  border-radius: 8px;
}
</style>
