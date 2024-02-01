<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
<style lang="scss">
.slidev-layout {
  ul {
    @apply flex flex-wrap;
    li {
      @apply min-w-3/12 px-1;
    }
  }
}
</style>
