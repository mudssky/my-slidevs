<template>
  <div class="slidev-layout webgl-layout">
    <div class="webgl-stage">
      <LazyRender
        v-if="props.lazy"
        :enable-in-overview="props.enableInOverview"
      >
        <slot />
      </LazyRender>
      <slot v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import LazyRender from '../components/LazyRender.vue'
const props = withDefaults(
  defineProps<{ lazy?: boolean; enableInOverview?: boolean }>(),
  { lazy: true, enableInOverview: false },
)
</script>

<style scoped>
.webgl-layout {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.webgl-stage {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.webgl-stage canvas {
  display: block;
}
</style>
