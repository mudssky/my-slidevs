---
title: Backgrounds
level: 1
layout: two-cols-header
---

## Backgrounds

::left::

纯色背景

<div class="w-[150px] aspect-square bg-[#000]"></div>

线性渐变

<div class="w-[150px] aspect-square bg-gradient-to-b from-[#fff] to-[#000]"></div>

::right::

径向渐变

<div class="w-[150px] aspect-square radial-demo"></div>

角向渐变

<div class="w-[150px] aspect-square conic-demo"></div>

<style>

.radial-demo{
 background: radial-gradient(#fff, #000);
}

.conic-demo{
background: conic-gradient(#fff, #000);
}

</style>

---
title: linear-gradient
level: 2
---

### `linear-gradient` 线性渐变

#### 技巧一 渐变的颜色可以是透明色(transparent)

这里放一个stone色的背景方便观察  

<div class="p-10 bg-stone-500 inline-block">
 <div class="w-[150px] aspect-square bg-gradient-to-b from-[#fff] to-transparent"></div>
</div>  

可以实现下面的效果  

<Demo001GradientTransparent />

**这里的核心在于，透明色或者带透明度的颜色有助于展示出元素下方的内容，当看到一些渐变消失、递进消失的 UI 时，就可以考虑是否能够利用到带透明的渐变效果来实现。**

---

#### 技巧二 渐变可以是从一种颜色直接到另外一种颜色

这里设置了前50%为白色，后50%为红色  

<div class="border-1 border-black  w-[150px] aspect-square instant-demo"></div>

tailwind不好做叠加渐变的效果， `bg-gradient-to-b from-[#fff] from-0% via-[#fff] via-50%  via-[#f00] via-50%  to-[#f00] to-100%`,这样设置并不是想要的效果

利用这个技巧，可以实现很多，比如利用渐变实现一个三角形

<div class=" w-[150px] aspect-square triangle-demo"></div>

<style>
.instant-demo{
background: linear-gradient(#fff 0%, #fff 50%, #f00 50%, #f00 100%);
}

.triangle-demo{
background: linear-gradient(45deg, #f00 0%, #f00 50%, transparent 50%, transparent 100%);
}

</style>

---

#### 技巧三：渐变是可以叠加多层的

下面在同一个div叠加4层线性渐变，相当于切掉4个角

<div class="notching"></div>

<style>

.notching {
    width: 200px;
    height: 120px;
    background:
        linear-gradient(135deg, transparent 15px, deeppink 0),
        linear-gradient(-135deg, transparent 15px, deeppink 0),
        linear-gradient(-45deg, transparent 15px, deeppink 0),
        linear-gradient(45deg, transparent 15px, deeppink 0);
    background-size: 50% 50%, 50% 50%, 50% 50%, 50% 50%;
    background-position: top left, top right, bottom right, bottom left;
    background-repeat: no-repeat;
}

</style>

---

#### 技巧四：利用 repeating-linear-gradient 节省代码

有的时候，我们需要用到不断重复的渐变。这个时候，除了 background-repeat: repeat 之外，官方还提供了一个 repeating-linear-gradient，可以创建一个由线性渐变重复组成的图形。

这段代码就是0-11px设置一个颜色 11-20px透明，然后重复

```css
    background:
        repeating-linear-gradient(
            45deg,
            #f06a0e,
            #f06a0e 11px,
            transparent 11px,
            transparent 20px
        );
```

<div class="w-[150px] aspect-square repeat-gg"></div>

<style>

.repeat-gg {
    background:
        repeating-linear-gradient(
            45deg,
            #f06a0e,
            #f06a0e 11px,
            transparent 11px,
            transparent 20px
        );
}

</style>

---
layout: two-cols
---
  
只用 `linear-gradient`,可以用如下方式

```css
{
    background: 
        linear-gradient(
            45deg, 
            #f06a0e, 
            #f06a0e 11px, 
            transparent 11px, 
            transparent 20px, 
            #f06a0e 20px, 
            #f06a0e 31px, 
            transparent 31px, 
            transparent 40px,
            #f06a0e 40px, 
            #f06a0e 51px, 
            transparent 51px, 
            transparent 60px
        );
}
```

::right::

<div class="w-[150px] aspect-square repeat-gg"></div>

<style>
.repeat-gg {
  background:
        linear-gradient(
            45deg,
            #f06a0e,
            #f06a0e 11px,
            transparent 11px,
            transparent 20px,
            #f06a0e 20px,
            #f06a0e 31px,
            transparent 31px,
            transparent 40px,
            #f06a0e 40px,
            #f06a0e 51px,
            transparent 51px,
            transparent 60px
        );
}

</style>

---
title: radial-gradient
level: 2
layout: two-cols
---

### `radial-gradient` 径向渐变

#### 技巧五：预留衔接空间消除渐变产生的锯齿

在使用渐变生成不同颜色的直接过渡时，非常容易就会产生锯齿效果。

<div class="radial-gradient"/>

::right::

遇到此类问题的解决方案是：在衔接处，适当留出一些渐变空间。我们简单改造一下上述代码

<div class="radial-gradient2"/>

<style>
.radial-gradient {
    width: 300px;
    height: 300px;
    background: radial-gradient(#9c27b0 0%, #9c27b0 47%, #ffeb3b 47%, #ffeb3b 100%);
}

.radial-gradient2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(#9c27b0 0%, #9c27b0 47%, #ffeb3b 47.3%, #ffeb3b 100%);
}

</style>

---

#### 技巧六：利用多层渐变组合图形

上面我们讲了，渐变可以叠加多层，那么，除了利用多层渐变图形，实现所需图形的各个部分，拼接成完整的图形。也可以在此基础上，利用它们的重叠效果，叠加出我们要的图形。

此技巧多用于实现优惠券边框。

<Demo002MultiRadial />

---

这个是叠加两个径向渐变实现的波浪下划线(波浪凹下和突起的部分分别是一种径向渐变)，相比于text-decoration实现的下划线，优势在于可以添加动画

<Demo003MultiRadial2 />

---
title: conic-gradient
level: 2
---
### conic-gradient 角向渐变（圆锥渐变）

<div class="conic-gradient"/>

<style>
.conic-gradient {
    width: 300px;
    height: 300px;
    background: conic-gradient(deeppink, yellowgreen);
}

</style>

---

#### 使用 conic-gradient 实现颜色表盘  

这里我们使用彩虹的七种颜色

<div class="conic-gradient2"/>

<style>
.conic-gradient2 {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: conic-gradient(red, orange, yellow, green, teal, blue, purple);
}

</style>

上面的实现还有两个问题，

1. 颜色只有7种，不够丰富
2. 两种颜色衔接处不够自然

---

表示颜色的方法，除了 rgb() 颜色表示法之外，还有 hsl() 表示法。

> hsl() 被定义为色相-饱和度-明度（Hue-Saturation-Lightness）。  

* 色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。
* 饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0~100% 的数值。
* 明度（V），亮度（L），取 0～100%。

我们可以通过改变色相得到一个较为明亮完整的颜色色系。  `hsl(0%, 100%, 50%) --> hsl(100%, 100%, 50%)`

<Demo004ColorCircle/>

---

#### 角向渐变配合百分比使用

可以实现饼图

<div class="conic-gradient3" />
也可以采用另一种写法  

`background: conic-gradient(deeppink 0 30%, yellowgreen 0 70%, teal 0 100%)`

<style>
.conic-gradient3 {
    width: 200px;
    height: 200px;
    background: conic-gradient(deeppink 0, deeppink 30%, yellowgreen 30%, yellowgreen 70%, teal 70%, teal 100%);
    border-radius: 50%;
}

</style>

---
layout: two-cols
---

#### 角向渐变配合 background-size 使用  

我们首先实现一个基础角向渐变图形，如下：

<div class="conic-gradient4"/>

::right::

之后我们加上 `background-size: 50px 50px;`

<div class="conic-gradient5"/>

<style>
.conic-gradient4 {
    width: 150px;
    height: 150px;
    margin: 50px auto;
    background: conic-gradient(#000 12.5%, #fff 0 37.5%, #000 0 62.5%, #fff 0 87.5%, #000 0);
}

.conic-gradient5 {
    width: 250px;
    height: 250px;
    margin: 50px auto;
    background: conic-gradient(#000 12.5%, #fff 0 37.5%, #000 0 62.5%, #fff 0 87.5%, #000 0);
    background-size: 50px 50px;
}
</style>

---

#### 重复角向渐变 repeating-conic-gradient

比如下面这个例子

<div class="conic-gradient6"/>

<style>
.conic-gradient6 {
    width: 200px;
    height: 200px;
    background: repeating-conic-gradient(deeppink 0 15deg, yellowgreen 0 30deg);
    border: 1px solid #000;
}
</style>

---
layout: two-cols
---

#### 技巧七：利用角向渐变 repeat 配合 position 完成特殊图案

首先，可以用角向渐变构造一个矩形，方法是90度的内容设置颜色，其他部分设置为无色  

<div class="conic-gradient7"/>

::right::

之后我们加入`background-position: -25px -25px;`
<div class="conic-gradient8"/>

这是利用了渐变图形默认是background-repeat的特性。如果设置为no-repeat，那么只会得到一个1/4的矩形
<style>
.conic-gradient7 {
    margin: auto;
    width: 200px;
    height: 200px;
    background: conic-gradient(from 270deg at 50px 50px, deeppink 0%, deeppink 90deg, transparent 90deg, transparent
 360deg);
    border: 1px solid #000;
}
.conic-gradient8 {
    margin: auto;
    width: 200px;
    height: 200px;
    background: conic-gradient(from 270deg at 50px 50px, deeppink 0%, deeppink 90deg, transparent 90deg, transparent
 360deg);
    background-position: -25px -25px;
    border: 1px solid #000;
}
</style>

---

#### 技巧八：利用小单位实现造型迥异的图案

<div class="conic-gradient9"/>
上面的图形把重复渐变的角度调到0.1  

这个和浏览器的实现有关，不适合用于生产环境上。

<div class="conic-gradient10 "/>

<style>
.conic-gradient9 {
    width: 150px;
    aspect-ratio:1/1;
    background: repeating-conic-gradient(#fff, #000, #fff 30deg);
}

.conic-gradient10 {
    width: 150px;
    aspect-ratio:1/1;
    background: repeating-conic-gradient(#fff, #000, #fff 0.1deg);
}

</style>
