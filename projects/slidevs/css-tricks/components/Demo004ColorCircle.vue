<template>
  <div class="colors"></div>
</template>

<style lang="scss" scoped>
@use "sass:list";
@use "sass:math";

$colors: ();
$totalStops: 20;

@for $i from 0 through $totalStops {
  $hue: math.div($i * 360deg, $totalStops);
  $colors: list.append($colors, hsl($hue, 100%, 50%), $separator: comma);
}

.colors {
  width: 200px;
  height: 200px;
  background: conic-gradient($colors);
  border-radius: 50%;
}
</style>
