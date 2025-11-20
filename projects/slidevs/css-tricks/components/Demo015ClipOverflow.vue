<template>
  <div class="g-wrap">
    <div class="g-container bg"></div>
    <div class="g-container clip">
      <div
        class="move"
        style="
          position: absolute;
          width: 100px;
          height: 100px;
          background: gray;
        "
      ></div>
    </div>
    <div class="g-container bg2"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const moveElem = document.querySelector<HTMLDivElement>('.move')! //待拖拽元素

  let dragging: boolean //是否激活拖拽状态
  let tLeft: number, tTop: number //鼠标按下时相对于选中元素的位移

  //监听鼠标按下事件
  document.addEventListener('mousedown', function (e) {
    if (e.target == moveElem) {
      dragging = true //激活拖拽状态
      const moveElemRect = moveElem.getBoundingClientRect()
      tLeft = e.clientX - moveElemRect.left //鼠标按下时和选中元素的坐标偏移:x坐标
      tTop = e.clientY - moveElemRect.top //鼠标按下时和选中元素的坐标偏移:y坐标
    }
  })

  //监听鼠标放开事件
  document.addEventListener('mouseup', function (e) {
    dragging = false
  })

  //监听鼠标移动事件
  document.addEventListener('mousemove', function (e) {
    if (dragging) {
      const moveX = e.clientX - tLeft,
        moveY = e.clientY - tTop

      moveElem.style.left = moveX + 'px'
      moveElem.style.top = moveY + 'px'
    }
  })
})
</script>

<style lang="scss" scoped>
.g-wrap {
  width: 30vw;
  height: 200px;
  margin: auto;
  background: #fff;
  display: flex;
  justify-content: space-around;

  .g-container {
    width: 200px;
    height: 200px;
    margin: auto;
    background: #fc0;
    // clip-path: polygon(-1000% 0, 1000% 0, 1000% 100%, -1000% 100%);
    clip-path: polygon(0 0, 1000% 0, 1000% 100%, 0 100%);
  }

  // .clip {
  //     &::before {
  //         content: "";
  //         position: absolute;
  //         top: 0;
  //         bottom: 0;
  //         right: -250%;
  //         left: -250%;
  //         border: 1px dashed #666;
  //     }
  // }

  .bg,
  bg2 {
    margin-top: -40px;
    background: #0f699e;
  }
  .bg2 {
    background: #0f699e;
    margin-top: 40px;
  }
}
</style>
