<template>
  <div class="box">
    <div>Long Shadow</div>
    <div class="left">TxT Long Shadow</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@use "sass:color";
@function makelongrightshadow($color) {
  $val: 0px 0px $color;
  @for $i from 1 through 50 {
    $color: color.adjust(color.adjust($color, $saturation: -1%), $alpha: -0.02);
    $val:
      #{$val},
      #{$i}px #{$i}px #{$color};
  }
  @return $val;
}

@function makelongleftshadow($color) {
  $val: 0px 0px $color;
  @for $i from 1 through 50 {
    $color: color.adjust(color.adjust($color, $saturation: -1%), $alpha: -0.02);
    $val:
      #{$val},
      -#{$i}px #{$i}px #{$color};
  }
  @return $val;
}
.box {
  div {
    text-align: center;
    font-size: 5vmin;
    line-height: 15vh;
    text-shadow: makelongrightshadow(hsla(14, 100%, 30%, 1));
    color: hsl(14, 100%, 60%);
  }

  .left {
    text-shadow: makelongleftshadow(hsla(231, 50%, 30%, 1));
    color: hsl(231, 50%, 60%);
  }
}
</style>
