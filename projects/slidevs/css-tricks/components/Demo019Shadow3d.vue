<template>
  <div class="box">
    <div class="g-left"></div>
    <div class="g-both"></div>
    <div class="g-slide"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box {
  div {
    position: relative;
    width: 600px;
    height: 100px;
    margin: 1vmin auto 3vmin;
    background: hsl(48, 100%, 50%);
    border-radius: 20px;
    box-shadow: 0 0 5px 2px hsl(48, 100%, 45%);
  }

  .g-left::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    bottom: 0;
    border-radius: 10px;
    background: hsl(48, 100%, 20%);
    transform: translate(0, -15%) rotate(-4deg);
    transform-origin: center center;
    box-shadow: 0 0 20px 15px hsl(48, 100%, 20%);
    z-index: -1;
  }

  .g-both {
    background: hsl(199, 98%, 48%);
    box-shadow: 0 0 5px 2px hsl(199, 98%, 40%);
  }

  .g-both::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    bottom: 15%;
    border-radius: 10px;
    background: hsl(199, 98%, 20%);
    transform: translate(0, -20%) rotate(-4deg);
    transform-origin: center center;
    box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
    z-index: -1;
  }

  .g-both::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    bottom: 15%;
    border-radius: 10px;
    background: hsl(199, 98%, 20%);
    transform: translate(0, -20%) rotate(4deg);
    transform-origin: center center;
    box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
    z-index: -1;
  }

  .g-slide {
    background: hsl(150, 62%, 52%);
    box-shadow: 0 0 5px 2px hsl(150, 62%, 40%);
  }

  .g-slide::before {
    content: '';
    position: absolute;
    top: 15%;
    bottom: 20%;
    left: 90%;
    right: 5%;
    border-radius: 10px;
    background: hsl(150, 62%, 20%);
    transform: translate(105%, 10%) rotate(15deg);
    transform-origin: center center;
    box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
    z-index: -1;
  }

  .g-slide::after {
    content: '';
    position: absolute;
    top: 15%;
    bottom: 20%;
    left: 5%;
    right: 90%;
    border-radius: 10px;
    background: hsl(150, 62%, 20%);
    transform: translate(-105%, 10%) rotate(-15deg);
    transform-origin: center center;
    box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
    z-index: -1;
  }
}
</style>
