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

<style lang="scss" scoped>
.g-container {
  // position: relative;
  width: 300px;
  margin: auto;
  border: 1px solid #999;
  padding: 5px;
}

ul {
  width: 300px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  width: 300px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  mask: linear-gradient(90deg, #000 70%, transparent);

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
