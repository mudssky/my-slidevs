<template>
  <canvas ref="canvasDom" width="900" height="450"></canvas>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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
