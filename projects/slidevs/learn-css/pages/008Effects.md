---
title: Effects
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Effects

---
title: Box Shadow
level: 2
layout: slim-table
---

### Box Shadow

| shadow-sm    | box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);                   |
| ------------ | ------------------------------------------------------------ |
| shadow       | box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); |
| shadow-md    | box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); |
| shadow-lg    | box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); |
| shadow-xl    | box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); |
| shadow-2xl   | box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);             |
| shadow-inner | box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);             |
| shadow-none  | box-shadow: 0 0 #0000;                                       |

<div class="[&_div]:(w-[100px] aspect-square) space-x-5 flex mt-10">
<div class="shadow-md ..."></div>
<div class="shadow-lg ..."></div>
<div class="shadow-xl ..."></div>
<div class="shadow-2xl ..."></div>
<div class="shadow-inner ...">内嵌阴影</div>
</div>

---
title: Box Shadow Color
level: 2
layout: slim-table
---

### Box Shadow Color

颜色的使用都是一样的

<div class="[&_button]:(p-2 rounded text-white) space-x-5 flex mt-10">
<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
<button class="bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
<button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
</div>

---
title: Opacity
level: 2
layout: slim-table
---

### Opacity 不透明度

不用多说了

---
title: Mix Blend Mode
level: 2
layout: slim-table
tableSize: small
---

### Mix Blend Mode  

控制元素和背景颜色怎么混合

| Class                  | Properties                    |
| ---------------------- | ----------------------------- |
| mix-blend-normal       | mix-blend-mode: normal;       |
| mix-blend-multiply     | mix-blend-mode: multiply;     |
| mix-blend-screen       | mix-blend-mode: screen;       |
| mix-blend-overlay      | mix-blend-mode: overlay;      |
| mix-blend-darken       | mix-blend-mode: darken;       |
| mix-blend-lighten      | mix-blend-mode: lighten;      |
| mix-blend-color-dodge  | mix-blend-mode: color-dodge;  |
| mix-blend-color-burn   | mix-blend-mode: color-burn;   |
| mix-blend-hard-light   | mix-blend-mode: hard-light;   |
| mix-blend-soft-light   | mix-blend-mode: soft-light;   |
| mix-blend-difference   | mix-blend-mode: difference;   |
| mix-blend-exclusion    | mix-blend-mode: exclusion;    |
| mix-blend-hue          | mix-blend-mode: hue;          |
| mix-blend-saturation   | mix-blend-mode: saturation;   |
| mix-blend-color        | mix-blend-mode: color;        |
| mix-blend-luminosity   | mix-blend-mode: luminosity;   |
| mix-blend-plus-lighter | mix-blend-mode: plus-lighter; |

<style>
.slidev-layout{
    overflow: auto;
}
</style>

---

可以试一试不同混合模式的效果  

<div class="flex justify-center -space-x-14 [&_div]:(w-[100px] aspect-square rounded-50)">
  <div class="mix-blend-multiply bg-blue-400 ..."></div>
  <div class="mix-blend-multiply bg-pink-400 ..."></div>
</div>

---
title: Mix Blend Mode
level: 2
layout: slim-table
tableSize: small
---
