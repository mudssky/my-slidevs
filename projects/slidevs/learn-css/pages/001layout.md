
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
---

| Class       | Properties               |
| ----------- | ------------------------ |
| box-border  | box-sizing: border-box;  |
| box-content | box-sizing: content-box; |
