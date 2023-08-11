<template>
  <div>
    <div class="text-[12px]">Path2D例子</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
      :draw-fn="drawPath2DSvg"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
// import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawPath2DSvg } from '../example/examples'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 150,
})
const canvasBoardRef = ref()
</script>

<style lang="scss"></style>
