<template>
  <div class="g-container">
    <ul>
      <li>Button</li>
      <li>Button</li>
      <li>Button</li>
      <li>Button</li>
      <li>Button</li>
      <li>Button</li>
    </ul>
  </div>
</template>

<style lang="scss">
.g-container {
  position: relative;
  width: 300px;
  margin: auto;
  border: 1px solid #999;
  padding: 5px;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100px;
    background: linear-gradient(90deg, transparent, #fff);
    pointer-events: none;
  }
}

ul {
  width: 300px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  li {
    margin-right: 12px;
    border-radius: 5px;
    border: 1px solid #666;
    padding: 4px;
    cursor: pointer;

    &:hover {
      background: #666;
      color: #fff;
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
