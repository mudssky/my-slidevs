---
title: Borders
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Borders

---
title: Border Radius
level: 2
---

### Border Radius

rounded-full 可以作为药丸按钮的样式

<button class="rounded-full bg-cyan p-2 text-white">Save Changes</button>

也可以分别设置每个圆角，或者对角线圆角，同时也有逻辑属性。

---
title: Border Width
level: 2
---

### Border Width

不用多说

---
title: Border Color
level: 2
---

### Border Color

不用多说

---
title: Border Style
level: 2
layout: slim-table
---

### Border Style

| Class         | Properties            |
| ------------- | --------------------- |
| border-solid  | border-style: solid;  |
| border-dashed | border-style: dashed; |
| border-dotted | border-style: dotted; |
| border-double | border-style: double; |
| border-hidden | border-style: hidden; |
| border-none   | border-style: none;   |

下面是几种边框

<div class="flex space-x-5 [&_div]:(w-[100px] aspect-square flex justify-center items-center) mt-10 ">
<div class="border-solid border-2 border-indigo-600 ...">solid</div>
<div class="border-dashed border-2 border-indigo-600 ...">dash</div>
<div class="border-dotted border-2 border-indigo-600 ...">dotted</div>
<div class="border-double border-4 border-indigo-600 ...">double</div>
</div>

---
title: Divide Width
level: 2
layout: slim-table
---
### Divide Width

可以用border实现分割线

<div class="grid grid-cols-3 divide-x [&_div]:( w-[50px] aspect-square flex justify-center items-center) shadow">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

---
title: Divide Color
level: 2
layout: slim-table
---

### Divide Color

实际上就是边框颜色

---
title: Divide Style
level: 2
layout: slim-table
---

### Divide Style

实际上就是边框样式

---
title: Outline Width
level: 2
layout: slim-table
---

### Outline Width

控制元素轮廓宽度
比如按钮

<div class="space-x-5">
<button class="outline outline-offset-2 outline-1 ...">Button A</button>
<button class="outline outline-offset-2 outline-2 ...">Button B</button>
<button class="outline outline-offset-2 outline-4 ...">Button C</button>
</div>

---
title: Outline Color
level: 2
layout: slim-table
---

### Outline Color

没什么可讲的

<div class="space-x-5">
<button class="outline outline-offset-2 outline-blue-500 ...">Button A</button>
<button class="outline outline-offset-2 outline-cyan-500 ...">Button B</button>
<button class="outline outline-offset-2 outline-pink-500 ...">Button C</button>
</div>

---
title: Outline Style
level: 2
layout: slim-table
---

### Outline Style

没什么可讲的

<div class="space-x-5">
<button class="outline outline-2 outline-offset-2 ...">Button A</button>
<button class="outline-dashed outline-2 outline-offset-2 ...">Button B</button>
<button class="outline-dotted outline-2 outline-offset-2 ...">Button C</button>
<button class="outline-double outline-3 outline-offset-2 ...">Button D</button>
</div>

---
title: Outline Offset
level: 2
layout: slim-table
---

### Outline Offset
没什么可讲的

---
title: Ring Width
level: 2
layout: slim-table
---

### Ring Width

用于创建带有盒子阴影的轮廓环

<div class="space-x-5">
<button class="... ring-offset-2 ring-2">Button A</button>
<button class="... ring-offset-2 ring">Button B</button>
<button class="... ring-offset-2 ring-4">Button C</button>
</div>

后面轮廓环系列样式也略了，看起来这系列的样式适合按钮用
