<template>
  <div class="box">
    <div></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box {
  div {
    position: relative;
    width: 10vmin;
    height: 10vmin;
    background: #fff;
    margin: 10vmin auto;
  }

  div::before,
  div::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  div::before {
    transform-origin: 0 50%;
    transform: translate(100%, 0) skewY(45deg) scaleX(0.6);
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), transparent);
    animation: shadowMoveY 5s infinite linear alternate;
  }

  div::after {
    transform-origin: 0 0;
    transform: translate(0%, 100%) skewX(45deg) scaleY(0.6);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3), transparent);
    animation: shadowMoveX 5s infinite linear alternate;
  }
}
@keyframes shadowMoveX {
  to {
    transform: translate(0%, 100%) skewX(50deg) scaleY(0.6);
  }
}

@keyframes shadowMoveY {
  to {
    transform: translate(100%, 0) skewY(40deg) scaleX(0.6);
  }
}
</style>
