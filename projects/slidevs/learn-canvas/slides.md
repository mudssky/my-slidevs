---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
hideInToc: true
record: dev
---


# canvas 教程

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>
<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
</div>

---
hideInToc: true
---

## 目录

<Toc columns="4" />

---
title: 什么是canvas?
level: 1
layout: center
---
## 00.什么是canvas？

Canvas API 提供了一个通过JavaScript 和 HTML的`<canvas>`元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

Canvas API 主要聚焦于 2D 图形。而同样使用`<canvas>`元素的 WebGL API 则用于绘制硬件加速的 2D 和 3D 图形。

兼容性：

<https://caniuse.com/canvas>

---
title: Hello canvas
level: 1
---
## 01.hello canvas

```ts
  // 1. 获取canvas dom对象
  const canvasDom = <HTMLCanvasElement>document.getElementById('canvas')
  // 2、从HTMLCanvasElement获取上下文环境对象context
  const ctx = canvasDom.getContext('2d')!
  // 3. 绘制图形
  ctx.moveTo(80, 55) //左上角为坐标起点0.0
  ctx.lineTo(900, 150)
  ctx.stroke()

  // 绘制矩形
  ctx.fillStyle = 'green'
  ctx.fillRect(50, 250, 400, 100)
  // 绘制文字
  ctx.fillStyle = 'purple'
  ctx.font = '50px Arial'
  ctx.fillText('hello canvas', 200, 400, 400) 

```

canvas 的默认大小为`300*150` px,可以使用html的高度和宽度属性自定义Canvas的尺寸

---
hideInToc: true
---

<Demo001HelloCanvas/>

---
hideInToc: true
---

<Demo002Shape/>

---
hideInToc: true
---

<Demo003Colors width="400"/>

---
hideInToc: true
---

<Demo004LineStyle />

---
hideInToc: true
---

<Demo005Gradients/>

---
hideInToc: true
---

<Demo006Patterns/>

---
hideInToc: true
---

<Demo007Shadows/>

---
hideInToc: true
---

<Demo008WindingRule/>

---
hideInToc: true
---

<Demo009Text/>

---
hideInToc: true
---

<Demo010Image/>

---
hideInToc: true
---

<Demo011Restore/>

---
hideInToc: true
---

<Demo012Translate/>

---
hideInToc: true
---

<Demo013Rotate/>

---
hideInToc: true
---

<Demo014Scale/>
