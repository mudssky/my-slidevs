<template>
  <div class="box-container">
    <div class="box1">auto</div>
    <div class="box2">1/1</div>
    <div class="box3">16/9</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box-container {
  padding: 20px;

  > div {
    display: inline-block;
    margin-right: 20px;
    background-color: #ffa940;
    text-align: center;
  }
  .box1 {
    width: 200px;
    // @apply aspect-auto;
    aspect-ratio: auto;
  }
  .box2 {
    width: 200px;
    // @apply aspect-square;
    aspect-ratio: 1/1;
  }
  .box3 {
    width: 200px;
    // @apply aspect-video;
    aspect-ratio: 16/9;
  }
}
</style>
