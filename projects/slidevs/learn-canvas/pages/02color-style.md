
---
title: 使用样式和颜色
level: 1
layout: center
background: https://sli.dev/bar.png
---
# 07.使用样式和颜色

---
title: Colors
level: 2
---

### 色彩 Colors

有两种方法给图形上色

1. `fillStyle = color` 设置图形的填充颜色
2. `strokeStyle = color` 设置图形轮廓的颜色

color 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。认情况下，线条和填充颜色都是黑色（CSS 颜色值 #000000）。

<v-click>

<Demo003FillStyle/>

</v-click>

<v-click>

<Demo003StrokeStyle class=" ml-10" />

</v-click>

---
title: 透明度
level: 2
---

### 透明度 Transparency
除了可以绘制实色图形，我们还可以用 canvas 来绘制半透明的图形。

1. globalAlpha = transparencyValue
   这个属性影响到 canvas 里所有图形的透明度，transparencyValue有效值从0.0（完全透明）到 1.0（完全不透明），在需要绘制大量拥有相同透明度的图形时候相当高效。

2. strokeStyle 和 fillStyle  接受符合css3规范的颜色值，也可以用下面的方法设置具有透明度的颜色

```js
// 指定透明颜色，用于描边和填充样式
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";

```

<v-click>

<Demo003Transparency  />

</v-click>

<v-click>

<Demo003TransparencyRgba class=" ml-10" />

</v-click>

---
title: 线型
level: 2
---

### 线型 Line Style

1. lineWidth = value 设置线条宽度。给定中心到两边的粗细，两边各绘制一半宽度。
2. lineCap = type 设置线条末端样式。
3. lineJoin = type 设定线条与线条间接合处的样式。
4. miterLimit = value 限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
5. getLineDash() 返回一个包含当前虚线样式，长度为非负偶数的数组。
6. setLineDash(segments) 设置当前虚线样式。
7. lineDashOffset = value 设置虚线样式的起始偏移量。

<v-click>

<Demo003LineWidth  />

</v-click>

<v-click>

<Demo003LineCap class=" ml-10" />

</v-click>

<v-click>

<Demo003LineJoin class=" ml-10" />

</v-click>

---

### miterLimit

之前的例子lineJoin用到miter，线段的外侧边缘会被延伸交汇于一点上。线段之间夹角比较大时，交点不会太远，但随着夹角变小，交点距离会呈指数级增大。

miterLimit 属性就是用来设定外延交点与连接点的最大距离，如果交点距离大于此值，连接效果会变成了 bevel，注意，最大斜接长度（即交点距离）是当前坐标系测量**线宽与此miterLimit属性值（HTML `<canvas>`默认为 10.0）的乘积**  
可以用三角函数算出miterLimit对应的限定角度

- 斜接限定值为 √2 ≈ 1.4142136（四舍五入）时，将去除所有锐角的斜接，仅保留钝角或直角。
- 1.0 是合法的斜接限定值，但这会去除所有斜接。小于 1.0 的值不是合法的斜接限定值。

<v-click>

<Demo003MiterLimit  />

</v-click>
