<template>
  <div>
    <div class="flex space-x-5">
      <CanvasBoard id="canvas1" :width="300" :height="200"></CanvasBoard>
      <CanvasBoard id="canvas2" :width="300" :height="200"></CanvasBoard>
    </div>
    <div class="space-x-2">
      <label for="">imageSmoothingEnabled</label>

      <input type="checkbox" v-model="imageSmoothingEnabledRef" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { ImageSmoothingEnableDemo } from '../example/examples'
import rhino from '/images/rhino.jpg'
import { onMounted, ref } from 'vue'

const imageSmoothingEnabledRef = ref(true)
let demo: ImageSmoothingEnableDemo
onMounted(() => {
  demo = new ImageSmoothingEnableDemo('#canvas1', '#canvas2', rhino)
})
watch(imageSmoothingEnabledRef, (val) => {
  demo.toggleImageSmoothing(val)
})
</script>

<style lang="scss"></style>
