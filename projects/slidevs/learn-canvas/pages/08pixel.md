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

```js
ctx.putImageData(myImageData, dx, dy);

```

下面这个例子里面，我们遍历所有像素以改变他们的数值，然后我们将被修改的像素数组通过putImageData() 放回到画布中去。

<Demo023PutImage/>

---
## 缩放和反锯齿

<Link to="37">缩放和切片的方法</Link>在之前drawImage的章节提到过

反锯齿默认是开启的，是这个属性imageSmoothingEnabled

关闭以后我们就能看到清楚的像素

<Demo023imageSmoothingEnabled/>

---
## 保存图片

`HTMLCanvasElement.toDataURL()`

- 如果画布的高度或宽度是 0，那么会返回字符串“`data:,”`。
- 如果传入的类型非“`image/png`”，但是返回的值以“`data:image/png`”开头，那么该传入的类型是不支持的。
- Chrome 支持“`image/webp`”类型。

```js
canvas.toDataURL(type, encoderOptions);
```

`type` 可选

图片格式，默认为 `image/png`

`encoderOptions` 可选

在指定图片格式为 `image/jpeg` 或 `image/webp` 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 `0.92`。其他参数会被忽略。返回值是包含dataURI的domstring
> 也就是说只有jpeg和 webp（chrome）支持质量选择

---

`HTMLCanvasElement.toBlob()`

**`HTMLCanvasElement.toBlob()`** 方法创造 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地（由用户代理自行决定）。

可以在调用时指定所需的文件格式和图像质量，若未指定文件格式（或不支持指定的文件格式），则默认导出 `image/png` 类型。浏览器需要支持 `image/png`，大多数浏览器还支持额外的图片格式，包括 `image/jpeg` 和 `image/webp`。
对于支持以指定分辨率编码的图片格式，如不特别指明，图片的默认分辨率为 96dpi。

```js
toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)

```

---
## 压缩图片的例子

<Demo021Compress/>

---

## 网页截图

html2canvas 这个库是把dom元素在canvas上绘制
<https://github.com/niklasvh/html2canvas>

```js

html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});

```

之后我们使用`canvas.toBlob`之类保存图片的api下载到本地

还有另一个保存图片的库 https://github.com/bubkoo/html-to-image
