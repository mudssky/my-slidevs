<template>
  <div class="inline-block">
    <div class="text-[12px]">Demo018AnimationsClock</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
      :draw-fn="drawClock"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 400,
})
const canvasBoardRef = ref()
function drawClock(ctx: CanvasRenderingContext2D) {
  function clock() {
    const now = new Date()

    ctx.save()
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)
    ctx.scale(0.8, 0.8)
    //逆时针旋转90度，把起点调整到12点
    ctx.rotate(-Math.PI / 2)
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'white'
    ctx.lineWidth = 8
    ctx.lineCap = 'round'

    // 绘制小时标记
    ctx.save()
    for (var i = 0; i < 12; i++) {
      ctx.beginPath()
      ctx.rotate(Math.PI / 6)
      ctx.moveTo(100, 0)
      ctx.lineTo(120, 0)
      ctx.stroke()

      ctx.fillStyle = 'black'
      ctx.font = '20px Fira Sans'
      ctx.fillText(`${i + 1}`, 150, 0, 50)
    }
    ctx.restore()

    // 绘制分钟标记
    ctx.save()
    ctx.lineWidth = 5
    for (i = 0; i < 60; i++) {
      if (i % 5 != 0) {
        ctx.beginPath()
        ctx.moveTo(117, 0)
        ctx.lineTo(120, 0)
        ctx.stroke()
      }
      ctx.rotate(Math.PI / 30)
    }
    ctx.restore()

    var sec = now.getSeconds()
    var min = now.getMinutes()
    var hr = now.getHours()
    hr = hr >= 12 ? hr - 12 : hr

    ctx.fillStyle = 'black'

    // 绘制时针
    ctx.save()
    ctx.rotate(
      hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec
    )
    ctx.lineWidth = 14
    ctx.beginPath()
    ctx.moveTo(-20, 0)
    ctx.lineTo(80, 0)
    ctx.stroke()
    ctx.restore()

    // 绘制分针
    ctx.save()
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
    ctx.lineWidth = 10
    ctx.beginPath()
    ctx.moveTo(-28, 0)
    ctx.lineTo(112, 0)
    ctx.stroke()
    ctx.restore()

    // 绘制秒针
    ctx.save()
    ctx.rotate((sec * Math.PI) / 30)
    ctx.strokeStyle = '#D40000'
    ctx.fillStyle = '#D40000'
    ctx.lineWidth = 6
    ctx.beginPath()
    ctx.moveTo(-30, 0)
    ctx.lineTo(83, 0)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true)
    ctx.stroke()
    ctx.fillStyle = 'rgba(0,0,0,0)'
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.restore()

    ctx.beginPath()
    ctx.lineWidth = 14
    ctx.strokeStyle = '#325FA2'
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true)
    ctx.stroke()

    ctx.restore()

    window.requestAnimationFrame(clock)
  }

  window.requestAnimationFrame(clock)
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  drawClock(ctx)
})
</script>

<style lang="scss"></style>
