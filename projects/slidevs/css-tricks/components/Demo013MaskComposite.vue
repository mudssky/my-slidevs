<template>
  <div class="box">
    <div>1</div>
    <div class="mask">2</div>
    <div class="mask mask2">3</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  color: red;
  div {
    width: 200px;
    height: 200px;
    margin: auto;
    background: radial-gradient(
        circle at 0 0,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 200px,
        transparent 200px
      ),
      radial-gradient(
        circle at 100% 0,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 200px,
        transparent 200px
      ),
      radial-gradient(
        circle at 0 100%,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 200px,
        transparent 200px
      ),
      radial-gradient(
        circle at 100% 100%,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5) 200px,
        transparent 200px
      );
    // mask: radial-gradient(transparent, transparent 50px, #000 50px, #000), linear-gradient(#000 0%, #000 100%);
    // mask-composite: exclude;
  }

  .mask {
    background: #000;
    mask: radial-gradient(circle at 0 0, #000, #000 200px, transparent 200px),
      radial-gradient(circle at 100% 0, #000, #000 200px, transparent 200px),
      radial-gradient(circle at 0 100%, #000, #000 200px, transparent 200px),
      radial-gradient(circle at 100% 100%, #000, #000 200px, transparent 200px);
    -webkit-mask-composite: destination-in;
    mask-composite: destination-in;
  }

  .mask2 {
    mask-composite: xor;
    -webkit-mask-composite: xor;
  }
}
</style>
