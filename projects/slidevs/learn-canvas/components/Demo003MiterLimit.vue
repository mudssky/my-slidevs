<template>
  <div class="inline-block">
    <div class="text-[12px]">MiterLimit 例子</div>
    <div class="flex justify-between w-[300px]">
      <input
        class="input input-bordered input-secondary"
        type="number"
        v-model="miterLimit"
      />
      <button class="btn" @click="handleRePaintClick">重绘</button>
    </div>

    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { drawMiterLimitDemo } from '../example/examples'
import { onMounted } from 'vue'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 200,
})
const canvasBoardRef = ref()
const miterLimit = ref(10)

const handleRePaintClick = () => {
  drawMiterLimitDemo(
    canvasBoardRef.value.canvasDom.getContext('2d'),
    miterLimit.value
  )
}

onMounted(() => {
  drawMiterLimitDemo(
    canvasBoardRef.value.canvasDom.getContext('2d'),
    miterLimit.value
  )
})
</script>

<style lang="scss"></style>
