---
title: 绘制形状
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---
## 06.绘制形状

### 栅格

canvas绘制的原点（0,0）是左上角  

![栅格](/images/canvas_default_grid.png)

---
title: 绘制矩形
level: 2
---

### 绘制矩形
canvas 提供了三个方法绘制矩形：

1. `fillRect(x, y, width, height)`   绘制一个填充的矩形
2. `strokeRect(x, y, width, height)`  绘制一个矩形的边框
3. `clearRect(x, y, width, height)`  清除指定矩形区域，让清除部分完全透明
4. `rect(x, y, width, height)` 绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。当该方法执行的时候，moveTo() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。(这个绘制是添加到<Link to="12" >路径</Link>中的)

<v-click>

<Demo002Rect1 width="200" height="200"/>

</v-click>

---
title: 绘制路径
level: 2
---
### 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。

使用路径绘制的步骤

1. 首先，你需要创建路径起始点。  `beginPath()`
2. 然后你使用画图命令去画出路径。
3. 之后你把路径封闭。 `closePath()`
4. 一旦路径生成，你就能通过描边（`stroke`）或填充路径区域(`fill`)来渲染图形。

`lineTo(x, y)` 绘制一条从当前位置到指定 x 以及 y 位置的直线。

<v-click>

<Demo002PathTriangle  width="200" height="100" />

</v-click>
<!-- <script setup lang="ts">
import {drawTriangle} from './example/examples'
</script>
<CanvasBoard width="200" height="200" :drawFn="drawTriangle"/> 
-->

---

### 圆弧

`moveTo(x, y)` 将笔触移动到指定的坐标 x 以及 y 上，实际上不画任何东西.

`arc(x, y, radius, startAngle, endAngle, anticlockwise)` 画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，anticlockwise是可选的Boolean值，如果为 true，逆时针绘制圆弧，反之，顺时针绘制。默认是顺时针

`arcTo(x1, y1, x2, y2, radius)`  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。(起点和2个控制点组成圆的两条切线)

<!-- `ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)` 椭圆绘制还是略了 -->

<v-click>

<Demo002Smile class="inline-block"/>

</v-click>

<v-click>

<Demo002ArcTo class="inline-block ml-10" />

</v-click>

---

### 贝塞尔曲线
[贝塞尔曲线](https://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A) 可以用来绘制复杂有规律的图形。

`quadraticCurveTo(cp1x, cp1y, x, y)` 绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。

`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)` 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。  

[二次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)  
[三次贝塞尔曲线 示例](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html)

<v-click>

<Demo002QuadraticCurveTo class="inline-block ml-10" />

</v-click>

<v-click>

<Demo002BezierCurveTo class="inline-block ml-5" />

</v-click>

---
title: Path2D 对象
level: 2
layout: two-cols
---
## Path2D 对象

> 这是一个实验性技术，使用前先 [查看兼容性](https://caniuse.com/?search=Path2D)

之前的例子中，我们使用一系列的路径和绘画命令来把对象“画”在画布上。
使用Path2D对象，可以提高性能（提前定义完整路径然后一次性绘制）和复用性

`Path2D()` 会返回一个新初始化的 Path2D 对象

```js
new Path2D();
new Path2D(path);//创建一个路径的拷贝
new Path2D(d);// 传入svg path
```

<v-click>

```js
  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  const circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)
```

</v-click>

::right::

<v-click>

<Demo002Path2D/>

</v-click>

<v-click>

`void path.addPath(path [, transform])` 可以组合两个路径，transform是可选参数，是一个变换矩阵`DOMMatrix`

</v-click>

---
hideInToc: true
title: path2D使用SVG
---
### 使用 SVG paths
Path2D 可以使用 SVG path data 来初始化 canvas 上的路径

这条路径将先移动到点 (M10 10) 然后再水平移动 80 个单位(h 80)，然后下移 80 个单位 (v 80)，接着左移 80 个单位 (h -80)，再回到起点处 (z)

```js
const p = new Path2D('M10 10 h 80 v 80 h -80 Z')
```

<v-click>

<Demo002Path2DSvg/>

</v-click>

<!-- 

常用svg 路径命令
M:移动到坐标点 (x y)
L:绘制直线到坐标点 (x y)
C:绘制三次贝塞尔曲线到点 (x1 y1, x2 y2, x y)
Q:绘制二次贝塞尔曲线到点 (x1 y1, x y)
A:绘制弧/曲线到点 (rx ry x-axis-rotation large-arc-flag sweep-flag x y)
Z:闭合路径
 -->

---
hideInToc: true
title: 示例全部
---

<Demo002Shape class="inline-block"/>
