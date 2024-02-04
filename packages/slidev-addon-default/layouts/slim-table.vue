<template>
  <div class="slidev-layout default overflow-y-auto">
    <div :class="clsx(layoutClass)">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onMounted, getCurrentInstance } from 'vue'
import clsx from 'clsx'
const layoutClass = ref('')

type TableSize = 'small' | 'middle' | 'large'
onMounted(() => {
  // console.log('slim table mounted')
  // 可以这里设置一个配置项，加载不同的样式，frontMatter中的参数可以通过attrs来获取
  // console.log('attrs', getCurrentInstance()!.attrs)
  const tableSize =
    (getCurrentInstance()!.attrs.tableSize as TableSize) ?? 'middle'

  const tableContainerClass =
    (getCurrentInstance()!.attrs.tableContainerClass as string) ?? ''
  switch (tableSize) {
    case 'middle':
      layoutClass.value = clsx('slim-table-middle', tableContainerClass)
      break
    case 'small':
      layoutClass.value = clsx('slim-table-small', tableContainerClass)
      break
  }
})
</script>
<style lang="scss">
.slim-table-middle {
  table {
    @apply my-5;
    td,
    th {
      @apply p-[2px];
    }
  }
}
.slim-table-small {
  table {
    @apply my-2;
    td,
    th {
      @apply p-0 text-sm;
    }
  }
}
</style>
