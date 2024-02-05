<template>
  <div class="box-container">
    <div class="box-border">box-border</div>
    <div class="box-content">box-content</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box-container {
  columns: 2;
  > div {
    @apply h-32 w-32 p-2 border-8 border-red-400 bg-slate-200;
  }
}
</style>
