---
title: 使用图片
level: 1
layout: center
---
# 09.使用图片

---
title: 获取需要绘制的图片
level: 2

---

## 获取需要绘制的图片

canvas的API可以使用下面这些类型的一种作为图片的源

**[`HTMLImageElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)**

这些图片是由 `Image()` 函数构造出来的，或者任何的 [`<img>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 元素

**[`HTMLVideoElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLVideoElement)**

用一个 HTML 的 [`<video>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)元素作为你的图片源，可以从视频中抓取当前帧作为一个图像

**[`HTMLCanvasElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)**

可以使用另一个 [`<canvas>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 元素作为你的图片源。

**[`ImageBitmap`](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageBitmap)**

这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其他几种源中生成。

这些源统一由 [`CanvasImageSource`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)类型来引用。

---
title: 绘制图片
level: 2
---

## 绘制图片

一旦获得了源图对象，我们就可以使用 drawImage 方法将它渲染到 canvas 里。drawImage 方法有三种形态，下面是最基础的一种。

`drawImage(image, x, y)` 其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。

下面我们绘制一个外部图像的线图，然后在上面再绘制一条折线。

<v-clicks>

<Demo010DrawImage />

</v-clicks>

---
title: 缩放
level: 2
---

## 缩放
drawImage 方法的又一变种是增加了两个用于控制图像在 canvas 中缩放的参数。
`drawImage(image, x, y, width, height)`
这个方法多了 2 个参数：width 和 height，这两个参数用来控制 当向 canvas 画入时应该缩放的大小

下面是用一张图片缩放后在canvas中平铺的例子

<v-clicks>

<Demo010DrawImageScale />

</v-clicks>

---
title: 切片
level: 2
---

## 切片 Slicing
drawImage 方法的第三个也是最后一个变种有 8 个新参数，用于控制做切片显示的。  

`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)` 第一个参数和其他的是相同的，都是一个图像或者另一个 canvas 的引用。其他8个参数参照下面的图解。

![drawImage slicing](/images/canvas_drawimage.jpg)

---
hideInToc: true
---

<Demo010DrawImageSlice class="inline-block mt-10" />

---
title: 控制图像的缩放行为
level: 2
---

## 控制图像的缩放行为

过度缩放图像可能会导致图像模糊或像素化。您可以通过使用绘图环境的imageSmoothingEnabled属性来控制是否在缩放图像时使用平滑算法。默认值为true，即启用平滑缩放。您也可以像这样禁用此功能：

```js
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;


```
