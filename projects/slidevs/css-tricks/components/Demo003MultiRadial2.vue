<template>
  <div class="box">
    <p class="flow-wave">Hover Me</p>
  </div>
</template>

<style lang="scss" scoped>
.flow-wave {
  background:
    radial-gradient(
        circle at 10px -7px,
        transparent 8px,
        currentColor 8px,
        currentColor 9px,
        transparent 9px
      )
      repeat-x,
    radial-gradient(
        circle at 10px 27px,
        transparent 8px,
        currentColor 8px,
        currentColor 9px,
        transparent 9px
      )
      repeat-x;
  background-size: 20px 20px;
  background-position:
    -10px calc(100% + 16px),
    0 calc(100% - 4px);
}
.flow-wave:hover {
  animation: waveFlow 1s infinite linear;
}
@keyframes waveFlow {
  from {
    background-position-x: -10px, 0;
  }
  to {
    background-position-x:
      -30px,
      -20px;
  }
}
</style>
