
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
---
### Aspect Ratio 高宽比

这个属性chrome 21年才开始支持。目前覆盖率才94%.
不是很适合在项目中使用，还要安装插件解决兼容性问题

<CanIUseCssProperty cssProperty="aspect-ratio" />

参数有两种形式，一个是auto，另一个是宽高的比值形式

<Demo001AspectRatio/>

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

<Demo003Column />
