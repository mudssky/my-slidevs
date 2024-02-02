
---
title: Flexbox & Grid 弹性盒和网格
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Flexbox & Grid 弹性盒和网格

---
title: Flex Basis
level: 2
---

### Flex Basis  

flex-basis 定义元素空间大小，默认是auto, 即元素内容大小。
这样就解释了为什么父元素设置为flex以后，子元素自动排成一排，因为flex-basis默认是auto，他们会自动缩到内容大小  

<div class="[&_div]:(bg-purple-400 rounded p-2) space-x-2  flex flex-row">
  <div class="basis-1/4">01</div>
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div>

---
title: Flex Direction
level: 2
---

### Flex Direction

| Class            | Properties                      |
| ---------------- | ------------------------------- |
| flex-row         | flex-direction: row;            |
| flex-row-reverse | flex-direction: row-reverse;    |
| flex-col         | flex-direction: column;         |
| flex-col-reverse | flex-direction: column-reverse; |

flex-row  

<div class="mt-2 [&_div]:(bg-purple-400 rounded p-2) gap-2 flex flex-row ">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

flex-row-reverse ，完全镜像了。  

<div class="mt-2 [&_div]:(bg-purple-400 rounded p-2) gap-2 flex flex-row-reverse ">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

---
title: Flex Wrap
level: 2
---
### Flex Wrap

这个属性也很好理解

| Class             | Properties               |
| ----------------- | ------------------------ |
| flex-wrap         | flex-wrap: wrap;         |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap       | flex-wrap: nowrap;       |

---
title: Flex
level: 2
---

### Flex
flex 是flex-grow，flex-shrink，flex-basis三个数值的简写
flex-grow是空间多余的情况延伸的比例(取决于其他项目的flex-grow，按照比例分配)，设置为0（默认值）则表示不延伸
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

flex-shrink是空间不足的情况缩短的比例，设置为0则表示不缩短

下面是flex的几种预设值

| Class        | Properties      |
| ------------ | --------------- |
| flex-1       | flex: 1 1 0%;   |
| flex-auto    | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none    | flex: none;     |

---

flex-none 是项目原本的大小，没有伸缩  
flex-initial 可以缩短，但是不延伸,这个也是flex属性的默认值

<div class="flex [&_div]:(bg-blue-400 rounded p-2) mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14 ">
    01 none
  </div>
  <div class="flex-initial w-64 ...">
    02 flex-initial
  </div>
  <div class="flex-initial w-32 ...">
    03 flex-initial
  </div>
</div>

flex-1 这里有多余的空间，所以多余的空间会被两个flex-grow 1的元素均分

<div class="flex [&_div]:(bg-red-400 rounded p-2) mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14 ">
    01 none
  </div>
  <div class="flex-1 w-64 ...">
    02 flex-1
  </div>
  <div class="flex-1 w-32 ...">
    03 flex-1
  </div>
</div>

flex-auto 和flex-1的区别是，会考虑到初始大小，因此会除去初始大小后平分空间，因此初始更大的元素会占据更多的空间

<div class="flex [&_div]:(bg-purple-400 rounded p-2) mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14 ">
    01 none
  </div>
  <div class="flex-auto w-64 ...">
    02 flex-auto
  </div>
  <div class="flex-auto w-32 ...">
    03 flex-auto
  </div>
</div>

---
title: Flex Grow
level: 2
---

### Flex Grow
flex-grow是空间多余的情况延伸的比例(取决于其他项目的flex-grow，按照比例分配)，设置为0（默认值）则表示不延伸
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

| Class  | Properties    |
| ------ | ------------- |
| grow   | flex-grow: 1; |
| grow-0 | flex-grow: 0; |

<div class="flex [&_div]:(bg-cyan-400 rounded p-2) mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14">
    01
  </div>
  <div class="grow h-14">
    02
  </div>
  <div class="flex-none w-14 h-14">
    03
  </div>
</div>

grow-0 的效果，因为flex-basis是默认值auto，按照元素大小来。

<div class="flex [&_div]:(bg-pink-400 rounded p-2) mt-2 gap-2 text-center">
  <div class="grow w-14 h-14">
    01
  </div>
  <div class="grow-0 h-14">
    02
  </div>
  <div class="grow w-14 h-14">
    03
  </div>
</div>

---
title: Flex Shrink
level: 2
---

### Flex Shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

| Class    | Properties      |
| -------- | --------------- |
| shrink   | flex-shrink: 1; |
| shrink-0 | flex-shrink: 0; |

这是原本大小
<div class="flex [&_div]:(bg-indigo-400 rounded p-2) mt-2 gap-2 text-center">
  <div class="flex-none w-14 h-14">
    01
  </div>
  <div class="shrink w-64 h-14">
    02
  </div>
  <div class="flex-none w-14 h-14">
    03
  </div>
</div>  

shrink-0防止收缩  

<div class="flex [&_div]:(bg-blue-400 rounded p-2) mt-2 gap-2 text-center">
  <div class="flex-1 h-16">
    01
  </div>
  <div class="shrink-0 w-64 h-16">
    02
  </div>
  <div class="flex-1 h-16">
    03
  </div>
</div>

---
title: Flex Order
level: 2
---
### Order 排序  

可以定制flex布局的元素顺序  

<div class="flex justify-between [&_div]:(bg-blue-400 rounded p-4) mt-2 gap-2 text-center">
  <div class="order-last">01</div>
  <div>02</div>
  <div>03</div>
</div>

---
title: Grid Template Columns
level: 2
---

### Grid 一些grid栏排列模板
用类似`grid-template-columns: repeat(2, minmax(0, 1fr));`的样式实现分栏。
fr（fraction）是分数单位，minmax是=为长度设置最小值和最大值。  
repeat是减少重复样式书写的，也可以手动把样式写几遍,比如 `grid-template-columns:minmax(0, 1fr) minmax(0, 1fr);`
<div class="grid grid-cols-4 gap-4 [&_div]:(bg-fuchsia-400 rounded p-4 text-center) mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>

---

下面是subgrid的例子  它允许网格项拥有自己的网格，并继承父网格的网格线。  
2023年才开始支持， 暂不建议使用
<CanIUse src="https://caniuse.com/css-subgrid"/>

<div class="grid grid-cols-4 gap-4 [&_div:not(:last-child)]:(bg-fuchsia-400 rounded p-4 text-center) mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div class="grid grid-cols-subgrid gap-4 col-span-3 [&_div]:(bg-pink-400 rounded p-4 text-center)">
  <div class="col-start-2">06</div>
  </div>
</div>

---
title: Grid Column Start / End
level: 2
---
### Grid Column Start / End

 `grid-column: span 2 / span 2` 这个样式可以让grid栏跨越2个栏位。

<div class="grid grid-cols-3 gap-4 [&_div]:(bg-indigo-400 rounded p-4 text-center)">
  <div class="">01</div>
  <div class="">02</div>
  <div class="">03</div>
  <div class="col-span-2">04</div>
  <div class="">05</div>
  <div class="">06</div>
  <div class="col-span-2">07</div>
</div>

---

`grid-column-start`和`grid-column-end`控制起始位置

<div class="grid grid-cols-6 gap-4 [&_div]:(bg-blue-400 rounded p-4 text-center)">
  <div class="col-start-2 col-span-4 ">01</div>
  <div class="col-start-1 col-end-3 ">02</div>
  <div class="col-end-7 col-span-2 ">03</div>
  <div class="col-start-1 col-end-7 ">04</div>
</div>

---
title: Grid Template Rows
level: 2
---

### Grid 一些grid行排列模板

`grid-flow-col` 这个也就是样式`grid-auto-flow:col`,也就是告诉自动放置算法怎么排列项目
因为grid的布局，需要设置grid-template-columns和grid-template-rows，这里也可以用 grid-cols-3代替是一样的效果
<div class="grid grid-rows-4 grid-flow-col gap-4 [&_div]:(bg-pink-400 rounded p-4 text-center) mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>

---
title: Grid Row Start / End
level: 2
---
### Grid Row Start / End

跨行  `grid-row: span 2 / span 2;`

<div class="grid grid-rows-3 grid-flow-col gap-4 [&_div]:(bg-fuchsia-500 rounded p-4 text-center)">
  <div class="row-span-3">01</div>
  <div class="col-span-2">02</div>
  <div class="row-span-2 col-span-2">03</div>
</div>

`grid-row-start`  

<div class="grid grid-rows-3 grid-flow-col gap-4 [&_div]:(bg-blue-500 rounded p-4 text-center)">
  <div class="row-start-2 row-span-2 ">01</div>
  <div class="row-end-3 row-span-2 ">02</div>
  <div class="row-start-1 row-end-4 ">03</div>
</div>

---
title: Grid Auto Flow
level: 2
layout: slim-table
tableSize: small
---

### Grid Auto Flow
用于控制网格中元素如何自动放置

| Class               | Properties                    |
| ------------------- | ----------------------------- |
| grid-flow-row       | grid-auto-flow: row;          |
| grid-flow-col       | grid-auto-flow: column;       |
| grid-flow-dense     | grid-auto-flow: dense;        |
| grid-flow-row-dense | grid-auto-flow: row dense;    |
| grid-flow-col-dense | grid-auto-flow: column dense; |

`grid-auto-flow: row dense;` 告诉自动排序算法，果后面出现较小的项目，则尝试在网格中较早的位置填孔

<div class="grid  grid-cols-3 grid-rows-3 [&_div]:(bg-purple-500 rounded p-3 text-center) gap-4">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>

---
title: Grid Auto Columns
level: 2
layout: slim-table
---
### Grid Auto Columns

用于控制隐式创建的网格列的大小

| Class          | Properties                         |
| -------------- | ---------------------------------- |
| auto-cols-auto | grid-auto-columns: auto;           |
| auto-cols-min  | grid-auto-columns: min-content;    |
| auto-cols-max  | grid-auto-columns: max-content;    |
| auto-cols-fr   | grid-auto-columns: minmax(0, 1fr); |

<div class="grid grid-flow-col auto-cols-max [&_div]:(bg-blue-500 rounded p-3 text-center) gap-4 mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

<div class="grid grid-flow-col auto-cols-fr [&_div]:(bg-blue-500 rounded p-3 text-center) gap-4 mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

---
title: Grid Auto Rows
level: 2
layout: slim-table
---
### Grid Auto Rows
用于控制隐式创建的网格行的大小

| Class          | Properties                      |
| -------------- | ------------------------------- |
| auto-rows-auto | grid-auto-rows: auto;           |
| auto-rows-min  | grid-auto-rows: min-content;    |
| auto-rows-max  | grid-auto-rows: max-content;    |
| auto-rows-fr   | grid-auto-rows: minmax(0, 1fr); |

<div class="grid grid-flow-row auto-rows-max [&_div]:(bg-blue-500 rounded p-3 text-center) gap-4 mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

---
title: Gap
level: 2
---
### Gap

设置行和列的间距 `row-gap` `column-gap`

<div class="grid gap-4 grid-cols-2 [&_div]:(bg-purple-500 rounded p-3 text-center) mt-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>

---
title: Justify Content
level: 2
layout: slim-table
---
### Justify Content

| Class           | Properties                      |
| --------------- | ------------------------------- |
| justify-normal  | justify-content: normal;        |
| justify-start   | justify-content: flex-start;    |
| justify-end     | justify-content: flex-end;      |
| justify-center  | justify-content: center;        |
| justify-between | justify-content: space-between; |
| justify-around  | justify-content: space-around;  |
| justify-evenly  | justify-content: space-evenly;  |
| justify-stretch | justify-content: stretch;       |

---
title: Justify Items
level: 2
layout: slim-table
tableSize: small
---
这些是针对grid布局的参数

| Class                 | Properties              |
| --------------------- | ----------------------- |
| justify-items-start   | justify-items: start;   |
| justify-items-end     | justify-items: end;     |
| justify-items-center  | justify-items: center;  |
| justify-items-stretch | justify-items: stretch; |

justify-items-start  
<div class="grid justify-items-start grid-cols-3 [&_div]:(bg-blue-500 rounded p-2 text-center) mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>
justify-items-end  
<div class="grid justify-items-end grid-cols-3   [&_div]:(bg-cyan-500 rounded p-2 text-center) mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>

---

justify-items-center  

<div class="grid justify-items-center grid-cols-3   [&_div]:(bg-fuchsia-500 rounded p-3 text-center) mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>

justify-items-stretch  

<div class="grid justify-items-stretch grid-cols-3   [&_div]:(bg-blue-500 rounded p-3 text-center) mt-2 gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>

---
title: Justify Self
level: 2
layout: slim-table
---
用于控制单个网格项如何沿其内联轴对齐  
这个和 justify-items系列参数的区别是，它是作用于具体的元素的，而不是所有子元素

| Class                | Properties             |
| -------------------- | ---------------------- |
| justify-self-auto    | justify-self: auto;    |
| justify-self-start   | justify-self: start;   |
| justify-self-end     | justify-self: end;     |
| justify-self-center  | justify-self: center;  |
| justify-self-stretch | justify-self: stretch; |

---
title: Align Content
level: 2
layout: slim-table
---

### Align Content

用于控制行网格容器中的定位方式的实用程序。 这个是垂直方向，控制子元素

| Class            | Properties                    |
| ---------------- | ----------------------------- |
| content-normal   | align-content: normal;        |
| content-center   | align-content: center;        |
| content-start    | align-content: flex-start;    |
| content-end      | align-content: flex-end;      |
| content-between  | align-content: space-between; |
| content-around   | align-content: space-around;  |
| content-evenly   | align-content: space-evenly;  |
| content-baseline | align-content: baseline;      |
| content-stretch  | align-content: stretch;       |

---
title: Align Items
level: 2
layout: slim-table
---
### Align Items

用于控制 Flex 如何沿容器的横轴定位，这个是控制子元素

| Class          | Properties               |
| -------------- | ------------------------ |
| items-start    | align-items: flex-start; |
| items-end      | align-items: flex-end;   |
| items-center   | align-items: center;     |
| items-baseline | align-items: baseline;   |
| items-stretch  | align-items: stretch;    |

---
title: Align Self
level: 2
layout: slim-table
---

## Align Self
控制grid中具体元素

| Class         | Properties              |
| ------------- | ----------------------- |
| self-auto     | align-self: auto;       |
| self-start    | align-self: flex-start; |
| self-end      | align-self: flex-end;   |
| self-center   | align-self: center;     |
| self-stretch  | align-self: stretch;    |
| self-baseline | align-self: baseline;   |

---
title: Place Content
level: 2
layout: slim-table
tableSize: small
---

### Place Content
控制整个内容

| Class                  | Properties                    |
| ---------------------- | ----------------------------- |
| place-content-center   | place-content: center;        |
| place-content-start    | place-content: start;         |
| place-content-end      | place-content: end;           |
| place-content-between  | place-content: space-between; |
| place-content-around   | place-content: space-around;  |
| place-content-evenly   | place-content: space-evenly;  |
| place-content-baseline | place-content: baseline;      |
| place-content-stretch  | place-content: stretch;       |

使用 place-content-center 将项目打包到块轴的中心：  

<div class="grid grid-cols-2 gap-3 place-content-center h-48 [&_div]:(bg-blue-500 rounded p-3 text-center)">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>

---

place-content-between  

<div class="grid grid-cols-2 gap-3 place-content-between h-48 [&_div]:(bg-purple-500 rounded p-3 text-center)">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>

---
title: Place Items
level: 2
layout: slim-table
tableSize: small
---

### Place Items
控制每个项目

| Class                | Properties             |
| -------------------- | ---------------------- |
| place-items-start    | place-items: start;    |
| place-items-end      | place-items: end;      |
| place-items-center   | place-items: center;   |
| place-items-baseline | place-items: baseline; |
| place-items-stretch  | place-items: stretch;  |

place-items-start  

<div class="grid grid-cols-3 gap-4 place-items-start  [&_div]:(bg-purple-500 rounded p-3 text-center)">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>

---

place-items-end  

<div class="grid grid-cols-3 gap-4 place-items-end  [&_div]:(bg-purple-500 rounded p-3 text-center)">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>

---
title: Place Self
level: 2
layout: slim-table
tableSize: small
---
### Place Self
grid布局中 针对特定项目

| Class              | Properties           |
| ------------------ | -------------------- |
| place-self-auto    | place-self: auto;    |
| place-self-start   | place-self: start;   |
| place-self-end     | place-self: end;     |
| place-self-center  | place-self: center;  |
| place-self-stretch | place-self: stretch; |
