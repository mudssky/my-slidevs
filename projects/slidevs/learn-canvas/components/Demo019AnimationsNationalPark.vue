<template>
  <div class="inline-block">
    <div class="text-[12px]">Demo018AnimationsClock</div>
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
const canvasBoardRef = ref()
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 900,
  height: 300,
})

function drawLoopPark(ctx: CanvasRenderingContext2D) {
  const img = new Image()

  img.src = nationalParkPic
  // 获取canvas大小
  const CanvasXSize = ctx.canvas.width
  const CanvasYSize = ctx.canvas.height

  // 每帧持续时间 30毫秒
  const speed = 30

  // 防止js精度问题
  const scale = 1.05

  const y = 0

  var dx = 0.75
  let imgW: number
  let imgH: number
  // 计算图片1位移
  var x = 0
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

    return setInterval(draw, speed)
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
      // draw aditional image
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
  // drawTranslateDemo(ctx)
  // drawFromPostion(ctx, drawTransformsDemo, {
  //   startX: 0,
  //   startY: 0,
  // })
  drawLoopPark(ctx)
})
</script>

<style lang="scss"></style>
