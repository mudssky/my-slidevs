<template>
  <div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
    ></CanvasBoard>
    <div class="space-x-5">
      <label v-for="item in colorCovertTypeList" :key="item">
        <input type="radio" :value="item" v-model="selectedRef" />{{ item }}
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  ImageCovert,
  colorCovertTypeList,
  ColorCovertTypeEnum,
} from '../example/examples'
import rhino from '/images/rhino.jpg'
import { onMounted } from 'vue'
import { watch } from 'vue'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 300,
  height: 200,
})
const canvasBoardRef = ref()
const selectedRef = ref<ColorCovertTypeEnum>(ColorCovertTypeEnum.original)

let imgConverter: ImageCovert
onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  imgConverter = new ImageCovert(ctx, rhino)
})
watch(selectedRef, (val) => {
  // console.log({ val })
  imgConverter.convert(val)
})
</script>

<style lang="scss"></style>
