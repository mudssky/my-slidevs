<template>
  <div class="colors"></div>
</template>

<style lang="scss" scoped>
$colors: ();
$totalStops: 20;

@for $i from 0 through $totalStops {
  $colors: append(
    $colors,
    hsl(calc($i * 360deg / $totalStops), 100%, 50%),
    comma
  );
}

.colors {
  width: 200px;
  height: 200px;
  background: conic-gradient($colors);
  border-radius: 50%;
}
</style>
