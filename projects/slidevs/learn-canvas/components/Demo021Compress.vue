<template>
  <input type="file" @change="handleFileChange" />
  <div>1.预览图片</div>
  <div class="img-container">
    <img ref="imgDomRef" alt="1.预览图片" />
  </div>
  <div>2.加载到canvas：</div>
  <CanvasBoard ref="canvasBoardRef" :width="300" :height="150"></CanvasBoard>
  <!-- <div>3.压缩后图片</div>
  <div class="img-container">
    <img ref="imgDomAfterRef" :src="base64ImageUrl" alt="3.压缩后图片：" />
  </div> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { downloadBlob } from '../utils/compress'

const canvasBoardRef = ref()
const imgDomRef = ref()
// const imgDomAfter = ref()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleFileChange(e: any) {
  const file = e.target.files[0]
  console.log({ img: file })
  const imgDom: HTMLImageElement = imgDomRef.value
  // 用img标签预览文件
  const fr = new FileReader()
  fr.readAsDataURL(file)
  fr.onload = () => {
    // base64ImageUrl.value = fr.result as string
    imgDom.src = fr.result as string
    imgDom.onload = function () {
      const compressCanvas: HTMLCanvasElement = canvasBoardRef.value.canvasDom
      compressCanvas.width = imgDomRef.value.width
      compressCanvas.height = imgDomRef.value.height
      const ctx = compressCanvas.getContext('2d')!

      ctx.drawImage(imgDom, 0, 0, imgDom.width, imgDom.height)
      // imgDomAfter.value.src = compressCanvas.toDataURL('image/jpeg', 0.1)
      compressCanvas.toBlob(
        (blob) => {
          // 注意一般只支持jpg格式的压缩，chrome额外支持webp格式的压缩
          // png是不支持压缩的

          // 这里可以把blob上传到后端
          if (blob) {
            downloadBlob(blob, 'compressed.jpeg')
          }

          console.log({ blob })
        },
        file.type,
        0.2
      )
    }
  }
}
</script>

<style lang="scss">
.img-container {
  width: 300px;
  height: 150px;
  margin: 10px 0;
  img {
    width: 300px;
    height: 150px;
    // border: 1px solid red;
    object-fit: cover;
  }
}
</style>
