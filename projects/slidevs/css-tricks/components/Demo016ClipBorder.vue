<template>
  <div class="box"></div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 200px;
  aspect-ratio: 1/1;
  background-color: aqua;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid gold;
    animation: clippath 3s infinite linear;
  }
}

@keyframes clippath {
  0%,
  100% {
    clip-path: inset(0 0 95% 0);
  }
  25% {
    clip-path: inset(0 95% 0 0);
  }
  50% {
    clip-path: inset(95% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 95%);
  }
}
</style>
