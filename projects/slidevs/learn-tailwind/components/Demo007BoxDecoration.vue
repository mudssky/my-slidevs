<template>
  <div class="box-container">
    <!-- <span
      class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"
    >
      Hello<br />
      World
    </span> -->
    <!-- <span
      class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"
    >
      Hello<br />
      World
    </span> -->
    <div>
      <span
        >ABCD <br />EFG <br />
        HI<br />
        JKLMN</span
      >
    </div>

    <span
      >ABCD <br />EFG <br />
      HI<br />
      JKLMN</span
    >
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.box-container {
  display: flex;
  padding: 20px;
  &:last-child {
    --webkit-box-decoration-break: clone;
  }
  span {
    @apply border-2 border-solid border-black mr-2;
  }
}
</style>
