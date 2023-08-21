---
title: 变形
level: 1
layout: center
---
# 10.变形 Transformations

---
title: 状态的保存和恢复
level: 2

---
## 状态的保存和恢复

`save()` 保存画布 (canvas) 的所有状态  
`restore()` 恢复上一个保存的状态  
save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

Canvas 状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：

- 当前应用的变形（即移动，旋转和缩放）
- 以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
- 当前的裁切路径（clipping path）

你可以调用任意多次 save方法。每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。

---

下面这个连续矩形的例子，可以帮我们理解canvas状态栈是如何工作的。

<Demo011SaveRestore />

---
title: 移动
level: 2
layout: two-cols
---
## 移动 Translating

`translate(x, y)` translate方法接受两个参数。x是左右偏移量，y 是上下偏移量

![canvas_grid_translate](/images/canvas_grid_translate.png)

::right::

<v-clicks>

<Demo012Translate />

</v-clicks>

---
title: 旋转
level: 2
---
## 旋转 Rotating
以原点为中心旋转 canvas

`rotate(angle)` 这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值。
旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 translate方法。

<v-clicks>

<Demo013Rotate />

</v-clicks>

---
title: 缩放
level: 2
---
## 缩放 Scaling

`scale(x, y)` scale方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小。

画布初始情况下，是以左上角坐标为原点的第一象限。如果参数为负实数，相当于以 x 或 y 轴作为对称轴镜像反转（例如，使用translate(0,canvas.height); scale(1,-1); 以 y 轴作为对称轴镜像反转，就可得到著名的笛卡尔坐标系，左下角为原点）。

<v-clicks>

<Demo014Scale />

</v-clicks>

---
title: Transforms
level: 2
layout: two-cols
---
## 变形 Transforms

`transform(a, b, c, d, e, f)`,这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，如下面的矩阵所示：

$$
\left[\begin{array}{l l l}{a}&{c}&{e}\\ {b}&{d}&{f}\\ {0}&{0}&{1}\end{array}\right]
$$

1. a (m11) 水平方向的缩放
2. b(m12) 竖直方向的倾斜偏移
3. c(m21) 水平方向的倾斜偏移
4. d(m22) 竖直方向的缩放
5. e(dx) 水平方向的移动
6. f(dy) 竖直方向的移动

::right::

`setTransform(a, b, c, d, e, f)` 这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform方法。

`resetTransform()` 重置当前变形为单位矩阵，它和调用以下语句是一样的：`ctx.setTransform(1, 0, 0, 1, 0, 0)`;

<v-clicks>

<Demo015Transforms />

</v-clicks>
