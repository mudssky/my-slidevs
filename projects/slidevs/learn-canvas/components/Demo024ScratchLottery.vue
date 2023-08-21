<template>
  <div>
    <div
      :style="{
        width: p.width + 'px',
        height: p.height + 'px',
        position: 'absolute',
        zIndex: -1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }"
    >
      恭喜您获得100w
    </div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
      id="scratchLottery"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ScratchLotteryDemo } from '../example/examples'
import { onMounted } from 'vue'

interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 200,
})
const canvasBoardRef = ref()

onMounted(() => {
  new ScratchLotteryDemo('#scratchLottery')
})
</script>

<style lang="scss"></style>
