
---
title: 使用样式和颜色
level: 1
layout: center
---
# 07.使用样式和颜色

---
title: 色彩
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
hideInToc: true
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

---
hideInToc: true
---

### 虚线

用 setLineDash 方法和 lineDashOffset 属性来制定虚线样式。  
setLineDash 方法接受一个数组，来指定线段与间隙的交替；如果数组元素的数量是奇数，数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]  
lineDashOffset 属性设置起始偏移量。

<v-click>

<Demo003LineDash />

</v-click>

<v-click>

<Demo003LineDash2 class=" ml-10"  :width="300"/>

</v-click>

---
title: 渐变
level: 2
---

## 渐变 Gradients
我们用下面的方法新建一个 canvasGradient 对象，并且赋给图形的 fillStyle 或 strokeStyle 属性。

1. `createLinearGradient(x1, y1, x2, y2)` 创建线性渐变,接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)
2. `createRadialGradient(x1, y1, r1, x2, y2, r2)`创建径向渐变， 接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。

创建出 `canvasGradient` 对象后，我们就可以用 `addColorStop` 方法给它上色了。  

`gradient.addColorStop(position, color)` 该方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5 表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF，rgba(0,0,0,1)，等等）。

---

<v-click>

<Demo005LinearGradient1 />

</v-click>

<v-click>

<Demo005RadialGradient class=" ml-10" />

</v-click>

---
title: 图案样式
level: 2
---

## 图案样式 Patterns

`createPattern(image, type)`,该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象。Type 必须是下面的字符串值之一：`repeat`，`repeat-x`，`repeat-y` 和 `no-repeat`。

图案的应用跟渐变类似，创建出一个 pattern 之后，赋给 fillStyle 或 strokeStyle 属性即可

<v-click>

<Demo006Patterns />

</v-click>

---
title: 阴影
level: 2
---

## 阴影 Shadows

`shadowOffsetX = float`  
`shadowOffsetY = float`  
shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0。  

`shadowBlur = float` shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。  
`shadowColor = color` shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。  

<v-click>

<Demo007Shadows />

</v-click>

---
title: 填充规则
level: 2
---
## 填充规则

当我们用到 fill（或者 clip和isPointinPath ）你可以选择一个填充规则，该填充规则根据某处在路径的外面或者里面来决定该处是否被填充，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。
两个可能的值：

- `nonzero` 默认值
- `evenodd`

<v-click>

<Demo008WindingRule />

</v-click>
