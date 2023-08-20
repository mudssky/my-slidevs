<template>
  <canvas ref="canvasDom" :width="p.width" :height="p.height" :id="p.id">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
interface Props {
  id?: string
  width?: number
  height?: number
  drawFn?: (ctx: CanvasRenderingContext2D) => void
  title?: string
}
const p = withDefaults(defineProps<Props>(), {
  width: 900,
  height: 450,
  drawFn: undefined,
  title: undefined,
  id: undefined,
})

const canvasDom = ref()

onMounted(() => {
  if (p.drawFn) {
    const ctx = canvasDom.value.getContext('2d')
    p.drawFn(ctx)
  }
})
defineExpose({
  canvasDom,
})
</script>

<style lang="scss" scoped>
canvas {
  border: 1px solid #eee;
}
</style>
