<template>
  <div>
    <div class="text-[12px]">二次贝塞尔曲线 对话气泡</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
      :draw-fn="drawCurve1"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
// import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawCurve1 } from '../example/examples'
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
