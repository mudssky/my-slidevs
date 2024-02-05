---
title: Backgrounds
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Backgrounds

---
title: Background Attachment
level: 2
---

### Background Attachment

| Class     | Properties                     |
| --------- | ------------------------------ |
| bg-fixed  | background-attachment: fixed;  |
| bg-local  | background-attachment: local;  |
| bg-scroll | background-attachment: scroll; |

bg-fixed 背景图片相对于视口固定，不会随滚动条滚动而滚动。可以做一些视差效果

<div class="max-w-lg mx-auto h-80 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg" style="background-image:url('/assets/dust-mountain.webp'); background-position: center -80px;" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2">
    <div class="mt-40" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2">
      <div class="bg-white p-4 sm:p-8" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2">
        <div class="font-inter font-extrabold text-2xl text-black tracking-tight" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">My trip to the summit</div>
        <div class="mt-1 font-medium text-sm text-slate-500" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">November 16, 2021 · 4 min read</div>
        <p class="mt-4 leading-7 text-slate-500" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?</p>
        <p class="mt-4 leading-7 text-slate-500" data-immersive-translate-walked="fa59d778-8f3f-44a4-af7c-5473f68357f2" data-immersive-translate-paragraph="1">Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
      </div>
    </div>
  </div>

使用 `bg-local` 使背景图像与容器和视口一起滚动。  

使用 `bg-scroll` 随视口滚动背景图像，但不随容器滚动。

---
title: Background Clip
level: 2

layout: slim-table
---

### Background Clip 背景裁剪

用于控制元素背景边界框

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-clip-border  | background-clip: border-box;  |
| bg-clip-padding | background-clip: padding-box; |
| bg-clip-content | background-clip: content-box; |
| bg-clip-text    | background-clip: text;        |

可以裁剪边框，内容，或者padding
<div class="flex space-x-5 [&_div]:(w-[100px])">
<div class="bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
<div class="bg-clip-padding p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
<div class="bg-clip-content p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
</div>

可以使用 bg-clip-text 裁剪背景匹配文本的形状

<div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Hello world
  </span>
</div>

---
title: Background Color
level: 2
layout: slim-table
---

### Background Color

背景颜色就不用多说了

---
title: Background Origin
level: 2
layout: slim-table
---

### Background Origin

用于控制元素背景相对于边框、填充和内容的定位方式

| Class             | Properties                      |
| ----------------- | ------------------------------- |
| bg-origin-border  | background-origin: border-box;  |
| bg-origin-padding | background-origin: padding-box; |
| bg-origin-content | background-origin: content-box; |

---
title: Background Position
level: 2
layout: slim-table
---

### Background Position

用于控制元素背景图像位置  

| Class           | Properties                         |
| --------------- | ---------------------------------- |
| bg-bottom       | background-position: bottom;       |
| bg-center       | background-position: center;       |
| bg-left         | background-position: left;         |
| bg-left-bottom  | background-position: left bottom;  |
| bg-left-top     | background-position: left top;     |
| bg-right        | background-position: right;        |
| bg-right-bottom | background-position: right bottom; |
| bg-right-top    | background-position: right top;    |
| bg-top          | background-position: top;          |

---
title: Background Repeat
level: 2
layout: slim-table
---

### Background Repeat

| Class           | Properties                    |
| --------------- | ----------------------------- |
| bg-repeat       | background-repeat: repeat;    |
| bg-no-repeat    | background-repeat: no-repeat; |
| bg-repeat-x     | background-repeat: repeat-x;  |
| bg-repeat-y     | background-repeat: repeat-y;  |
| bg-repeat-round | background-repeat: round;     |
| bg-repeat-space | background-repeat: space;     |

---
title: Background Size
level: 2
layout: slim-table
---

### Background Size

用于控制元素背景图像的背景大小

| Class      | Properties                |
| ---------- | ------------------------- |
| bg-auto    | background-size: auto;    |
| bg-cover   | background-size: cover;   |
| bg-contain | background-size: contain; |

---
title: Background Image
level: 2
layout: slim-table
---

这个是设置背景图片，可以设置url
预设了一些渐变效果

| Class             | Properties                                                   |
| ----------------- | ------------------------------------------------------------ |
| bg-none           | background-image: none;                                      |
| bg-gradient-to-t  | background-image: linear-gradient(to top, var(--tw-gradient-stops)); |
| bg-gradient-to-tr | background-image: linear-gradient(to top right, var(--tw-gradient-stops)); |
| bg-gradient-to-r  | background-image: linear-gradient(to right, var(--tw-gradient-stops)); |
| bg-gradient-to-br | background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); |
| bg-gradient-to-b  | background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); |
| bg-gradient-to-bl | background-image: linear-gradient(to bottom left, var(--tw-gradient-stops)); |
| bg-gradient-to-l  | background-image: linear-gradient(to left, var(--tw-gradient-stops)); |
| bg-gradient-to-tl | background-image: linear-gradient(to top left, var(--tw-gradient-stops)); |

---

<div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
<div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
<div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
<div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>

---
title: Gradient Color Stops
level: 2
layout: slim-table
---

### Gradient Color Stops

配置渐变的颜色节点。

可以配置多个颜色节点

<div class="h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
