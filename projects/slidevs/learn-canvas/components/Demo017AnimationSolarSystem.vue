<template>
  <div class="inline-block">
    <div class="text-[12px]">Demo017AnimationSolarSystem</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import earthPic from '/images/canvas_earth.png'
import moonPic from '/images/canvas_moon.png'
import sunPic from '/images/canvas_sun.png'
const canvasBoardRef = ref()
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 300,
})
function drawAnimationSolarSystemDemo(ctx: CanvasRenderingContext2D) {
  const sun = new Image()
  const moon = new Image()
  const earth = new Image()

  function draw() {
    // destination-over 在现有的画布内容后面绘制新的图形
    ctx.globalCompositeOperation = 'destination-over'
    // 清空画布
    ctx.clearRect(0, 0, 300, 300)

    ctx.fillStyle = 'rgba(0,0,0,0.4)'
    ctx.strokeStyle = 'rgba(0,153,255,0.4)'
    ctx.save()
    ctx.translate(150, 150)

    // Earth
    // 图片大小24*24
    var time = new Date()
    // 旋转角度，按照一分钟公转一周计算。
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    )
    // 地日距离105
    ctx.translate(105, 0)

    // 绘制矩形阴影，左移12刚好遮住半个地球，宽度24刚好是地球直径
    // 长度50，覆盖月球轨道
    ctx.fillRect(0, -12, 50, 24) // Shadow
    ctx.drawImage(earth, -12, -12)

    // Moon
    // 图片大小7*7
    ctx.save()
    // 公转周期为6秒
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    )
    ctx.translate(0, 28.5)
    ctx.drawImage(moon, -3.5, -3.5)
    ctx.restore()

    ctx.restore()

    // 绘制地球轨道
    ctx.beginPath()
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false)
    ctx.stroke()

    // 绘制太阳背景

    ctx.drawImage(sun, 0, 0, 300, 300)

    window.requestAnimationFrame(draw)
  }
  sun.src = sunPic
  moon.src = moonPic
  earth.src = earthPic
  window.requestAnimationFrame(draw)
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  drawAnimationSolarSystemDemo(ctx)
})
</script>

<style lang="scss"></style>
