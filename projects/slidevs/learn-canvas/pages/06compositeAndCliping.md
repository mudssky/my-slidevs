---
title: 组合与裁切
level: 1
layout: center
---
# 11.组合与裁切

---
title: globalCompositeOperation
level: 2

---
## globalCompositeOperation

`globalCompositeOperation = type` 这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串。

默认的情况是 source-over，会在现有画布之上绘制新图形。

[globalCompositeOperation
 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

```js
ctx.globalCompositeOperation = type;
```

<v-clicks>

<Demo016GlobalCompositeOperation />

</v-clicks>

---
title: 裁切路径
level: 2

---
## 裁切路径
裁切路径的作用是遮罩，会隐藏不需要的部分
默认情况下，canvas 有一个与它自身一样大的裁切路径（也就是没有裁切效果）。

`clip()` 将当前正在构建的路径转换为当前的裁剪路径。

<v-clicks>

<Demo016Clip />

</v-clicks>
