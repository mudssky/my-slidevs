<template>
  <div class="g-outer">
    <div class="g-inner"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@keyframes maskChange {
  0% {
    mask-position: -100% 0;
  }
  100% {
    mask-position: 0 0;
  }
}

.g-outer {
  width: 400px;
  aspect-ratio: 2/1;
  background-image: url(/assets/mask1.png);
  background-repeat: no-repeat;
  .g-inner {
    width: 100%;
    height: 100%;
    background: url(/assets/mask2.png);
    mask: linear-gradient(
      90deg,
      #fff 0%,
      #fff 50%,
      transparent 50%,
      transparent 100%
    );
    mask-size: 200% 100%;
    animation: maskChange 2s infinite alternate linear;
  }
}
</style>
