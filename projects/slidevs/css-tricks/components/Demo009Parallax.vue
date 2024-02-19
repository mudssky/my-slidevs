<template>
  <div class="box">
    <section class="g-img1">区域1</section>
    <section class="g-img2">区域2</section>
    <section class="g-img3">区域3</section>
  </div>
</template>
<!-- 这个视差滚动似乎只能用于全屏的页面，因为 background-attachment: fixed的效果是相对于视口固定-->

<style lang="scss" scoped>
$img1: 'https://picsum.photos/1200/1000?random=1';

$img2: 'https://picsum.photos/1200/1000?random=5';

$img3: 'https://picsum.photos/1200/1000?random=10';

.box {
  height: 400px;
  overflow-y: scroll;
  section {
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    line-height: 200px;
    text-align: center;
    font-size: 20vh;
    box-sizing: border-box;
    border: 5px solid #fff;
  }
  .g-img1 {
    background-image: url($img1);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }

  .g-img2 {
    background-image: url($img2);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }

  .g-img3 {
    background-image: url($img3);
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }
}
</style>
