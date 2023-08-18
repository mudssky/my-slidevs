<template>
  <div class="inline-block">
    <div class="text-[12px]">Demo020Ball</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { BallDemo } from '../example/examples'
const canvasBoardRef = ref()
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 900,
  height: 300,
})

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  // drawLoopPark(ctx)
  new BallDemo(ctx)
})
</script>

<style lang="scss"></style>
