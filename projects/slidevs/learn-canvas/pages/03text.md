---
title: 绘制文本
level: 1
layout: center
---
# 08.绘制文本

---
title: 绘制文本
level: 2
---

## 绘制文本
canvas 提供了两种方法来渲染文本：

1. `·fillText(text, x, y [, maxWidth])` 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。
2. `strokeText(text, x, y [, maxWidth])` 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

<v-click>

<Demo009FillText />

</v-click>

<v-click>

<Demo009StrokeText class=" ml-10" />

</v-click>

---
title: 文本样式
level: 2
---

## 文本样式

`font = value` 当前我们用来绘制文本的样式。这个字符串使用和 CSS font 属性相同的语法。默认的字体是 10px sans-serif。
`textAlign = value`  文本对齐选项。可选的值包括：start, end, left, right or center. 默认值是 start。
`textBaseline = value` 基线对齐选项。可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。
`direction = value` 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。

---
title: 预测文本宽度
level: 2
---

## 预测文本宽度

`measureText()` 将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}


```
