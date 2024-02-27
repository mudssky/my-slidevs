<template>
  <div class="box">
    <div data-text="Text Crack">
      <span>Text Crack</span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@keyframes crack2 {
  0%,
  95% {
    transform: translate(-50%, -50%);
  }

  100% {
    transform: translate(-45%, -55%);
  }
}
.box {
  div {
    position: relative;
    animation: shake 2.5s linear forwards;
  }

  div span {
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
  }

  div::before,
  div::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
  }

  div::before {
    animation: crack1 2.5s linear forwards;
    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
  }

  div::after {
    animation: crack2 2.5s linear forwards;
    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
  }
}

@keyframes crack1 {
  0%,
  95% {
    transform: translate(-50%, -50%);
  }

  100% {
    transform: translate(-55%, -45%);
  }
}
</style>
