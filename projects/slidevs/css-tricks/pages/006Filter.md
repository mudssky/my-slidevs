---
title: Filter
level: 1
layout: scroll
---

## Filter

在 CSS 中，滤镜的使用方式主要会分为 3 种：

1. 通过 CSS 的 filter 属性，使用滤镜；
2. 通过 CSS 的 backdrop-filter 属性，使用滤镜；
3. 通过 CSS filter 属性中的 url() 值，引入由 SVG 实现的特殊滤镜效果。

下面是滤镜的语法

```css
{
    // 模糊滤镜
    filter: blur(5px);
    // 明亮度滤镜
    filter: brightness(0.4);
    // 对比度滤镜
    filter: contrast(200%);
    // 阴影滤镜
    filter: drop-shadow(16px 16px 20px blue);
    // 灰度滤镜
    filter: grayscale(50%);
    // 色相旋转滤镜
    filter: hue-rotate(90deg);
    // 反转滤镜
    filter: invert(75%);
    // 不透明度滤镜
    filter: opacity(25%);
    // 饱和度滤镜
    filter: saturate(30%);
    // 褐色滤镜
    filter: sepia(60%);

    /* 滤镜可以叠加 */
    filter: contrast(175%) brightness(3%);
}

```

---

### 可以给同个元素同时定义多个相同（或者不同）的滤镜

和之前的阴影叠加是类似的

---

### 模糊滤镜blur

下面是模糊滤镜的效果

<div class="blur1"></div>

<style>
.blur1{
  width: 200px;
    height: 200px;
    background: #000;
  filter: blur(5px);
}
</style>

---

#### 实现毛玻璃效果

这里要用到`backdrop-filter:blur()` 这个滤镜会为元素后方的区域添加模糊，颜色偏移等滤镜效果

因为它的生效范围是元素背后的所有内容，因此，为了能够看到效果，元素或其背景至少要保持部分透明。

backdrop-filter 与 filter 非常类似，可以取的值都是一样的，但是一个是作用于整个元素，一个是只作用于元素后面的区域。

下面可以对比两种滤镜的效果，最后一个就是我们想要的毛玻璃效果。

<div class="bg-box flex space-x-2">
  <div>Normal</div>
  <div class="g-filter">filter</div>
  <div class="g-backdrop-filter">backdrop-filter</div>
</div>

<style>
.bg-box {
    background: url(/assets/dust-mountain.webp);
  background-size: contain;
    .g-filter {
        filter: blur(6px);
    }
    .g-backdrop-filter {
        backdrop-filter: blur(6px);
    }
 div {
 width: 300px;
 height: 200px;
 background: rgba(255, 255, 255, .7);
 /* background: rgba(0, 0, 0, .7); */
}
}

</style>
