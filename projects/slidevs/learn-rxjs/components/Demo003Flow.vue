<template>
  <div>
    <button ref="btn" class="btn-primary">Flow</button>
  </div>
</template>

<script lang="ts" setup>
import { fromEvent, scan, throttleTime } from 'rxjs'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { toast } from '../utils/index'

const btn = ref()

onMounted(() => {
  fromEvent(btn.value, 'click')
    .pipe(
      throttleTime(2000),
      scan((count) => count + 1, 0),
    )
    .subscribe((count) => toast(`Clicked ${count} times`, 500))
})
</script>
<style lang="scss"></style>
