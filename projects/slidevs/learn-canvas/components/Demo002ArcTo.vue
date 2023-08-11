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
import { drawArcTo } from '../example/examples'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 200,
})
const canvasBoardRef = ref()

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  drawArcTo(ctx)
})
</script>

<style lang="scss"></style>
