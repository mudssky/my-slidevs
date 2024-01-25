<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useAttrs } from 'vue'
import { onMounted, getCurrentInstance } from 'vue'

interface Attr {
  tdClass: string
}
const { tdClass } = useAttrs()
onMounted(() => {
  // console.log('slim table mounted')
  // 可以这里设置一个配置项，加载不同的样式，frontMatter中的参数可以通过attrs来获取
  // console.log('attrs', getCurrentInstance()!.attrs)
})
</script>
<style lang="scss">
.slidev-layout {
  table {
    td {
      @apply p-[2px];
    }
  }
}
</style>
