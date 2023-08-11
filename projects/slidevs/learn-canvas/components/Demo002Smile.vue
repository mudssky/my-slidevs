<template>
  <CanvasBoard
    ref="canvasBoardRef"
    :width="p.width"
    :height="p.height"
    :draw-fn="drawSmile"
  ></CanvasBoard>
</template>

<script lang="ts" setup>
// import { onMounted } from 'vue'
import { ref } from 'vue'
import { drawSmile } from '../example/examples'
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
