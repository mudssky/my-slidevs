<template>
  <div>
    <button ref="btn" class="btn-primary">Purity</button>
  </div>
</template>

<script lang="ts" setup>
import { fromEvent, scan } from 'rxjs'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { toast } from '../utils/index'

const btn = ref()

onMounted(() => {
  fromEvent(btn.value, 'click')
    .pipe(scan((count) => count + 1, 0))
    .subscribe((count) => toast(`Clicked ${count} times`))
})
</script>
<style lang="scss"></style>
