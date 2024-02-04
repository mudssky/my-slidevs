---
title: Transitions & Animation
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Transitions & Animation

---
title: Transition Property
level: 2
layout: slim-table
tableSize: small
---

### Transition Property

过度动画有多种属性可以设置  

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| transition-none      | transition-property: none;                                   |
| transition-all       | transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition           | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-colors    | transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-opacity   | transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-shadow    | transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |
| transition-transform | transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; |

---

给按钮添加颜色过渡动画  

<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white">
  Save Changes
</button>

prefers-reduced-motion是媒体查询，当用户设备上开启了减少动画的设置时，就会匹配到。

<CanIUse src="https://caniuse.com/prefers-reduced-motion" buttonText="can I use prefers-reduced-motion"/>  
<br/>  
<button class="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mt-5 ">
  Hover me
</button>

比如下面这个例子，可能会让患有前庭运动障碍的患者感到不适。可能就是所谓的晕3D吧
用户设置了减少动画以后，通过媒体查询匹配到，就可以减少动画，提升这部分用户的体验

<div class="animation">animated box</div>

<style>
.animation {
  animation: pulse 1s linear infinite both;
  background-color: purple;
}

/* Tone down the animation to avoid vestibular motion triggers. */
@media (prefers-reduced-motion) {
  .animation {
    animation: dissolve 4s linear infinite both;
    background-color: green;
    text-decoration: overline;
  }
}

.animation {
  color: #fff;
  font: 1.2em sans-serif;
  width: 10em;
  padding: 1em;
  border-radius: 1em;
  text-align: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes dissolve {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

</style>

---
title: Transition Duration
level: 2
layout: slim-table
tableSize: small
---

### Transition Duration
过渡动画持续时间

<div class="space-x-5">
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-150 ">
Button A
</button>
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
Button B
</button>
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-700 ">
Button C
</button>
</div>

---
title: Transition Timing Function
level: 2
layout: slim-table
tableSize: small
---

### Transition Timing Function

时间函数  

| Class       | Properties                                                |
| ----------- | --------------------------------------------------------- |
| ease-linear | transition-timing-function: linear;                       |
| ease-in     | transition-timing-function: cubic-bezier(0.4, 0, 1, 1);   |
| ease-out    | transition-timing-function: cubic-bezier(0, 0, 0.2, 1);   |
| ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); |

<div class="space-x-5">
<button class="transition ease-in delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
ease-in
</button>
<button class="transition ease-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
ease-out
</button>
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300 ">
ease-in-out
</button>
</div>

---
title: Transition Delay
level: 2
layout: slim-table
tableSize: small
---

### Transition Delay

过渡动画延迟  

<div class="space-x-5">
<button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300">
delay-150
</button>
<button class="transition ease-in-out delay-300 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300">
delay-300
</button>
<button class="transition ease-in-out delay-700 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-2 rounded text-white duration-300">
delay-700
</button>
</div>

---
title: Animation
level: 2
layout: slim-table
tableSize: small
---

### Animation

内置了一些实用的动画样式  

| Class          | Properties                                                   |
| -------------- | ------------------------------------------------------------ |
| animate-none   | animation: none;                                             |
| animate-spin   | `animation: spin 1s linear infinite; @keyframes spin {  from {    transform: rotate(0deg);  }  to {    transform: rotate(360deg);  } }` |
| animate-ping   | `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping {  75%, 100% {    transform: scale(2);    opacity: 0;  } }` |
| animate-pulse  | `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; @keyframes pulse {  0%, 100% {    opacity: 1;  }  50% {    opacity: .5;  } }` |
| animate-bounce | `animation: bounce 1s infinite; @keyframes bounce {  0%, 100% {    transform: translateY(-25%);    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);  }  50% {    transform: translateY(0);    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);  } }`|

动画默认都是1s  
animate-spin  

<button type="button" class="bg-indigo-500 flex p-2 rounded-lg text-white space-x-2" disabled>
<div class="animate-spin w-[30px] aspect-square  rounded-50 border-[6px] border-solid relative">
<div class="absolute top-[-6px] h-[6px] w-full rounded-full bg-red"></div>
</div>
  <div>Processing...</div>
</button>

---

animate-ping  

<span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>

animate-pulse 淡入淡出，对骨架屏比较实用  

<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-200 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
