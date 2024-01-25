---
title: Introduction
level: 1
---

## Introduction
RxJS 是一个使用可观察序列编写异步和基于事件的程序的库。它提供了一种核心类型，即 Observable,satellite类型（Observer, Schedulers, Subjects）,还有受array方法启发的操作符(map,filter,reduce,every等以允许将异步事件作为集合处理。)  
RxJs中有以下基本概念  

- Observable：代表未来值或事件的可调用集合。
- Observer：是一个回调集合，它知道如何监听 Observable 传递的值。
- Subscription：订阅代表 Observable 的执行，主要用于取消执行。
- Operators： 操作符 是纯函数，支持使用函数式编程风格处理集合，例如 map 、 filter 、 concat 、 reduce
- Subject： 相当于EventEmitter，是向多个Observers多播一个值或事件的唯一方式。
- Schedulers：  是控制并发的集中调度程序，允许我们在计算发生时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。

---
title: Purity 第一个例子
level: 2
---

### 第一个例子

```ts
  overview1.value.addEventListener('click', () => {
    alert('overview1 clicked')
  })
// 使用Rxjs的各种方法比如fromEvent可以创建一个observable对象
  fromEvent(overview2.value, 'click').subscribe(() => {
    alert('overview2 clicked')
  })
```

<Demo001Overview/>

---
title: Purity 纯函数
level: 2
---

### Purity 纯函数

RxJS 的强大之处在于它能够使用纯函数生成值。这意味着您的代码不太容易出错。

scan 函数和数组的reduce类似，它接受一个初始值和一个函数，然后每次调用函数时都会将前一次调用的结果作为参数传递给下一次调用。

```ts
onMounted(() => {
  fromEvent(btn.value, 'click')
    .pipe(scan((count) => count + 1, 0))
    .subscribe((count) => toast(`Clicked ${count} times`))
})
```

非纯函数的场合：

```ts
let count = 0;
btn.value.addEventListener('click', () => console.log(`Clicked ${++count} times`));
```

<Demo002Purity />

---
title: Flow 流操作符
level: 2
---
### Flow 流操作符
RxJS 拥有一整套操作符，可以帮助您控制事件如何流经您的可观察对象。

这是纯js控制每秒最多点击一次的方式(节流)

```js
let count = 0;
let rate = 1000;
let lastClick = Date.now() - rate;
document.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();}
});

```

<v-click>

```ts
// 使用rxjs
  fromEvent(btn.value, 'click')
    .pipe(
      throttleTime(2000),
      scan((count) => count + 1, 0),
    )
    .subscribe((count) => toast(`Clicked ${count} times`, 500))

// 其他流量控制操作符有filter、delay、debounceTime、take、takeUntil、distinct、distinctUntilChanged等

```

<Demo003Flow/>

</v-click>

---
title: Values 产生值
level: 2
---

## Values 产生值

以下是如何使用纯 JavaScript 为每次点击添加当前鼠标 x 位置：

```js
let count = 0;
const rate = 1000;
let lastClick = Date.now() - rate;
document.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count);
    lastClick = Date.now();
  }
});
```

```ts
// 使用rxjs
fromEvent<MouseEvent>(btn.value, 'click')
    .pipe(
      throttleTime(1000),
      map((event) => event.clientX),
      scan((count, clientX) => count + clientX, 0),
    )
    .subscribe((count) => toast(`${count}`, 2000))
// 其他产生值的操作符有 pluck、pairwise、sample 等
```

<Demo004Values/>

---

函数式编程（Functional Programming）
函数式编程的特点是允许把函数当成一个实参或返回值，主要思想是想将复杂的运算分解成一系列嵌套的函数，逐层推导，不断渐进，直至完成运算。常用的数组方法（map，filter等）就运用了函数式编程的思想。

响应式编程或反应式编程（Reactive programming）
是一种面向数据流和变化传播的声明式编程范式。这意味着可以在编程语言中很方便地表达静态或动态的数据流，而相关的计算模型会自动将变化的值通过数据流进行传播。
