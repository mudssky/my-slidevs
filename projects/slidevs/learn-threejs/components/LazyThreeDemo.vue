<template>
  <div ref="container" style="width: 100%">
    <component v-if="shouldRender && Comp" :is="Comp" ref="childRef" />
    <slot v-else name="skeleton">
      <div style="width: 100%; height: 400px; background: #f5f5f5"></div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Loader = () => Promise<any>

const props = defineProps<{ loader: Loader; exitDelay?: number }>()

const container = ref<HTMLElement | null>(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Comp = ref<any>(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const childRef = ref<any>(null)
const shouldRender = ref(false)

let observer: IntersectionObserver | null = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let hideTimer: any = null
let loaded = false

const show = async () => {
  if (!loaded) {
    const mod = await props.loader()
    Comp.value = mod.default || mod
    loaded = true
  }
  clearTimeout(hideTimer)
  shouldRender.value = true
}

const hide = () => {
  clearTimeout(hideTimer)
  hideTimer = setTimeout(() => {
    try {
      childRef.value && childRef.value.dispose && childRef.value.dispose()
    } catch (e) {
      console.error(e)
    }
    shouldRender.value = false
  }, props.exitDelay ?? 200)
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry) return
      if (entry.isIntersecting) show()
      else hide()
    },
    { root: null, threshold: 0.01 },
  )
  if (container.value) observer.observe(container.value)
})

onUnmounted(() => {
  observer && observer.disconnect()
  clearTimeout(hideTimer)
  try {
    childRef.value && childRef.value.dispose && childRef.value.dispose()
  } catch (e) {
    console.error(e)
  }
  Comp.value = null
  shouldRender.value = false
})
</script>
