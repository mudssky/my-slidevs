<template>
  <div class="container h-[200px] bg-red-200">
    设置了不同响应式节点的宽度，
    最小的情况，宽度是100%，其余使用媒体查询，对应的节点，设置对应的最大宽度。
    <br />
    一系列查询按照顺序排列，这样随着容器增大，max-width会达到特定的宽度
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
