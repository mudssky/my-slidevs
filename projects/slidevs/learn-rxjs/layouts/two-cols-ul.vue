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
      @apply w-1/3;
    }
  }
}
</style>
