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

### 技巧一 渐变的颜色可以是透明色(transparent)

这里放一个stone色的背景方便观察  

<div class="p-10 bg-stone-500 inline-block">
 <div class="w-[150px] aspect-square bg-gradient-to-b from-[#fff] to-transparent"></div>
</div>  

可以实现下面的效果  

<Demo001GradientTransparent />

**这里的核心在于，透明色或者带透明度的颜色有助于展示出元素下方的内容，当看到一些渐变消失、递进消失的 UI 时，就可以考虑是否能够利用到带透明的渐变效果来实现。**

---

### 技巧二 渐变可以是从一种颜色直接到另外一种颜色

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

### 技巧三：渐变是可以叠加多层的

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

### 技巧四：利用 repeating-linear-gradient 节省代码

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
