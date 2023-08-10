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
// import { drawFromPosition } from '../utils/drawUtils'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 900,
  height: 450,
})
const canvasBoardRef = ref()
function drawGrid(
  ctx: CanvasRenderingContext2D,
  options?: {
    gutter: number
  }
) {
  const { gutter = 10 } = options || {}
  ctx.strokeStyle = 'gray'
  // 竖线
  for (let i = 0; i < p.width; i += gutter) {
    ctx.strokeRect(i, 0, 1, p.height)
  }
  // 横线
  for (let i = 0; i < p.height; i += gutter) {
    ctx.strokeRect(0, i, p.width, 1)
  }
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  console.log({ ctx })
  drawGrid(ctx)
})
</script>

<style lang="scss"></style>
