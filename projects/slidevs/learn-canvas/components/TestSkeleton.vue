<template>
  <div class="skeleton-dom"></div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
.skeleton-dom {
  height: 400px;
  // width: 200px;
  background-image: url('/images/skeleton.png');
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  @keyframes loading {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(100%);
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3) 10%,
      rgba(255, 255, 255, 0) 40%
    );
    animation: loading 1s infinite;
  }
}
</style>
