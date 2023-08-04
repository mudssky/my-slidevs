<template>
  <canvas ref="canvasDom" :width="p.width" :height="p.height">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 900,
  height: 450,
})

const canvasDom = ref()

defineExpose({
  canvasDom,
})
</script>

<style lang="scss" scoped>
canvas {
  border: 1px solid #eee;
  //   border-radius: 8px;
}
</style>
