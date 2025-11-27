<!-- components/LazyRenderer.vue -->
<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useSlideContext } from '@slidev/client'
const { $renderContext } = useSlideContext()
const props = defineProps<{ enableInOverview?: boolean }>()
const isOverview = computed(() => $renderContext.value === 'overview')
const canRenderByContext = computed(
  () => !isOverview.value || !!props.enableInOverview,
)

// 定义一个容器引用
const container = ref(null)
// 检测容器是否在视口内可见
const isVisible = useElementVisibility(container)
// 控制 slot 是否渲染的开关
const shouldRender = ref(false)

// 监听可见性变化
watch(isVisible, (visible) => {
  if (visible) {
    // 稍微延迟一下渲染，避免快速滑动时频繁创建
    setTimeout(() => {
      if (isVisible.value) shouldRender.value = true
    }, 200)
  } else {
    // 一旦不可见，立即销毁，释放 Context
    shouldRender.value = false
  }
})
</script>

<template>
  <!-- 这是一个占位容器，始终存在，用于检测可见性 -->
  <div
    ref="container"
    class="lazy-renderer-wrapper"
    style="width: 100%; height: 100%; min-height: 300px"
  >
    <!-- 只有可见时，Slot 里的内容才会被创建 -->
    <slot v-if="shouldRender && canRenderByContext" />

    <!-- 可选：未渲染时显示的占位符/Loading -->
    <div v-else class="placeholder">Waiting for slide...</div>
  </div>
</template>

<style scoped>
.lazy-renderer-wrapper {
  position: relative;
}
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  color: #888;
  height: 100%;
}
</style>
