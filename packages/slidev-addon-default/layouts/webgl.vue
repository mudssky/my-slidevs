<template>
  <div class="slidev-layout webgl-layout">
    <div class="webgl-stage">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
