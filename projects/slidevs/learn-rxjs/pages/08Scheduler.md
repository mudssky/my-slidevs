---
title: Scheduler 
level: 1
---

## 什么是Scheduler

可以翻译为调度器
Scheduler控制订阅何时开始以及通知何时传送。它由三个部分组成。

- Scheduler是一种数据结构。它知道如何根据优先级或其他标准存储和排队任务。
- Scheduler是一个执行上下文。它表示任务执行的地点和时间（例如立即执行，或在其他回调机制中，例如 setTimeout 或 process.nextTick，或动画帧）。
- Scheduler有一个（虚拟）时钟。它通过Scheduler上的`now()`方法 提供“时间”的概念。在特定Scheduler上调度的任务将仅遵循该时钟指示的时间。

> Scheduler允许您定义可观察对象将在什么执行上下文中向其观察者传递通知。

---

下面我们使用asyncScheduler
可以观察到，和平时的同步行为不同，就像在setTimeOut里执行一样的效果

```ts twoslash
import { Observable, asyncScheduler, observeOn } from 'rxjs'
const observable = new Observable((observer) => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
}).pipe(observeOn(asyncScheduler))
console.log('just before subscribe')
observable.subscribe({
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err)
  },
  complete() {
    console.log('done')
  },
})
console.log('just after subscribe')
```

```shell
npx tsx .\examples\044Scheduler1.ts
```

asyncScheduler实际上使用了 setTimeout 或 setInterval 进行操作

---

### Scheduler的类型
async 是RxJS提供的内置Scheduler之一。

| **Scheduler**           | 目的                                                         |
| ----------------------- | ------------------------------------------------------------ |
| null                    | 通过不传递任何调度程序，通知将同步且递归地传递。将此用于恒定时间运算或尾递归运算。 |
| queueScheduler          | 在当前事件框架中的队列上进行调度。使用它进行迭代操作。       |
| asapScheduler           | 在微任务队列上进行调度，该队列与用于 Promise 的队列相同。基本上是在当前工作之后，但在下一份工作之前。使用它进行异步转换。 |
| asyncScheduler          | 与 `setInterval` 一起工作。将其用于基于时间的操作。        |
| animationFrameScheduler | 安排在下一次浏览器内容重绘之前发生的任务。可用于创建流畅的浏览器动画。 |

---

### 使用 Scheduler

即使我们没有明确声明Scheduler，实际上已经使用了Scheduler。
这是因为所有处理并发的 Observable 运算符都有可选的调度程序。如果您不提供调度程序，RxJS 将按照最小并发原则选择默认调度程序。这意味着选择引入满足操作符需求的最少并发量的调度程序。例如，对于返回具有有限且少量消息的可观察值的运算符，RxJS 不使用调度程序，即 null 或 undefined 。对于返回可能大量或无限数量消息的操作符，使用 queue 调度程序。对于使用计时器的运算符，使用 async 。

因为 RxJS 使用最少的并发调度程序，所以如果您想出于性能目的引入并发，您可以选择不同的调度程序。要指定特定的调度程序，您可以使用那些采用调度程序的运算符方法，例如 from([10, 20, 30], asyncScheduler) 。

静态创建运算符通常采用调度程序作为参数。例如， from(array, scheduler) 允许您指定在传递从 array 转换的每个通知时要使用的调度程序。它通常是运算符的最后一个参数。以下静态创建运算符采用 Scheduler 参数：

- `bindCallback`
- `bindNodeCallback`
- `combineLatest`
- `concat`
- `empty`
- `from`
- `fromPromise`
- `interval`
- `merge`
- `of`
- `range`
- `throw`
- `timer`

---

使用 subscribeOn 安排 subscribe() 调用将在什么上下文中发生。默认情况下，对 Observable 的 subscribe() 调用将立即同步发生。但是，您可以使用实例运算符 subscribeOn(scheduler) 延迟或安排在给定调度程序上发生的实际订阅，其中 scheduler 是您提供的参数。

使用 observeOn 安排在什么上下文中传递通知。正如我们在上面的示例中看到的，实例运算符 observeOn(scheduler) 在源 Observable 和目标 Observer 之间引入了一个中介 Observer，其中中介使用您给定的 scheduler 安排对目标 Observer 的调用。

**实例运算符可以将调度程序作为参数。**
与时间相关的运算符，例如 bufferTime 、 debounceTime 、 delay 、 auditTime 、 sampleTime 、 throttleTime 、 timeout 、 timeoutWith 、 windowTime 都将 Scheduler 作为最后一个参数，否则默认在 asyncScheduler 。

使用 Scheduler 作为参数的其他实例运算符： cache 、 combineLatest 、 concat 、 expand 、 merge 、 publishReplay 、 startWith 。

```shell
npx tsx .\examples\049Scheduler5.ts
```
