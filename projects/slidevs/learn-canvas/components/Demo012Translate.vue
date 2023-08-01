<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPostion } from '../utils/drawUtils'
const canvasBoardRef = ref()

function drawTranslateDemo(ctx: CanvasRenderingContext2D) {
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

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  drawTranslateDemo(ctx)
  // drawFromPostion(ctx, drawTranslateDemo, {
  //   startX: 10,
  //   startY: 10,
  // })
})
</script>

<style lang="scss"></style>
