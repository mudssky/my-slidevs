<template>
  <div>
    <div class="text-[12px]">三次贝塞尔曲线 心形</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
      :draw-fn="drawCurve2"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
// import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawCurve2 } from '../example/examples'
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
