
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
