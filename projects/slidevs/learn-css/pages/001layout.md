
---
title: 布局
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## 布局

---
title: Aspect Ratio
level: 2
layout: slim-table
---
### Aspect Ratio 高宽比

| Class         | Properties            |
| ------------- | --------------------- |
| aspect-auto   | aspect-ratio: auto;   |
| aspect-square | aspect-ratio: 1 / 1;  |
| aspect-video  | aspect-ratio: 16 / 9; |

这个属性chrome 21年才开始支持。目前覆盖率才94%.
不是很适合在项目中使用，还要安装插件解决兼容性问题

<CanIUseCssProperty cssProperty="aspect-ratio" />

参数有两种形式，一个是auto，另一个是宽高的比值形式

<Demo001AspectRatio/>
<style>
   .slidev-layout p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
}
</style>

---
title: Container
level: 2
---

### Container 响应式容器
tailwind中的容器是响应式设计的
<Demo002Container/>

```css
.container {
    width: 100%;
}
@media (min-width: 640px) {
    .container {
        max-width: 640px;
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
}
@media (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}
@media (min-width: 1280px) {
    .container {
        max-width: 1280px;
    }
}
@media (min-width: 1536px) {
    .container {
        max-width: 1536px;
    }
}
```

<style>
 pre{
 @apply !h-[180px] overflow-auto;

 }
</style>

---
title: Column
level: 2
---

### Column
可以设置列数和列宽，是column-with和column-count的结合

```css
columns = 
  <'column-width'>  ||
  <'column-count'>  
```

可以看出他是把子元素数量按列数平分，然后从上到下，从左到右排列
gap可以设置列间隙

<CanIUseCssProperty cssProperty="columns" />
兼容性上，从2016年开始支持，目前覆盖97%，属于可用了，因为flex的一些常用属性也才这个覆盖率。
(我觉得大部分情况还是用flex和grid布局吧，那些更通用)
<Demo003Column />

---
title: Break After
level: 2
---

### Break After

用于控制列或页面在元素之后如何分隔。
#### break-after-column
控制分栏的方式，比如`break-after:column`,设置后，那个元素后会强制分栏
也是和column结合使用的属性

比如下面我在第一个p元素上设置了`break-after:column`，如果设置为auto，应该在第二个元素之后再换栏

<Demo004BreakAfter/>

#### break-after-page
控制打印时分页的样式

因为目前没碰到实用场景，暂时只了解这些，碰到之后再深入了解。

---
title: Break Before
level: 2
---

### Break Before
和Break After 配套的

用于控制列或页面如何在元素之前分隔
`break-before-column`就和之前那个一样，分隔应用于前一个元素
<Demo005BreakBefore/>

---
title: Break Inside
level: 2
---

### Break Inside
用于控制列或页面在元素内的分隔方式

<Demo006BreakInside/>

---
title: Box Decoration Break
level: 2
---
### Box Decoration Break
这个部分支持，甚至chrome里面也不识别，需要添加webkit前缀，不建议使用

控制background, border, border-image, box-shadow, clip-path, margin, and padding等属性在换行时的效果
默认是
`--webkit-box-decoration-break: slice;`
换成 `--webkit-box-decoration-break: clone;`就可以在换行出连续
<CanIUse src="https://caniuse.com/css-boxdecorationbreak" />

下面是边框换行的效果
<Demo007BoxDecoration/>

---
title: Box Sizing
level: 2
layout: slim-table
---
### Box Sizing

| Class       | Properties               |
| ----------- | ------------------------ |
| box-border  | box-sizing: border-box;  |
| box-content | box-sizing: content-box; |

设置盒模型
border-box 元素指定宽或高时包含元素的border和padding
tailwind初始化里面使用的就是border-box。

content-box 则是宽和高只包含元素的内容，不包含border和padding

<Demo008BoxSizing />

---
title: Display
level: 2
layout: slim-table
tableSize: small
---
### Display

display可以设置的属性太多了

| Class        | Properties               |
| ------------------ | ---------------------------- |
| block              | display: block;              |
| inline-block       | display: inline-block;       |
| inline             | display: inline;             |
| flex               | display: flex;               |
| inline-flex        | display: inline-flex;        |
| table              | display: table;              |
| inline-table       | display: inline-table;       |
| table-caption      | display: table-caption;      |
| table-cell         | display: table-cell;         |
| table-column       | display: table-column;       |
| table-column-group | display: table-column-group; |
| table-footer-group | display: table-footer-group; |
| table-header-group | display: table-header-group; |
| table-row-group    | display: table-row-group;    |
| table-row          | display: table-row;          |
| flow-root          | display: flow-root;          |
| grid               | display: grid;               |
| inline-grid        | display: inline-grid;        |
| contents           | display: contents;           |
| list-item          | display: list-item;          |
| hidden             | display: none;               |

<style>
.slidev-layout{
    overflow: auto;
}
</style>

---
layout: two-cols
---

`inline` 、 `inline-block` 和 `block`
行内元素，行内块元素，块元素，是比较的常用的
这个例子就能明显看出区别，inline文字会正常换行
inline-block则是整体包裹住文字
block元素会独占一行

::right::
<Demo009Display1/>

---

`flow-root` ,创建BFC（块级格式化上下文），可以解决margin塌陷问题

<div class="p-4">
  <div class="flow-root bg-red-300">
    <div class="my-4 ">Well, let me tell you something, ...</div>
  </div>
  <div class="flow-root  bg-blue-300">
    <div class="my-4 ">Sure, go ahead, laugh if you want...</div>
  </div>
</div>

---

flex 就不用在这里多说了
`inline-flex` 创建一个随文本流动的内联flex容器

似乎是和inline-box类似，会根据内容决定容器大小。。。
因为没有碰到使用场景，所以demo略了

grid也略

inline-grid， 和inline-flex类似，不会占据一整行，根据内容决定容器大小

<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>
<span class="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>

`contents`, 这个可以创建一个虚拟容器，他本身会隐藏，不会被渲染。但是子级内容不会受到影响(就类似于display:none.但是子级不隐藏)

<div class="flex box-container">
  <div class="flex-1">01</div>
  <div class="contents bg-red-200">
    <div class="flex-1">02</div>
    <div class="flex-1">03</div>
  </div>
  <div class="flex-1">04</div>
</div>

<style>
    .inline-grid span{
        @apply bg-blue-300;
    }
    .box-container div{
        @apply bg-purple-400;
    }
</style>

---

`Table`, table布局以前还有一点应用场景，
这个布局比较繁琐，因此我也不想用

<div class="table w-full ...">
  <div class="table-header-group ...">
    <div class="table-row">
      <div class="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div class="table-cell ...">Malcolm Lockyer</div>
      <div class="table-cell ...">1961</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Witchy Woman</div>
      <div class="table-cell ...">The Eagles</div>
      <div class="table-cell ...">1972</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Shining Star</div>
      <div class="table-cell ...">Earth, Wind, and Fire</div>
      <div class="table-cell ...">1975</div>
    </div>
  </div>
</div>

`display:none` 很实用了。
