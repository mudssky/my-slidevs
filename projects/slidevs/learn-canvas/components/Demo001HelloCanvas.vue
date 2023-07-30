<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 1. 获取canvas dom对象
  const canvasDom = <HTMLCanvasElement>document.getElementById('canvas')
  // 2、获取上下文环境对象context
  const ctx = canvasDom.getContext('2d')!

  // 3. 绘制图形
  ctx.moveTo(50, 100)
  ctx.lineTo(150, 50)
  ctx.stroke()
})
</script>
