<template>
  <div class="box-container">
    <div class="box1">box1</div>
    <div class="box2">box2</div>
    <div class="box3">box3</div>
    <!-- <div class="box4">box4</div> -->
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box-container {
  padding: 20px;
  //   columns: 2;
  column-count: 2;
  gap: 2px;
  > div {
    background-color: #ffa940;
    text-align: center;
  }
}
</style>
