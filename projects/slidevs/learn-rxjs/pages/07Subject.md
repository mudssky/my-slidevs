---
title: Subject  订阅
level: 1
---

## 什么是Subject

Subject是一种特殊类型的Observable，它允许将值多播到许多观察者。普通 Observable 是单播的（每个订阅的观察者都拥有 Observable 的独立执行），而Subject是多播的。

每个Subject都是一个Observable对象。给你一个Subject，提供一个Observer，Observer就能接收数据，从Observer的角度来看，不能区分Observable是单播还是多播

每个Subject都是Observer，它是一个具有 next(v) 、 error(e) 和 complete() 方法的对象。

也就是说，具有Observer（可使用next发送值）和Observable（可调用subscribe取值）的双重性质

```ts twoslash
import { Subject } from 'rxjs';
const subject = new Subject<number>();
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});
subject.next(1);
subject.next(2);
```

```shell
npx tsx .\examples\033subject.ts
```

---

因为Subject 是Observer，所以可以提供Subject作为任何 Observable 的 subscribe 的参数

```ts twoslash
import { Subject, from } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

const observable = from([1, 2, 3]);

observable.subscribe(subject); // You can subscribe providing a Subject

```

上述方法，本质是通过Subject将单播Observable执行转化为多播。

Subject 类型还有一些特化： BehaviorSubject 、 ReplaySubject 和 AsyncSubject 。

---
title: Multicasted Observables
level: 2
---

### Multicasted Observables 多播可观察量

connect底层执行subscribe，决定共享Observable开始的时间

```ts twoslash
import { Subject, connectable, from } from 'rxjs'

const source = from([1, 2, 3])
const subject = new Subject<any>()
const multicasted = connectable(source, { connector: () => subject })

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})
multicasted.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect()

```

---
title: Reference counting
level: 2
---

### 引用计数

手动调用 connect() 并处理订阅通常很麻烦。通常，我们希望在第一个 Observer 到达时自动连接，并在最后一个 Observer 取消订阅时自动取消共享执行。

1. 第一个Observer订阅多播的Observable
2. 多播Observable已连接
3. next发送0给第一个Observer
4. 第二个Observer订阅多播的Observable
5. next发送1给第一个Observer
6. next发送1给第二个Observer
7. 第一个Observer取消订阅多播的Observable
8. next发送2给第二个Observer
9. 第二个Observer取消订阅多播的Observable
10. 与多播的Observable已取消订阅

```shell
 .\examples\036multicast2.ts
```

---

如果我们希望避免显式调用 connect() ，我们可以使用 ConnectableObservable 的 refCount() 方法（引用计数），该方法返回一个 Observable 来跟踪它有多少订阅者。当订阅者数量从 0 增加到 1 时，它会为我们调用 connect() ，从而启动共享执行。只有当订阅者数量从 1 减少到 0 时才会完全取消订阅，停止进一步执行。

不过refCount v7已经弃用了(multicast 出现3个新的API来替换)
现在推荐适用share来代替这个适用场景

```shell
 .\examples\037multicast3.ts
```

---
title: BehaviorSubject
level: 2
---

### BehaviorSubject

它具有“当前值”的概念。它存储发送给消费者的最新值，每当新的观察者订阅时，它将立即从 BehaviorSubject 接收“当前值”。

```shell
 .\examples\038behaviorSubject.ts
```

---
title: ReplaySubject
level: 2
---

### ReplaySubject
ReplaySubject 与 BehaviorSubject 类似，它可以将旧值发送给新订阅者，但它也可以记录 Observable 执行的一部分。

> ReplaySubject 记录来自 Observable 执行的多个值并将它们重播给新订阅者。

创建 ReplaySubject 时，您可以指定要重播的值的数量：

```shell
 .\examples\039replaySubject.ts
```

除了缓冲区大小之外，您还可以指定以毫秒为单位的窗口时间，以确定记录值的年龄。在下面的示例中，我们使用 100 的大缓冲区大小，但窗口时间参数仅为 500 毫秒。

```shell
 .\examples\040replaySubject2.ts
```

---
title: AsyncSubject
level: 2
---

### AsyncSubject

AsyncSubject 是一种变体，其中仅将 Observable 执行的最后一个值发送给其观察者，并且仅在执行完成时发送。

这个和Promise比较像。

```shell
 .\examples\041asyncSubject.ts
```

---
title: Void subject
level: 2
---
### Void subject

有时，发出的值并不像发出值这一事实那么重要。

比如下面的代码表示一秒已经过去

```ts
const subject = new Subject<string>();
setTimeout(() => subject.next('dummy'), 1000);
```

通过声明一个 void subject，您就表明该值是无关紧要的。只有事件本身才重要。

```ts
const subject = new Subject<void>();
setTimeout(() => subject.next(), 1000);
```
