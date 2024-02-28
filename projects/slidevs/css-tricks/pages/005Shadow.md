---
title: Shadow
level: 1
---

## Shadow

CSS 中，明面上可以实现阴影的有三个属性：

- box-shadow，盒阴影；
- text-shadow，文字阴影；
- filter: drop-shaodw()，滤镜内的阴影。

---

### 阴影一 CSS中的最普通的阴影

`box-shadow: 4px 4px 4px 2px #999;`

<div class="shadow1 w-[100px] aspect-square mt-2 rounded" />

也可以 `filter: drop-shadow(4px 4px 2px #999);`
这个不知道为什么没显示出来

<div class="shadow2 w-[100px] aspect-square mt-2 rounded" />

<style>
.shadow1 {
    box-shadow: 4px 4px 4px 2px #999;
}

.shadow2 {
    filter: drop-shadow(4px 4px 2px #999);
}
</style>

---

<div class="shadow3">Text Shadow</div>

<style>

.shadow3 {
     text-shadow: 6px 6px 4px #999;
}
</style>

---

### 单侧阴影

以 box-shadow: 2px 4px 6px 8px #000 为例，其中的 4 个数值的含义分别是：

1. x 方向偏移值；
2. y 方向偏移值；
3. 阴影的模糊半径；
4. 阴影的扩张半径。

通过控制阴影扩张半径可以实现单侧阴影效果

<Demo018SingleShadow />

可以通过clip-path裁剪获得更大的阴影

---

### 阴影三：立体阴影

可以用其他元素加上模糊效果来模拟阴影

<Demo019Shadow3d />

---

### 阴影四：浮雕阴影

核心是两点

1. 背景色与内容（文本或者盒子颜色）一致；
2. 使用两个相反的方向，使用两组对比明显的颜色值，来实现凹凸效果。

<div class="shadow4 p-2">
<p>浮雕阴影</p>
</div>

再添加反向 -1px x,y方向添加一个与黑色相对的白色阴影

<div class="shadow5 p-2">
<p>浮雕阴影</p>
</div>

<style>

.shadow4 {
    background: #999;
 p{
  font-size: 60px;
 color: #999;
    text-shadow: 1px 1px 1px #000;}
}

.shadow5 {
    background: #999;
 p{
  font-size: 60px;
 color: #999;
    text-shadow:    1px 1px 1px #000,
        -1px -1px 1px #fff;}
}
</style>

---

我们把颜色再对调就能得到凹下质感的浮雕

<div class="shadow6 p-2">
<p>浮雕阴影</p>
</div>

<style>

.shadow6 {
    background: #999;
 p{
 font-size: 60px;
 color: #999;
    text-shadow:    1px 1px 1px #fff,
        -1px -1px 1px #000;}
}
</style>

---

### 阴影五：新拟态风格阴影

<Demo020ShadowAoTu/>

---

### 阴影六：文字立体投影/文字长阴影

单层文字阴影可能不够立体

可以通过叠加多层阴影

可以通过scss来辅助生成50层的阴影。

```scss
@function makeLongShadow($color) {
    $val: 0px 0px $color;

    @for $i from 1 through 50 {
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }

    @return $val;
}

div {
    text-shadow: makeLongShadow(hsl(14, 100%, 30%));
}

```

下面是效果

<div class="shadow7">
Txt Shadow
</div>

<style>
.shadow7 {
      text-shadow:
        0px 0px #992400,
        1px 1px #992400,
        2px 2px #992400,
        3px 3px #992400,
        4px 4px #992400,
        5px 5px #992400,
        6px 6px #992400,
        7px 7px #992400,
        8px 8px #992400, 9px 9px #992400, 10px 10px #992400, 11px 11px #992400, 12px 12px #992400, 13px 13px #992400, 14px 14px #992400, 15px 15px #992400, 16px 16px #992400, 17px 17px #992400, 18px 18px #992400, 19px 19px #992400, 20px 20px #992400, 21px 21px #992400, 22px 22px #992400, 23px 23px #992400, 24px 24px #992400, 25px 25px #992400, 26px 26px #992400, 27px 27px #992400, 28px 28px #992400, 29px 29px #992400, 30px 30px #992400, 31px 31px #992400, 32px 32px #992400, 33px 33px #992400, 34px 34px #992400, 35px 35px #992400, 36px 36px #992400, 37px 37px #992400, 38px 38px #992400, 39px 39px #992400, 40px 40px #992400, 41px 41px #992400, 42px 42px #992400, 43px 43px #992400, 44px 44px #992400, 45px 45px #992400, 46px 46px #992400, 47px 47px #992400, 48px 48px #992400, 49px 49px #992400, 50px 50px #992400;
}

</style>

---

之前的文字阴影有个问题是阴影的透明度和明暗度没有逐渐不断变化。这个需求可以用sass预处理器的函数来实现。

- fade-out 函数可以修改颜色的透明度，让颜色基于基准色更加的透明；
- desaturate 函数可以修改颜色的饱和度值，让颜色基于基准色更少的饱和。

修改后

```scss
 @function makelongrightshadow($color) {
    $val: 0px 0px $color;

    @for $i from 1 through 50 {
        $color: fade-out(desaturate($color, 1%), .02);
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }

    @return $val;
}

```

---

下面是效果

<Demo021ShadowText/>

---

### 阴影七：长阴影/长投影

可以借助元素的两个伪元素 ::before 和 ::after拆解阴影

<Demo022ShadowLong/>

---

### 阴影八：彩色阴影/渐变阴影

最常见的实现彩色阴影的方式就是通过 filter: blur() 模糊滤镜，作用给一个元素的副本，以此来生成颜色丰富的彩色阴影效果。

---

### 技巧一： 利用阴影复制自身图形

我们需要知道阴影是可以设置多个（多重阴影）的。
当阴影的模糊半径和阴影的扩张半径都为 0 的时候，能得到一个和元素本身一样大小的阴影效果，不过此时，我们是看不到阴影效果的，因为阴影被元素本身挡住了。当然，我们可以轻松地通过 X 偏移值和 Y 偏移值将其移动出来。

当我们遇到一些需要重复自身的图形时，可以运用上这个技巧。
<div class="shadow8" />

<style>

.shadow8 {
    width: 80px;
    height: 80px;
    border: 1px solid #333;
    box-sizing: border-box;
    box-shadow: 80px 80px 0 0 #000;
}
</style>

---

比如下面这个标题两边的点，可以用阴影来复制

<div class="shadow9">
<p>标题</p>
</div>

<style>

.shadow9 {
    position: relative;
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #000;
        left: -20px;
        top: 50%;
        transform: translate(0, -50%);
        box-shadow: -20px 0 #000, -40px 0 #000;
    }

    &::after {
        left: unset;
        /* right: -20px; */
        right: 90%;
        box-shadow: 20px 0 #000, 40px 0, #000;
    }
}
</style>

---

又比如用阴影实现一朵云

<div class="shadow10"></div>

<style>
.shadow10{
  width:100px;
  height:100px;
  margin:50px auto;
  background:#999;
  border-radius:50%;
  box-shadow:
    120px 0px 0 -10px #999,
    95px 20px 0 0px #999,
    30px 30px 0 -10px #999,
    90px -20px 0 0px #999,
    40px -40px 0 0px #999;
}
</style>

---
#### 使用阴影模拟多层边框

暂略

---
### 遮罩模拟，利用阴影模拟半透明遮罩层

我们只需要将 box-shadow 的第四个参数扩散半径设置得特别大（足够覆盖整个页面即可）。

<div id="foo"></div>

<style>
 #foo{
  width:200px;
  line-height:200px;
  text-align:center;
  background:#fff;
  margin:50px auto;
  box-shadow: 0 0 0 1920px rgba(0, 0, 0, .5);
}

</style>

---

使用 box-shadow 实现半透明遮罩，在某些特殊场景下能发挥很好的作用

<div class="shadow11">Hover Me</div>

<style>
.shadow11{
    position: absolute;
    width: 200px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all .2s;
 &:hover {
    box-shadow: 0 0 0 50vmax rgba(0, 0, 0, .5);
}
}
</style>

---

有一些注意事项

- 为了确保 box-shadow 生成的阴影在所有浏览器视口大小下都能覆盖整个页面，可能需要将阴影的尺寸，也就是阴影的扩散半径（第四个数字参数值）设置得很大；
- 使用 box-shadow 生成的阴影，它是无法阻止它背后元素的交互事件的，譬如阴影后面的元素还是可以被 hover 和 click，使用这种方式时，需要配合 pointer-event 一起，禁止掉元素的点击相关事件；
- 从性能角度而言，box-shadow 属于耗性能样式，不同样式在消耗性能方面也有所不同，box-shadow 在渲染方面更加耗费性能，因为它的绘制代码执行时间较长，因此在实际使用时仍需要仔细考虑此方案的优缺点。

---

### 技巧三：光效动画，使用阴影实现霓虹氖灯效果

氖光效果，英文名叫 Neon，在各类 CSS 效果网站中，是出镜率最多的效果之一。

氖光效果的原理非常简单，但产生的效果非常酷炫。本质上是大范围的 box-shadow 过渡动画与文字颜色的动态变化的叠加：

使用这种Neon效果时，一般是偏黑色背景
<div class="shadow12 p-2">Neon</div>

<style>
.shadow12{
 background:#000;
    color: #fff;
    text-shadow:
        0 0 10px #0ebeff,
        0 0 20px #0ebeff,
        0 0 50px #0ebeff,
        0 0 100px #0ebeff,
        0 0 200px #0ebeff
}
</style>

---

### 技巧四：阴影动画优化技巧

在 CSS 中，阴影其实属于耗性能样式。所谓的耗性能样式，即是我们如果对这些样式进行一些动画、过渡效果，是非常容易导致页面渲染帧率下降，最终形成掉帧、卡顿的。

可以用伪元素的opcity进行动画
