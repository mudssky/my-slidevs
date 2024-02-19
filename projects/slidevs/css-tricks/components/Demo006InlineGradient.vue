<template>
  <div class="flex space-x-2xl inline-gg">
    <div class="clip-box7">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
        incidunt ut illo, ratione aut reprehenderit facilis mollitia saepe
        ducimus libero hic reiciendis deserunt optio veniam ullam. Beatae, non
        quae.
      </p>
    </div>

    <div class="clip-box8">
      <a
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
        incidunt ut illo, ratione aut reprehenderit facilis mollitia saepe
        ducimus libero hic reiciendis deserunt optio veniam ullam. Beatae, non
        quae.</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inline-gg {
  div {
    width: 400px;

    p,
    a {
      // color: #000;
      color: orange;
      background: linear-gradient(90deg, blue, green);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      transition: all 1s linear;
    }

    p:hover,
    a:hover {
      background-size: 0 100%;
    }
  }
}
</style>
