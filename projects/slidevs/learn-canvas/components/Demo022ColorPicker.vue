<template>
  <div class="inline-block">
    <div class="text-[12px]">Demo022ColorPicker</div>
    <div class="flex justify-between space-x-10">
      <div>
        <div>原图片</div>
        <div>
          <CanvasBoard
            ref="canvasBoardRef"
            :width="p.width"
            :height="p.height"
          ></CanvasBoard>
        </div>
      </div>

      <div class="">
        <div>指针下的颜色</div>
        <div
          :style="{ backgroundColor: colorData.hoverRGBAStr }"
          class="h-full w-[200px] flex items-center justify-center text-white"
        >
          {{ colorData.hoverRGBAStr }}
        </div>
      </div>
      <div class="">
        <div>选中的颜色</div>
        <div
          :style="{ backgroundColor: colorData.selectedRGBAStr }"
          class="h-full w-[200px] flex items-center justify-center text-white"
        >
          {{ colorData.selectedRGBAStr }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ColorPicker, DEFAULT_RGBA, getRGBAStr } from '../example/examples'
import rhino from '/images/rhino.jpg'
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
// const colorData = reactive<{
//   hoverRGBA: RGBA
//   selectedRGBA: RGBA
// }>({
//   hoverRGBA: DEFAULT_RGBA,
//   selectedRGBA: DEFAULT_RGBA,
// })

const colorData = reactive<{
  hoverRGBAStr: string
  selectedRGBAStr: string
}>({
  hoverRGBAStr: getRGBAStr(DEFAULT_RGBA),
  selectedRGBAStr: getRGBAStr(DEFAULT_RGBA),
})

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  new ColorPicker(
    ctx,
    rhino,
    (color) => {
      colorData.hoverRGBAStr = getRGBAStr(color)
    },
    (color) => {
      colorData.selectedRGBAStr = getRGBAStr(color)
    }
  )
})
</script>

<style lang="scss"></style>
