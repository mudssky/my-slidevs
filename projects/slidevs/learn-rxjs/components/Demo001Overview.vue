<template>
  <div class="space-x-5">
    <button ref="overview1" class="btn-primary">overview1</button>
    <button ref="overview2" class="btn-primary">overview2</button>
  </div>
</template>

<script lang="ts" setup>
import { fromEvent } from 'rxjs'
import { onMounted, ref } from 'vue'

const overview1 = ref()
const overview2 = ref()

onMounted(() => {
  overview1.value.addEventListener('click', () => {
    alert('overview1 clicked')
  })
  // 使用Rxjs的各种方法比如fromEvent可以创建一个observable对象
  fromEvent(overview2.value, 'click').subscribe(() => {
    alert('overview2 clicked')
  })
})
</script>

<style lang="scss"></style>
