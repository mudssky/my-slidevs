<template>
  <CanvasBoard
    ref="canvasBoardRef"
    :width="p.width"
    :height="p.height"
  ></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import canvas_backdrop from '/images/canvas_backdrop.png'
const canvasBoardRef = ref()
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 200,
})

function drawImageDemo(ctx: CanvasRenderingContext2D) {
  const img = new Image()
  img.onload = function () {
    ctx.drawImage(img, 0, 0)
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.moveTo(40, 96)
    ctx.lineTo(70, 66)
    ctx.lineTo(103, 76)
    ctx.lineTo(170, 15)
    ctx.stroke()
  }
  img.src = canvas_backdrop
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!

  drawImageDemo(ctx)
})
</script>

<style lang="scss"></style>
