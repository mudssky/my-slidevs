<template>
  <CanvasBoard ref="canvasBoardRef"></CanvasBoard>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawFromPosition } from '../utils/drawUtils'

const canvasBoardRef = ref()
/**
 * 填充规则
 * @param ctx
 */
function drawWindingRuleDemo(ctx: CanvasRenderingContext2D) {
  ctx.beginPath()
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true)
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true)
  // 奇偶规则， 从一个点向任意方向的无穷远绘制一条射线，看和路径的交点数，如果是奇数，则该点在内部。
  ctx.fill('evenodd')

  // 在二维计算机图形学中，非零缠绕规则是确定给定点是否落在封闭曲线内的一种方法。与类似的奇偶规则不同，它依赖于了解曲线每个部分的笔画方向。
  // 如果一个点到封闭图形边界的交点数非零,则该点内部。
  // ctx.fill('nonzero')

  // 总的来说,odd规则能更精确地fill复杂图形,但性能略差;nonzero规则性能略好,但对复杂图形可能填充有问题。你可以根据需要选择使用哪种填充规则。
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!

  drawFromPosition(ctx, drawWindingRuleDemo, {
    startX: 10,
    startY: 10,
  })
})
</script>

<style lang="scss"></style>
