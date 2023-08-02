<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import earthPic from '../assets/images/canvas_earth.png'
import moonPic from '../assets/images/canvas_moon.png'
import sunPic from '../assets/images/canvas_sun.png'
const canvasBoardRef = ref()

function drawTransformsDemo(ctx: CanvasRenderingContext2D) {
  const sun = new Image()
  const moon = new Image()
  const earth = new Image()

  function draw() {
    ctx.globalCompositeOperation = 'destination-over'
    ctx.clearRect(0, 0, 300, 300) // clear canvas

    ctx.fillStyle = 'rgba(0,0,0,0.4)'
    ctx.strokeStyle = 'rgba(0,153,255,0.4)'
    ctx.save()
    ctx.translate(150, 150)

    // Earth
    var time = new Date()
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    )
    ctx.translate(105, 0)
    ctx.fillRect(0, -12, 50, 24) // Shadow
    ctx.drawImage(earth, -12, -12)

    // Moon
    ctx.save()
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    )
    ctx.translate(0, 28.5)
    ctx.drawImage(moon, -3.5, -3.5)
    ctx.restore()

    ctx.restore()

    ctx.beginPath()
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false) // Earth orbit
    ctx.stroke()

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
  // drawTranslateDemo(ctx)
  // drawFromPostion(ctx, drawTransformsDemo, {
  //   startX: 0,
  //   startY: 0,
  // })
  drawTransformsDemo(ctx)
})
</script>

<style lang="scss"></style>
