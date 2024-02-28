<template>
  <div class="box space-x-2">
    <div>浮雕阴影</div>
    <div>浮雕阴影</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box {
  background: #e9ecef;
  display: flex;
  padding: 10px;
  div {
    transition: 0.2s all;
    width: 120px;
    height: 120px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    background: #e9ecef;
    color: #333;
    box-shadow:
      7px 7px 12px rgba(0, 0, 0, 0.4),
      -7px -7px 12px rgba(255, 255, 255, 0.9);
    &:active {
      box-shadow:
        0 0 0 rgba(0, 0, 0, 0.4),
        0 0 0 rgba(255, 255, 255, 0.9),
        inset -7px -7px 12px rgba(255, 255, 255, 0.9),
        inset 7px 7px 12px rgba(0, 0, 0, 0.4);
    }
  }

  div:nth-child(2) {
    box-shadow:
      inset -7px -7px 12px rgba(255, 255, 255, 0.9),
      inset 7px 7px 12px rgba(0, 0, 0, 0.4);
  }
}
</style>
