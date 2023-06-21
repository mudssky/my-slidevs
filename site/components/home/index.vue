<template>
  <div class="container">
    <el-row> 已有的slidevs列表 </el-row>
    <li v-for="item in slidevUrlList" :key="item.url">
      <a
        :href="item.url"
        target="_blank"
        class="text-blue-600 text-[25px] cursor-pointer"
        >{{ item.name }}</a
      >
    </li>
  </div>
</template>

<script lang="ts" setup>
import slidevUrlList from '../../slidevs.json'
// console.log({ slidevUrlList })
// const slidevUrlList = [1, 2]
</script>

<script lang="ts">
export default {
  name: 'HomeContent',
}
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
</style>
