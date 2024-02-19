<template>
  <div class="inline-gg">
    <p>
      <a
        >Mollitia nostrum placeat consequatur deserunt velit ducimus possimus
        commodi temporibus debitis quam
      </a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.inline-gg {
  p {
    position: relative;
    width: 400px;
  }
  a {
    background: linear-gradient(90deg, transparent, transparent 70%, #fff);
    background-repeat: no-repeat;
    cursor: pointer;
    color: transparent;

    &::before {
      content: 'Mollitia nostrum placeat consequatur deserunt velit ducimus possimus commodi temporibus debitis quam';
      position: absolute;
      top: 0;
      left: 0;
      color: #000;
      z-index: -1;
    }
  }
}
</style>
