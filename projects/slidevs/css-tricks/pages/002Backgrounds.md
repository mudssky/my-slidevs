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

---
title: 渐变色动画
level: 2
---

### 渐变色动画

css动画，目前还不支持渐变。
在传统的 CSS 中，我们通常想实现背景色渐变动画，有几种方式：

* 通过 background-position 的移动模拟渐变动画；
* 通过 background-size 的缩放过程来模拟渐变动画；
* 通过外层的大渐变图形的移动（transform）来模拟渐变动画。

#### 通过 background-position 模拟渐变动画

<div class="gradient-box"/>

<style>
.gradient-box {
    width: 200px;
    aspect-ratio:1/1;
    /* height: 100px; */
    background: linear-gradient(90deg,  #ffc700 0%, #e91e1e 50%, #6f27b0 100%);
    background-size: 200% 100%;
    background-position: 0 0;
    animation: bgposition 2s infinite linear alternate;
}

@keyframes bgposition {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
}

</style>

---

#### 通过 background-size 模拟渐变动画

通过改变 background-size 的第一个值，我将背景图的大小由 3 倍背景区大小向 1 倍背景区大小过渡，在背景图变换的过程中，就有了一种动画的效果

<div class="gradient-box2"/>

<style>
.gradient-box2 {
    width: 200px;
    aspect-ratio:1/1;
    background: linear-gradient(90deg,  #ffc700 0%, #e91e1e 33%, #6f27b0 66%, #00ff88 100%);
    background-position: 100% 0;
    animation: bgSize 5s infinite ease-in-out alternate;
}

@keyframes bgSize  {
    0% {
        background-size: 300% 100%;
    }
    100% {
        background-size: 100% 100%;
    }
}

</style>

---

#### 通过 transform 模拟渐变动画

上述两种方式，由于使用了 background-position 和 background-size，并且在渐变中改变这两个属性，导致页面不断地进行大量的重绘（repaint），对页面性能消耗非常严重，所以我们还可以试试 transfrom 的方法。

下面这种方式，使用伪元素配合 transform 进行渐变动画，通过元素的伪元素 before 或者 after ，在元素内部画出一个大背景，再通过 transform 对伪元素进行变换：
也就是矩形内的背景在位移。

<div class="gradient-box3"/>

<style>
/* 好在现代css已经支持嵌套了，这样感觉sass的必要性又减少了，只是还没有mixin和function */
.gradient-box3 {
    position: relative;
    overflow: hidden;
    width: 100px;
    height: 100px;
    margin: 100px auto;
    border: 2px solid #000;

    &::before {
        content: "";
        position: absolute;
        top: -100%;
        left: -100%;
        bottom: -100%;
        right: -100%;
        background: linear-gradient(45deg,  #ffc700 0%, #e91e1e 50%, #6f27b0 100%);
        background-size: 100% 100%;
        animation: bgposition2 5s infinite linear alternate;
        z-index: -1;
    }
}

@keyframes bgposition2 {
    0% {
        transform: translate(30%, 30%);
    }
    25% {
        transform: translate(30%, -30%);
    }
    50% {
        transform: translate(-30%, -30%);
    }
    75% {
        transform: translate(-30%, 30%);
    }
    100% {
        transform: translate(30%, 30%);
    }
}

</style>

---

#### 通过滤镜 hue-rotate 实现渐变动画

hue-rotate：为色相旋转滤镜，默认的值为 0deg，当旋转 360deg 后，相当于回到了本身的颜色值。

<div class="gradient-box4"/>

<style>
.gradient-box4 {
    width: 200px;
    aspect-ratio:1/1;
    background: linear-gradient(45deg, #5fddcc, #ff004d);
    animation: hueRotate 10s infinite alternate;
}

@keyframes hueRotate {
    0 {
        filter: hue-rotate(0);
    }
    100% {
        filter: hue-rotate(360deg);
    }
}
</style>

---

#### 使用 CSS @property 实现背景色渐变动画

CSS @property 其实就是灵活度更高的 CSS 自定义属性，我们也可以称其为 CSS Houdini 自定义属性。其中：

* @property --property-name 中的 --property-name 就是自定义属性的名称，定义后可在 CSS 中通过 var(--property-name) 进行引用。
* syntax：该自定义属性的语法规则，也可以理解为表示定义的自定义属性的类型。
* inherits：是否允许继承。
* initial-value：初始值。

Demo 中，我们利用了 CSS Houdini 自定义属性，将原本定义在 background 的过渡效果嫁接到了 color 之上，而 CSS 是支持一个颜色变换到另外一个颜色的，这样，我们巧妙地实现了渐变背景色的过渡动画。

<Demo005PropertyGradient />

---
title: background-clip 与渐变文字
level: 2
---

### background-clip 与渐变文字

首先看看它的用法，简单而言，background-clip 的作用就是设置元素的背景（背景图片或颜色）的填充规则。
与 box-sizing 的取值非常类似，通常而言，它有 4 个取值：

```css
{
    background-clip: border-box;  // 背景延伸到边框外沿（但是在边框之下）
    background-clip: padding-box; // 边框下面没有背景，即背景延伸到内边距外沿。
    background-clip: content-box; // 背景裁剪到内容区 (content-box) 外沿。
    backgrounc-clip: text; 
}

```

下面的实例就能把看出前三个的区别

<div class="flex justify-between">
<div class="clip-border clip-box"></div>
<div class="clip-padding clip-box"></div>
<div class="clip-content clip-box"></div>
</div>

<style>
.clip-box {
    width: 100px;
    height: 100px;
    padding: 20px;
    background: #000;
    background-repeat: no-repeat;
    border: 10px dashed red;
}
.clip-border {
    background-clip: border-box;
}
.clip-padding {
    background-clip: padding-box;
}
.clip-content {
    background-clip: content-box;
}
</style>

---

使用border-box可以实现类似红黄相间的边框的效果

这里还利用了 background 可以多重这个特性，不过由于不支持写成 background: #fff, #e91e63，所以将第一重白色写成了 linear-gradient(#fff, #fff)，它其实等价于 #fff。

<div class="clip-box2"></div>

<style>
.clip-box2{
    width: 100px;
    height: 100px;
    background: linear-gradient(#fff, #fff), #e91e63;
    background-clip: padding-box, border-box;
    border: 2px dashed #ffeb3b;
}

</style>

---

#### background-clip: text

文字颜色设置为透明，这样就能透出后面的背景了。

<div class="clip-box3">Clip</div>

<style>
.clip-box3{
  font-size: 180px;
  font-weight: bold;
  /* color: deeppink; */
  color: transparent;
  background: url(/assets/dust-mountain.webp) no-repeat center center;
  background-size: cover;
  background-clip: text;
}

</style>

---

#### 利用 background-clip: text 实现渐变文字

<div class="clip-box4"> background-clip: text</div>

<style>
.clip-box4{
   font-size: 54px;
    color: transparent;
    background: linear-gradient(45deg, #ffeb3b, #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a);
    background-clip: text;
}

</style>

---

也可以配合动态背景

<div class="clip-box5"> background-clip: text</div>

也可以实现文字高亮效果

<div class="clip-box6" data-text="Lorem ipsum dolor">Lorem ipsum dolor</div>

<style>
.clip-box5{
    font-size: 54px;
    color: transparent;
    background: linear-gradient(45deg, #ffeb3b, #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a);
    background-clip: text;
    animation: huerotate 3s infinite;
}
@keyframes huerotate {
    100% {
        filter: hue-rotate(360deg);
    }
}
.clip-box6 {
    position: relative;
    color: transparent;
    background-color: #E8A95B;
    background-clip: text;
}
.clip-box6::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, transparent 0%, transparent 6rem, white 11rem, transparent 11.15rem, transparent 15rem, rgba(255, 255, 255, 0.3) 20rem, transparent 25rem, transparent 27rem, rgba(255, 255, 255, 0.6) 32rem, white 33rem, rgba(255, 255, 255, 0.3) 33.15rem, transparent 38rem, transparent 40rem, rgba(255, 255, 255, 0.3) 45rem, transparent 50rem, transparent 100%);
    background-clip: text;
    background-size: 150% 100%;
    background-repeat: no-repeat;
    animation: shine 5s infinite linear;
}
@keyframes shine {
        0% {
                background-position: 50% 0;
        }
        100% {
                background-position: -190% 0;
        }
}
</style>

---
title: 'background 与 display: inline'
level: 2
---

### background 与 display: inline

内联元素和块级元素background属性展现不一致

<div class="clip-box7">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta incidunt ut illo, ratione aut reprehenderit facilis mollitia saepe ducimus libero hic reiciendis deserunt optio veniam ullam. Beatae, non quae.
    </p>
</div>

<div  class="clip-box8">
    <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta incidunt ut illo, ratione aut reprehenderit facilis mollitia saepe ducimus libero hic reiciendis deserunt optio veniam ullam. Beatae, non quae.</a>
</div>

<style>
.clip-box7,.clip-box8{
    width:400px;
    p,a{
         background: linear-gradient(90deg, blue, green);
    }
}

</style>

---

加上动画以后,就比较直观了。

<Demo006InlineGradient/>

---

#### 多行文本的渐隐消失

基于这个特性，我们可以很轻松地实现多行文本的渐隐消失。

<Demo007InlineGradient2/>

---

#### 文字 hover 动效

<Demo008InlineGradient3/>

---
title: background-attachment
level: 2
---

### 冷门属性 background-attachment

background-attachment fix 可以实现视差滚动效果

但是这个效果只能在全屏类的页面使用，因为fix是相对于视口固定的

因此在slidev中不好展示。
<!-- <Demo009Parallax/> -->
