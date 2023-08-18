---
title: 像素操作
level: 1
layout: center
---
# 13.像素操作

---
title: ImageData 对象
level: 2
hideInToc: true
---
## ImageData 对象
ImageData对象中存储着 canvas 对象真实的像素数据，它包含以下几个只读属性：

`width` 图片宽度，单位是像素  
`height` 图片高度，单位是像素  
`data` Uint8ClampedArray 类型的一维数组，包含着 RGBA 格式的整型数据，范围在 0 至 255 之间（包括 255）。  

data 属性返回一个 Uint8ClampedArray，它可以被使用作为查看初始像素数据。每个像素用 4 个 1bytes 值 (按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。每个颜色值部份用 0 至 255 来代表。每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引 0 位置。像素从左到右被处理，然后往下，遍历整个数组。

Uint8ClampedArray 包含 height × width × 4 字节数据，索引值从 0 到 (height× width × 4)-1
例如，要读取图片中位于第 50 行，第 200 列的像素的蓝色部份，你会写以下代码：

```js
blueComponent = imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 2];
```

根据行、列读取某像素点的 R/G/B/A 值的公式：

```js
imageData.data[((50 * (imageData.width * 4)) + (200 * 4)) + 0/1/2/3];
```

---
hideInToc: true
---

## 创建一个ImageData对象
`CanvasRenderingContext2D.createImageData()`
有两个版本
下面这个版本创建特定尺寸的ImageData对象，所有像素都被预设为透明黑

```js
const myImageData = ctx.createImageData(width, height);
```

可以从另一个ImageData对象创建一个相同尺寸的ImageData对象（不会复制图片数据，默认是透明黑）

```js
const myImageData = ctx.createImageData(anotherImageData);
```

---

## 从canvas获取ImageData
为了获得一个包含画布场景像素数据的 ImageData 对象，你可以用 getImageData() 方法：
left top 是区域起点坐标，从这个点开始绘制一个宽width高height的矩形就是getImageData获取的区域数据

```js
const myImageData = ctx.getImageData(left, top, width, height);

```

<Demo022ColorPicker />

---

## 写入像素数据

`putImageData()`可以实现像素数据的写入
