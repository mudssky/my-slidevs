<template>
  <div class="box"></div>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 300px;
  //   height: ;
  aspect-ratio: 1/1;
  background: linear-gradient(180deg, #607d8b, #673ab7), rgba(0, 0, 0, 0.5);
  background-size: 100% 50px;
  background-repeat: no-repeat;
  animation: moveC 10s linear infinite;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 40px;
    right: 0;
    background-repeat: repeat-x;
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      #fff 13px,
      #fff 20px
    );
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 35px;
    right: 0;
    background-repeat: repeat-x;
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      white 12px,
      transparent 13px
    );
  }
}
</style>
