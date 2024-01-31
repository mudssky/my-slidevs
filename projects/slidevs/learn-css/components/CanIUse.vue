<template>
  <button class="btn-primary" @click="openCanIUseDialog">
    {{ p.buttonText ?? '查看CanIUse' }}
  </button>
  <dialog
    ref="dialogDomRef"
    class="w-11/12 h-full border-none"
    @click="handleDialogClick"
  >
    <div class="w-full h-full rounded-lg p-3 overflow-hidden">
      <div class="flex justify-end">
        <button @click="closeCanIUseDialog">x</button>
      </div>
      <iframe :src="p.src" class="w-full h-full" frameborder="0"></iframe>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'

interface Props {
  src: string
  buttonText: string
}
const p = defineProps<Props>()

const dialogDomRef = ref()

const openCanIUseDialog = () => {
  dialogDomRef.value.showModal()
}

const closeCanIUseDialog = () => {
  dialogDomRef.value.close()
}
// 点击蒙层，关闭弹窗
const handleDialogClick = (e: any) => {
  if (e.target.tagName.toLowerCase() == 'dialog') {
    closeCanIUseDialog()
  }
}
onMounted(() => {
  console.log('attrs', getCurrentInstance()?.attrs)
})

// ifram会有一个报错，总之好像是iframe的问题，无法解决，只能让他报错了。
// Blocked autofocusing on a <input> element in a cross-origin subframe.
</script>

<style lang="scss">
// 尝试添加过渡动画
// 因为加动画指挥看起来很卡，反应很慢。所以还是取消。
// dialog:not([open]) {
//   opacity: 0;
//   visibility: hidden;
//   display: block;
// }

// dialog {
//   opacity: 1;
//   transition: opacity 1s ease;
// }
</style>
