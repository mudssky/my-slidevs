---
title: 动画
level: 1
layout: center
---
# 12.动画

---
title: 动画的基本步骤
level: 2
hideInToc: true
---
## 动画的基本步骤
按照以下的步骤绘制每一帧

1. 清空 canvas 除非接下来要画的内容会完全充满 canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。
2. 保存 canvas 状态 如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
3. 绘制动画图形（animated shapes） 这一步才是重绘动画帧。
4. 恢复 canvas 状态 如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。

---
title: 更新动画
level: 2
hideInToc: true
---

## 更新动画

为了实现动画，我们需要一些可以定时执行重绘的方法。
`setInterval(function, delay)` 当设定好间隔时间后，function 会定期执行。
`setTimeout(function, delay)` 在设定好的时间之后执行函数
`requestAnimationFrame(callback)` 告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

<v-clicks>

<Demo017AnimationSolarSystem />

</v-clicks>

---

## 时钟案例

<Demo018AnimationsClock />

---

## 循环全景照片案例

<Demo019AnimationsNationalPark />

---

## 小球案例

<Demo020Ball />
