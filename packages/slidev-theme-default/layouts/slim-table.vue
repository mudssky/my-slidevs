<template>
  <div class="slidev-layout default">
    <div :class="layoutClass">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAttrs, ref } from 'vue'
import { onMounted, getCurrentInstance } from 'vue'

const layoutClass = ref('')
// interface Attr {
//   tableSize: string
// }
// const { tableSize } = useAttrs()
type TableSize = 'small' | 'middle' | 'large'
onMounted(() => {
  // console.log('slim table mounted')
  // 可以这里设置一个配置项，加载不同的样式，frontMatter中的参数可以通过attrs来获取
  // console.log('attrs', getCurrentInstance()!.attrs)
  const tableSize =
    (getCurrentInstance()!.attrs.tableSize as TableSize) ?? 'middle'
  switch (tableSize) {
    case 'middle':
      layoutClass.value = 'slim-table-middle'
      break
    case 'small':
      layoutClass.value = 'slim-table-small'
      break
  }
})
</script>
<style lang="scss">
.slim-table-middle {
  table {
    td {
      @apply p-[2px];
    }
  }
}

.slim-table-small {
  table {
    td {
      @apply p-0;
    }
  }
}
</style>
