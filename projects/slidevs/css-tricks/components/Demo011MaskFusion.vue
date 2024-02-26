<template>
  <div class="box"></div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box {
  margin: auto;
  position: relative;
  width: 300px;
  height: 500px;
  background: url(https://picsum.photos/300/500?random=99) no-repeat;
  background-size: cover;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(https://picsum.photos/300/500?random=100) no-repeat;
    background-size: cover;
    // mask: linear-gradient(45deg, #000 50%, transparent 50%);
    mask: linear-gradient(45deg, #000 40%, transparent 60%);
    z-index: 1;
  }
}
</style>
