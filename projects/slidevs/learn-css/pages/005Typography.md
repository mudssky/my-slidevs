---
title: Typography
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Typography

---
title: Font Family
level: 2
---

### Font Family
这些是tailwind默认提供的字体

| Class      | Properties                                                   |
| ---------- | ------------------------------------------------------------ |
| font-sans  | font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| font-serif | font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; |
| font-mono  | font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; |

<div class="border-1 border-gray-100 rounded-lg p-2">
<p class="font-sans ...">The quick brown fox </p>
<p class="font-serif ...">The quick brown fox </p>
<p class="font-mono ...">The quick brown fox </p>
</div>

---
title: Font Size
level: 2
---
### Font Size

这里可以设置字体，同时也设置行高

<p class="text-base/6 ...">So I started to walk into the water...</p>
<p class="text-base/7 ...">So I started to walk into the water...</p>
<p class="text-base/loose ...">So I started to walk into the water...</p>

---
title: Font Smoothing
level: 2
---

### Font Smoothing

应用字体平滑，但是这两个兼容性都不行，不建议使用  

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| antialiased          | -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; |
| subpixel-antialiased | -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; |

---
title: Font Style
level: 2
---

### Font Style

可以设置斜体

| Class      | Properties          |
| ---------- | ------------------- |
| italic     | font-style: italic; |
| not-italic | font-style: normal; |

---
title: Font Weight
level: 2
---

### Font Weight

设置字重

---
title: Font Variant Numeric
level: 2
---

### Font Variant Numeric

控制字体数字的变体，需要看你的字体是否支持。

---
title: Letter Spacing
level: 2
layout: slim-table
---

### Letter Spacing

设置字母间距

| Class            | Properties                |
| ---------------- | ------------------------- |
| tracking-tighter | letter-spacing: -0.05em;  |
| tracking-tight   | letter-spacing: -0.025em; |
| tracking-normal  | letter-spacing: 0em;      |
| tracking-wide    | letter-spacing: 0.025em;  |
| tracking-wider   | letter-spacing: 0.05em;   |
| tracking-widest  | letter-spacing: 0.1em;    |

<p class="tracking-tight ...">The quick brown fox ...</p>
<p class="tracking-normal ...">The quick brown fox ...</p>
<p class="tracking-wide ...">The quick brown fox ...</p>

---
title: Line Clamp
level: 2
layout: slim-table
---

### Line Clamp

设置文字省略溢出的

---
title: Line Height
level: 2
---

### Line Height

用于控制元素的行距（行高）

相对行高，比如 `leading-normal:line-height: 1.5;`，行高为字体大小的倍数

---
title: List Style Image
level: 2
layout: slim-table
---

### List Style Image

| Class           | Properties              |
| --------------- | ----------------------- |
| list-image-none | list-style-image: none; |

<CanIUseCssProperty cssProperty="list-style-image" />

这个属性的兼容性还可以

这个最常用的就是设置为none，会去掉ul或者ol列表前面的标记，但是也可以设置成图片url

---
title: List Style Position
level: 2
layout: slim-table
---

### List Style Position

是控制列表标记的位置的。

| Class        | Properties                    |
| ------------ | ----------------------------- |
| list-inside  | list-style-position: inside;  |
| list-outside | list-style-position: outside; |

list-inside  

<ul class="!list-inside">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
</ul>

list-outside 似乎是默认值

<ul class="!list-outside ">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
</ul>

---
title: List Style Type
level: 2
layout: slim-table
---

### List Style Type
控制列表的类型，也就是markdown里面两种列表样式

| Class        | Properties                |
| ------------ | ------------------------- |
| list-none    | list-style-type: none;    |
| list-disc    | list-style-type: disc;    |
| list-decimal | list-style-type: decimal; |
