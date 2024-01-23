<template>
  <div>
    <button ref="btn" class="btn-primary">Values</button>
  </div>
</template>

<script lang="ts" setup>
import { fromEvent, scan, throttleTime, map } from 'rxjs'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { toast } from '../utils/index'

const btn = ref()

onMounted(() => {
  fromEvent<MouseEvent>(btn.value, 'click')
    .pipe(
      throttleTime(1000),
      map((event) => event.clientX),
      scan((count, clientX) => count + clientX, 0),
    )
    .subscribe((count) => toast(`${count}`, 2000))
})
</script>
<style lang="scss"></style>
