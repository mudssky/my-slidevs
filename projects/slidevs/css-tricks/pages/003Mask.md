---
title: Mask
level: 1
---

## Mask

`mask: linear-gradient(90deg, transparent, #000)` 实现了一个从黑色到透明渐变色的 mask 遮罩。当图片应用了 mask 之后，就会变成这样：

<div class="mask1 !bg-cover" />

mask 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

<style>
.mask1{
    width:200px;
    aspect-ratio: 1/1;
    background: url(/assets/dust-mountain.webp);
    mask: linear-gradient(90deg, transparent, #000);
}
</style>

---
layout: two-cols
---

### 技巧一 使用mask进行内容裁切

#### 图片切角效果

之前用线性渐变制造的多边形，可以用mask作为裁切

<div class="mask2 !bg-cover" />

::right::

同理，使用镜像渐变也可以制作内切圆角。这个也可以用mask这招来实现。这样就能在背景上额外添加渐变了。

<div class="mask-inset-circle  mt-2" />

<div class="mask-inset-circle2  mt-2" />

<style>
.mask2{
    width:200px;
    aspect-ratio: 1/1;
    background: url(/assets/dust-mountain.webp);
    mask:linear-gradient(135deg, transparent 15px, #fff 0)
        top left,linear-gradient(-135deg, transparent 15px, #fff 0)
        top right,linear-gradient(-45deg, transparent 15px, #fff 0)
        bottom right,linear-gradient(45deg, transparent 15px, #fff 0)
        bottom left;
    mask-size: 50% 50%;
    mask-repeat: no-repeat;
}
.mask-inset-circle {
    width:300px;
    height:100px;
    /* aspect-ratio: 1/1; */
    /* background: url(/assets/dust-mountain.webp); */
    background: radial-gradient(
            circle at 100% 100%,
            transparent 0,
            transparent 12px,
            #2179f5 13px
        ),
        radial-gradient(
            circle at 0 0,
            transparent 0,
            transparent 12px,
            #2179f5 13px
        ),
        radial-gradient(
            circle at 100% 0,
            transparent 0,
            transparent 12px,
            #2179f5 13px
        ),
        radial-gradient(
            circle at 0 100%,
            transparent 0,
            transparent 12px,
            #2179f5 13px
        );
    background-repeat: no-repeat;
    background-position: right bottom, left top, right top, left bottom;
    background-size: 50% 50%;
}

.mask-inset-circle2 {
        width:300px;
    height:100px;
    background: linear-gradient(45deg, #2179f5, #e91e63);
    mask: radial-gradient(
            circle at 100% 100%,
            transparent 0,
            transparent 12px,#2179f5 13px
        ),radial-gradient(
            circle at 0 0,
            transparent 0,
            transparent 12px,#2179f5 13px
        ),radial-gradient(
            circle at 100% 0,
            transparent 0,
            transparent 12px,#2179f5 13px
        ),radial-gradient(
            circle at 0 100%,
            transparent 0,
            transparent 12px,#2179f5 13px
        );
    mask-repeat: no-repeat;
    mask-position: right bottom, left top, right top, left bottom;
    mask-size: 70% 70%;
}

</style>

---

### 技巧二 巧用mask实现渐变消失布局

mask可以实现之前的渐变消失效果
之前我们用background+伪元素实现的，这类效果用mask遮罩实现更方便

只要一行代码就可以了`mask: linear-gradient(90deg, #000 70%, transparent);`

<Demo010GradientTransparent2/>

---

### 技巧三 巧用mask实现融合效果

一种非常常见的效果，就是两张图片的融合效果。

<Demo011MaskFusion />

也可以调整渐变，实现过渡效果

```css
{
    - mask: linear-gradient(45deg, #000 50%, transparent 50%)
    + mask: linear-gradient(45deg, #000 40%, transparent 60%)
}

```

---

### 技巧四 巧用mask实现内容切换效果

Mask 的核心就是遮罩，遮挡住元素的内容（可以是部分挡住，可以是逐渐消失，甚至是可以分块挡住），显示出其元素背后的内容。

<Demo012MaskSwitch/>

---

### 技巧五 mask-composite 组合遮罩大法，让切图更轻松

就是遮罩可以两个图形重叠，然后获取重叠的部分

<Demo013MaskComposite/>

支持那么多中属性，只是目前兼容性还不行，就算chrome也需要加入-webkit前缀

```css
{
    -webkit-mask-composite: clear; /*清除，不显示任何遮罩*/
    -webkit-mask-composite: copy; /*只显示上方遮罩，不显示下方遮罩*/
    -webkit-mask-composite: source-over; 
    -webkit-mask-composite: source-in; /*只显示重合的地方*/
    -webkit-mask-composite: source-out; /*只显示上方遮罩，重合的地方不显示*/
    -webkit-mask-composite: source-atop;
    -webkit-mask-composite: destination-over;
    -webkit-mask-composite: destination-in; /*只显示重合的地方*/
    -webkit-mask-composite: destination-out;/*只显示下方遮罩，重合的地方不显示*/
    -webkit-mask-composite: destination-atop;
    -webkit-mask-composite: xor; /*只显示不重合的地方*/
}

```

---
layout: scroll
---

### mask 实现切换动画

结合径向渐变，角向渐变，位移等，然后用keyframe 多写一些帧就可以实现比较流畅的动画。
这部分可以用scss的循环来简化，但是实际生成的css代码量还是很大。

可以使用css最新的@property 制造变量的变化，这样就简化了。

```css
@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: -10%;
}
div {
    position: relative;
    width: 400px;
    height: 400px;
    background: url(https://picsum.photos/400/400?random=5) no-repeat;
    &::before {
        content: "";
        position: absolute;
        top: 0;left: 0; right: 0;bottom: 0;
        background: url(https://picsum.photos/400/400?random=100) no-repeat;
        mask: conic-gradient(
            #000 0, 
            #000 var(--per), 
            transparent calc(var(--per) + 10%), 
            transparent
        );
        z-index: 1;
        animation: maskRotate 1.2s ease-in forwards;   }}
@keyframes maskRotate {
    0% {
        --per: -10%;
    }
    100% {
        --per: 100%;
    }
}

```

---

### 视频网站弹幕不遮挡人物效果

这个是用了mask，把人物部分透明，所以就不会遮挡到人物了。
然后这个遮罩用的图片是后端 根据视频内容实时计算出来的。
前端获取这个图片去实时添加遮罩
