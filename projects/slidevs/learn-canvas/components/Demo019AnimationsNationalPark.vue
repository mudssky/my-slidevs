<template>
  <div class="inline-block">
    <div class="text-[12px]">Demo019AnimationsNationalPark</div>
    <CanvasBoard
      ref="canvasBoardRef"
      :width="p.width"
      :height="p.height"
    ></CanvasBoard>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import nationalParkPic from '/images/national_park.jpg'
import { PanoramaViewDraw } from '../example/examples'
const canvasBoardRef = ref()
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 900,
  height: 300,
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function drawLoopPark(ctx: CanvasRenderingContext2D) {
  const img = new Image()

  img.src = nationalParkPic
  // 获取canvas大小
  const CanvasXSize = ctx.canvas.width
  const CanvasYSize = ctx.canvas.height

  // 每帧持续时间 30毫秒
  const speed = 30
  // 图片y轴位移
  const y = 0

  // 图片每次移动距离
  var dx = 0.75
  // 绘制图片放大倍数
  const scale = 1.0
  // 绘制图片的宽高
  let imgW: number
  let imgH: number
  // 计算图片1位移
  var x = 0

  // 清理图片的大小
  let clearX: number
  let clearY: number

  img.onload = function () {
    // 放大图片进行计算
    imgW = img.width * scale
    imgH = img.height * scale

    if (imgW > CanvasXSize) {
      // 图片宽度大于canvas
      x = CanvasXSize - imgW
    }
    if (imgW > CanvasXSize) {
      // image width larger than canvas
      clearX = imgW
    } else {
      clearX = CanvasXSize
    }
    if (imgH > CanvasYSize) {
      // image height larger than canvas
      clearY = imgH
    } else {
      clearY = CanvasYSize
    }

    setInterval(draw, speed)
  }

  function draw() {
    ctx.clearRect(0, 0, clearX, clearY)

    // if image is <= Canvas Size
    if (imgW <= CanvasXSize) {
      // reset, start from beginning
      if (x > CanvasXSize) {
        x = -imgW + x
      }
      // draw additional image1
      if (x > 0) {
        ctx.drawImage(img, -imgW + x, y, imgW, imgH)
      }
      // draw additional image2
      if (x - imgW > 0) {
        ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH)
      }
    }

    // image is > Canvas Size
    else {
      // reset, start from beginning
      if (x > CanvasXSize) {
        x = CanvasXSize - imgW
      }
      // draw additional image
      if (x > CanvasXSize - imgW) {
        ctx.drawImage(img, x - imgW + 1, y, imgW, imgH)
      }
    }
    // draw image
    ctx.drawImage(img, x, y, imgW, imgH)
    // amount to move
    x += dx
  }
}

onMounted(() => {
  const canvasDom: HTMLCanvasElement = canvasBoardRef.value.canvasDom
  const ctx = canvasDom.getContext('2d')!
  // drawLoopPark(ctx)
  new PanoramaViewDraw({
    ctx,
    imgSrc: nationalParkPic,
    // moveX: 3,
    // speed: 10,
  })
})
</script>

<style lang="scss"></style>
