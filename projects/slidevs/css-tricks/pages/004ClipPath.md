---
title: clip-path
level: 1
---

## clip-path
根据官方文档，对 clip-path 的解释是，该属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

<div class="circle"/>
<div class="polygon"/>

`clip-path: circle(50px at 50px 50px)` 的意思是，以元素的左上角为坐标起点，在元素的 （50px, 50px）处，生成一个半径为 50px 的圆，而这个生成的圆的范围之外，就是会被裁剪掉的内容。
`clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)` 中，依次列出了 10 个坐标点（仍旧是以元素的左上角为坐标起点）。整个图形就是依次连接这 10 个坐标点形成一个 10 边形，同理，这个生成的 10 边形图形的范围之外，就是会被裁剪掉的内容。

<style>

/* 圆形 */  
.circle {  
  display:inline-block;
  width: 100px ;  
  height: 100px ;  
  background-color: yellowgreen;  
  clip-path: circle(50px at 50px 50px);
}  
/* 十边形 */
.polygon {
 display:inline-block;
  width: 100px;
  height: 100px;
  background-color: yellowgreen;
  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
}

</style>

---

### 技巧一：利用 clip-path 在线工具快速生成路径

[clippy](https://bennettfeely.com/clippy/)

---

### 技巧二：使用 clip-path 实现常见不规则图形

<div class="clip-notching">notching</div>

<style>
.clip-notching {
 display: inline-block;
 width:200px;
    background: linear-gradient(
        45deg,#f9d9e7,#ff1493
    );
    clip-path: polygon(
        15px 0,
        calc(100% - 15px) 0,
        100% 15px,
        100% calc(100% - 15px),
        calc(100% - 15px) 100%,
        15px 100%,
        0 calc(100% - 15px),
        0 15px
    );
}

</style>

---

### clip-path的局限性

使用 clip-path 生成图形的非常大一个问题在于，它无法作用完整的边框。

举个例子，我们利用 clip-path 得到一个箭头图形：

<div class="clip3"></div>

之后我们用border 添加边框，实际得到的可能不是我们想要的
<div class="clip3 border-black border-1 border-solid"></div>

如果我们想给clip的图形添加边框，可以使用`filter: drop-shadow()`

<style>
.clip3 {
    width: 200px;
    height: 100px;
    clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
    background: #ff5722;
}

</style>

---

### 技巧三：借助 filter: drop-shadow() 给 clip-path 图形添加边框或者阴影

box-shadow 盒阴影的作用是在整个元素的后方创建阴影，而 drop-shadow() 滤镜则是创建一个符合元素本身形状（alpha 通道）的阴影。

因此可以用这个阴影模拟边框
阴影可以添加多次，达到边框的效果

<div class="father">
    <div class="children"></div>
</div>

<style>
.father {
    margin: auto;
    filter: drop-shadow(0 0 0.5px #000)
 drop-shadow(0 0 0.5px #000)
 drop-shadow(0 0 0.5px #000)
 drop-shadow(0 0 0.5px #000);
}
.children {
    width: 200px;
    height: 100px;
    clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
    background: #ff5722;
}

</style>

---

### 技巧四：clip-path 的坐标可以是负数，可以超出 100%

clip-path 不仅仅能控制元素内的裁剪，对超出元素范围的内容一样有裁剪的能力

<Demo014ClipGta />

---

### 技巧五：利用 clip-path 实现指定区域的 overflow:hidden

想象这样一种场景，在某个需求的实现过程中，有一类特殊情况，要求容器内的内容，在竖直方向上超出容器区域后会被裁剪，而如果在水平方向上超出容器区域，则不会被裁剪。

<Demo015ClipOverflow/>

---

### 基于 clip-path 的形变动画

clip-path 的一大优点在于它可以与 CSS 中的过渡 transtion 与动画 animation 进行联动，实现动画效果。

因此，我们可以借助 CSS transtion 与 CSS animation 来进行一些形变动画效果。

下面实现了一个多边形从三边形向四边形再到五边形的变换效果：

<div class="polygon-animate"></div>

<style>
.polygon-animate {
    width: 200px;
    height: 200px;
    background-color: crimson;
    animation: polygon-ani 3s linear infinite;
}
@keyframes polygon-ani {
    0%,
    5% {
        clip-path: polygon(
            50% 0%,
            0% 100%,
            100% 100%,
            100% 100%,
            100% 100%
        );
    }
    30%,
    35% {
        clip-path: polygon(
            50% 0%,
            100% 50%,
            50% 100%,
            0% 50%,
            0% 50%
        );
    }
    60%,
    65% {
        clip-path: polygon(
            50% 0%,
            100% 38%,
            82% 100%,
            18% 100%,
            0% 38%
        );
    }
    95%,
    100% {
        clip-path: polygon(
            50% 0%,
            0% 100%,
            100% 100%,
            100% 100%,
            100% 100%
        );
    }
}

</style>

---

### clip-path 动画的局限
核心点在于：进行动画或者过渡的两个 clip-path 状态， polygon() 内的顶点的数量必须保持一致。

### 基于 clip-path 的图形变换动画
除此之外，我们还可以尝试，将一个完整的图形，分割成多个小图形

下面是一个容器从正方形拉长到举行的变化效果  

<div class="triangle2rect"></div>

<style>
@keyframes aniContainer {
    0%, 10% {
        width: 100px;
        height: 100px;
    }
    90%, 100% {
        width: 250px;
        height: 60px;
    }
}
.triangle2rect {
 display:inline-block;
 background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
    width: 100px;
    height: 100px;
    animation: aniContainer 2s infinite alternate;
}
</style>

---

下面是clip-path实现的三角形动画变换

<div class="triangle2rect"></div>

<style>
.triangle2rect {
    width: 100px;
    height: 100px;
    animation: a 2s infinite alternate;
}
@keyframes a {
    0%, 10% {
        background: deeppink;
        clip-path: polygon(0% 0%, 0% 100%, 50% 50%);
    }
    90%, 100% {
        background: #000;
        clip-path: polygon(0% 100%, 25% 100%, 12.5% 0%);
    }
}

</style>

---

### 基于 clip-path 的边框动画

<Demo016ClipBorder />

---

### 基于 clip-path 的故障动画

<Demo017ClipText/>

---

### 基于 clip-path 的动态区域裁剪动画

<div class="g-container"></div>

<style>
.g-container {
    position: relative;
    width: 400px;
    height: 300px;
    overflow: hidden;
    transition: clip-path .3s linear;
    clip-path: circle(20px at 44px 44px);
    background: gold;

    &:hover {
        clip-path: circle(460px at 44px 44px);
    }
}
</style>
