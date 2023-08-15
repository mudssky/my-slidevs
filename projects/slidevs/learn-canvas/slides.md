---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
hideInToc: true
record: dev
---


# canvas 教程

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>
<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
</div>

---
hideInToc: true
---

## 目录

<Toc columns="3" />

---
title: 什么是canvas?
level: 1

---
## 01.什么是canvas？  

canvas元素+相关的api  

Canvas API 提供了一个通过JavaScript 和 HTML的`<canvas>`元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

Canvas API 主要聚焦于 2D 图形。而同样使用`<canvas>`元素的 WebGL API 则用于绘制硬件加速的 2D 和 3D 图形。

兼容性：

<https://caniuse.com/canvas>

---
title: canvas 元素
level: 1
---

## 02.canvas元素  

canvas 的默认大小为`300*150` px,具有width和height属性，用于定义canvas的宽和高。  

canvas标签内可以设置替换内容，不支持canvas的浏览器会显示替换内容(比如IE9之前的浏览器)，支持canvas的浏览器则显示canvas，忽略替换内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content= :width=device-width, initial-scale=1.0">
  <title>认识canvas标签</title>
</head>
<body>
  <canvas :width="300" :height="150">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
</body>
</html>

```

> 可以用css定义大小，绘制时图像会伸缩以适应它的框架尺寸，但是如果css的尺寸和画布大小比例不一致，会出现扭曲变形

---
title: 渲染上下文
level: 1
---

## 03.渲染上下文

```ts
  const canvasDom = <HTMLCanvasElement>document.getElementById('canvas')
  if (canvasDom.getContext) {
    const ctx:CanvasRenderingContext2D = canvasDom.getContext('2d')!
   }

```

getContext 参数的2d是contextType ，有以下几种类型

- 2d，建立一个二维渲染上下文 CanvasRenderingContext2D。
- webgl（或 experimental-webgl）： 创建一个 WebGLRenderingContext 三维渲染上下文对象
- webgl2 ： 创建一个 WebGL2RenderingContext 三维渲染上下文对象
- webgpu 创建一个三维渲染上下文对象 GPUCanvasContext
- bitmaprenderer：创建一个只提供将canvas内容替换为指定ImageBitmap功能的ImageBitmapRenderingContext。

---
title: Hello canvas
level: 1
---

## 04.hello canvas

- moveTo 移动画笔
- lineTo 画线
- fillRect 画矩形
- fillText 在指定区域填充文字

```ts
  // 1. 获取canvas dom对象
  const canvasDom = <HTMLCanvasElement>document.getElementById('canvas')
  // 2、从HTMLCanvasElement获取上下文环境对象context
  const ctx = canvasDom.getContext('2d')!
  // 3. 绘制图形
  ctx.moveTo(80, 55) //左上角为坐标起点0.0
  ctx.lineTo(900, 150)
  ctx.stroke()

  // 绘制矩形
  ctx.fillStyle = 'green'
  ctx.fillRect(50, 250, 400, 100)
  // 绘制文字
  ctx.fillStyle = 'purple'
  ctx.font = '50px Arial'
  ctx.fillText('hello canvas', 200, 400, 400) 

```

---
hideInToc: true
title: hello canvas demo
---

<Demo001HelloCanvas/>

---
title: Vue3 中使用canvas
level: 1
---
## 05.Vue3 中使用canvas

```vue
<template>
  <canvas ref="canvasDom" :width="p.width" :height="p.height">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface Props {
  width?: number
  height?: number
}
const p = withDefaults(defineProps<Props>(), {
  width: 900,
  height: 450,
})
const canvasDom = ref()
defineExpose({
  canvasDom,
})
</script>
<style lang="scss" scoped>
canvas {
  border: 1px solid #eee;
}
</style>
```

---
src: ./pages/01shape.md
---
---
src: ./pages/02color-style.md
---

---
src: ./pages/03text.md
---
---
src: ./pages/04image.md
---

---
src: ./pages/05transformations.md
---

---
hideInToc: true
---

<Demo011Restore/>

---
hideInToc: true
---

<Demo012Translate/>

---
hideInToc: true
---

<Demo013Rotate/>

---
hideInToc: true
---

<Demo014Scale/>

---
hideInToc: true
---

<Demo015Transforms/>

---
hideInToc: true
---

<Demo016Clip/>

---
hideInToc: true
---

<Demo017Animations1/>

---
hideInToc: true
---

<Demo018AnimationsClock/>

---
hideInToc: true
---

<Demo019AnimationsNationalPark/>

---
hideInToc: true
---

<Demo021Compress />
