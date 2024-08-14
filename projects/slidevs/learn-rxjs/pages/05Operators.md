---
title: Operators 操作符
level: 1
---

## Operators 操作符

操作符是函数，分为两种

Pipeable Operators，管道操作符，是一种可以使用语法`observableInstance.pipe(operator)`或者`observableInstance.pipe(operatorFactory())`的操作符。当 Pipeable Operators 被调用时，它们不会改变现有的 Observable 实例，本质上这些都是纯函数。operatorFactory操作符工厂是可以使用参数设置上下文来返回operator的函数，工厂的参数也是操作符

Creation Operators ，创建操作符，可以作为独立函数调用来创建新的Observable，比如`of(1, 2, 3)` 创建一个将依次发出 1、2 和 3 的可观察对象。

```ts 
import { of, map } from 'rxjs';
of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));
```

```shell
npx tsx .\examples\005of.ts
```

```shell
npx tsx .\examples\006first.ts
```

---
title:  Piping 管道
level: 2
---

### Piping 管道
Pipeable operators 是函数，可以像普通函数一样使用。比如`op()(obs)`,但是这样使用数量增多以后可读性不高`op4()(op3()(op2()(op1()(obs))))`,所以使用pipe方法来组合这些操作符

```js
obs.pipe(op1(), op2(), op3(), op4());
```

```js
last()(take(2)(of(1, 2, 3))).subscribe((v) => console.log(`value2: ${v}`))
```

```shell
npx tsx .\examples\006first.ts
```

---
title: Creation Operators 创建操作符
level: 2
---
### Creation Operators 创建操作符
创建操作符的典型示例是 interval 函数。它接受一个数字作为输入参数，并生成一个 Observable 作为输出：

```shell
 .\examples\007interval.ts
```

---
title: 高阶可观测值
level: 2
---
### 高阶可观测值

Observables 最常发出普通值，如字符串和数字，也有很多场合要处理发出Observables的场景。

`concatAll()` 操作符订阅来自“外部”Observable 的每个“内部”Observable，并复制所有发出的值，直到该 Observable 完成，然后继续处理下一个。所有值都以这种方式连接起来。

```ts 
import { concatAll, from, map, of } from 'rxjs'
from([1, 2, 3]).pipe(
    map((n) => of(n * 2)),
    concatAll(),
  ).subscribe((x) => console.log(x))
```

```shell
npx tsx .\examples\008highOrderOb.ts
```

其他类似的展平操作符有:

- mergeAll() — 在每个内部 Observable 到达时订阅它，然后在每个值到达时发出它
- switchAll() — 当第一个内部 Observable 到达时订阅它，并在它到达时发出每个值，但当下一个内部 Observable 到达时，取消订阅前一个，并订阅新的。
- exhaustAll() — 当第一个内部 Observable 到达时订阅它，并在到达时发出每个值，丢弃所有新到达的内部 Observable，直到第一个内部 Observable 完成，然后等待下一个内部 Observable。

---
title: Marble diagrams 弹珠图
level: 2
---

### Marble diagrams 弹珠图
了解释操作符如何工作，文本描述通常是不够的。许多操作符都与时间相关，例如，它们可能以不同的方式延迟、采样、节流或去抖值发射。图表通常是更好的工具。 弹珠图可以直观表示操作符的工作。

![弹珠图解析](/images/marble-diagram-anatomy.svg)

<!--
1. 时间流从左向右的流动表示输入Observable的执行过程
2. 这些值是Observable发出来的
3. 这些竖线代表complete通知，他表示Observable已经完成了
4. 这个Observable是操作符调用的输出。
5. X表示输出Observable发出的错误，它表示异常或终止。此后再也不会有值或竖线出现了。
6. 这个盒子代表操作符，它接收输入Observale（上面的），产出输出Observable（下面的）

可以看出这是一个乘10的操作符，遇到非数字输入a后发生错误并终止
-->

---
layout: three-cols-ul
level: 2

---

### Categories of operators 操作符分类

#### Creation Operators
创建类

- [`ajax`](https://rxjs.dev/api/ajax/ajax)
- [`bindCallback`](https://rxjs.dev/api/index/function/bindCallback)
- [`bindNodeCallback`](https://rxjs.dev/api/index/function/bindNodeCallback)
- [`defer`](https://rxjs.dev/api/index/function/defer)
- [`empty`](https://rxjs.dev/api/index/function/empty)
- [`from`](https://rxjs.dev/api/index/function/from)  从数组、类数组对象、Promise、可迭代对象或类 Observable 对象创建 Observable
- [`fromEvent`](https://rxjs.dev/api/index/function/fromEvent) 从dom事件创建
- [`fromEventPattern`](https://rxjs.dev/api/index/function/fromEventPattern)
- [`generate`](https://rxjs.dev/api/index/function/generate) //已弃用
- [`interval`](https://rxjs.dev/api/index/function/interval)
- [`of`](https://rxjs.dev/api/index/function/of)
- [`range`](https://rxjs.dev/api/index/function/range)
- [`throwError`](https://rxjs.dev/api/index/function/throwError)
- [`timer`](https://rxjs.dev/api/index/function/timer)
- [`iif`](https://rxjs.dev/api/index/function/iif)

<style>
ul {
  @apply flex flex-wrap;
  li {
   @apply  w-1/3;
  }
}
</style>

---
hideInToc: true
---

#### Join Creation Operators
连接创建类

- [`combineLatest`](https://rxjs.dev/api/index/function/combineLatest)
- [`concat`](https://rxjs.dev/api/index/function/concat)
- [`forkJoin`](https://rxjs.dev/api/index/function/forkJoin)
- [`merge`](https://rxjs.dev/api/index/function/merge)
- [`partition`](https://rxjs.dev/api/index/function/partition)
- [`race`](https://rxjs.dev/api/index/function/race)
- [`zip`](https://rxjs.dev/api/index/function/zip)

---
layout: three-cols-ul

---

#### Transformation Operators
转化类

- [`buffer`](https://rxjs.dev/api/operators/buffer)
- [`bufferCount`](https://rxjs.dev/api/operators/bufferCount)
- [`bufferTime`](https://rxjs.dev/api/operators/bufferTime)
- [`bufferToggle`](https://rxjs.dev/api/operators/bufferToggle)
- [`bufferWhen`](https://rxjs.dev/api/operators/bufferWhen)
- [`concatMap`](https://rxjs.dev/api/operators/concatMap)
- [`concatMapTo`](https://rxjs.dev/api/operators/concatMapTo)
- [`exhaust`](https://rxjs.dev/api/operators/exhaust)
- [`exhaustMap`](https://rxjs.dev/api/operators/exhaustMap)
- [`expand`](https://rxjs.dev/api/operators/expand)
- [`groupBy`](https://rxjs.dev/api/operators/groupBy)
- [`map`](https://rxjs.dev/api/operators/map)
- [`mapTo`](https://rxjs.dev/api/operators/mapTo)
- [`mergeMap`](https://rxjs.dev/api/operators/mergeMap)
- [`mergeMapTo`](https://rxjs.dev/api/operators/mergeMapTo)
- [`mergeScan`](https://rxjs.dev/api/operators/mergeScan)
- [`pairwise`](https://rxjs.dev/api/operators/pairwise)
- [`partition`](https://rxjs.dev/api/operators/partition)
- [`scan`](https://rxjs.dev/api/operators/scan)
- [`switchScan`](https://rxjs.dev/api/operators/switchScan)
- [`switchMap`](https://rxjs.dev/api/operators/switchMap)
- [`switchMapTo`](https://rxjs.dev/api/operators/switchMapTo)
- [`window`](https://rxjs.dev/api/operators/window)
- [`windowCount`](https://rxjs.dev/api/operators/windowCount)
- [`windowTime`](https://rxjs.dev/api/operators/windowTime)
- [`windowToggle`](https://rxjs.dev/api/operators/windowToggle)
- [`windowWhen`](https://rxjs.dev/api/operators/windowWhen)

---

#### Filtering Operators
过滤类

- [`audit`](https://rxjs.dev/api/operators/audit)
- [`auditTime`](https://rxjs.dev/api/operators/auditTime)
- [`debounce`](https://rxjs.dev/api/operators/debounce)
- [`debounceTime`](https://rxjs.dev/api/operators/debounceTime)
- [`distinct`](https://rxjs.dev/api/operators/distinct)
- [`distinctUntilChanged`](https://rxjs.dev/api/operators/distinctUntilChanged)
- [`distinctUntilKeyChanged`](https://rxjs.dev/api/operators/distinctUntilKeyChanged)
- [`elementAt`](https://rxjs.dev/api/operators/elementAt)
- [`filter`](https://rxjs.dev/api/operators/filter)
- [`first`](https://rxjs.dev/api/operators/first)
- [`ignoreElements`](https://rxjs.dev/api/operators/ignoreElements)
- [`last`](https://rxjs.dev/api/operators/last)
- [`sample`](https://rxjs.dev/api/operators/sample)
- [`sampleTime`](https://rxjs.dev/api/operators/sampleTime)
- [`single`](https://rxjs.dev/api/operators/single)
- [`skip`](https://rxjs.dev/api/operators/skip)
- [`skipLast`](https://rxjs.dev/api/operators/skipLast)
- [`skipUntil`](https://rxjs.dev/api/operators/skipUntil)
- [`skipWhile`](https://rxjs.dev/api/operators/skipWhile)
- [`take`](https://rxjs.dev/api/operators/take)
- [`takeLast`](https://rxjs.dev/api/operators/takeLast)
- [`takeUntil`](https://rxjs.dev/api/operators/takeUntil)
- [`takeWhile`](https://rxjs.dev/api/operators/takeWhile)
- [`throttle`](https://rxjs.dev/api/operators/throttle)
- [`throttleTime`](https://rxjs.dev/api/operators/throttleTime)

---

#### Join Operators
连接类

- [`combineLatestAll`](https://rxjs.dev/api/operators/combineLatestAll)
- [`concatAll`](https://rxjs.dev/api/operators/concatAll)
- [`exhaustAll`](https://rxjs.dev/api/operators/exhaustAll)
- [`mergeAll`](https://rxjs.dev/api/operators/mergeAll)
- [`switchAll`](https://rxjs.dev/api/operators/switchAll)
- [`startWith`](https://rxjs.dev/api/operators/startWith)
- [`withLatestFrom`](https://rxjs.dev/api/operators/withLatestFrom)

#### Multicasting Operators
多播类

- [`multicast`](https://rxjs.dev/api/operators/multicast)
- [`publish`](https://rxjs.dev/api/operators/publish)
- [`publishBehavior`](https://rxjs.dev/api/operators/publishBehavior)
- [`publishLast`](https://rxjs.dev/api/operators/publishLast)
- [`publishReplay`](https://rxjs.dev/api/operators/publishReplay)
- [`share`](https://rxjs.dev/api/operators/share)

#### Error Handling Operators
错误处理类

- [`catchError`](https://rxjs.dev/api/operators/catchError)
- [`retry`](https://rxjs.dev/api/operators/retry)
- [`retryWhen`](https://rxjs.dev/api/operators/retryWhen)

---
layout: three-cols-ul

---

#### Utility Operators
辅助工具类

- [`tap`](https://rxjs.dev/api/operators/tap)
- [`delay`](https://rxjs.dev/api/operators/delay)
- [`delayWhen`](https://rxjs.dev/api/operators/delayWhen)
- [`dematerialize`](https://rxjs.dev/api/operators/dematerialize)
- [`materialize`](https://rxjs.dev/api/operators/materialize)
- [`observeOn`](https://rxjs.dev/api/operators/observeOn)
- [`subscribeOn`](https://rxjs.dev/api/operators/subscribeOn)
- [`timeInterval`](https://rxjs.dev/api/operators/timeInterval)
- [`timestamp`](https://rxjs.dev/api/operators/timestamp)
- [`timeout`](https://rxjs.dev/api/operators/timeout)
- [`timeoutWith`](https://rxjs.dev/api/operators/timeoutWith)
- [`toArray`](https://rxjs.dev/api/operators/toArray)

#### Conditional and Boolean Operators
条件分支类

- [`defaultIfEmpty`](https://rxjs.dev/api/operators/defaultIfEmpty)
- [`every`](https://rxjs.dev/api/operators/every)
- [`find`](https://rxjs.dev/api/operators/find)
- [`findIndex`](https://rxjs.dev/api/operators/findIndex)
- [`isEmpty`](https://rxjs.dev/api/operators/isEmpty)

#### Mathematical and Aggregate Operators
数学和合计类

- [`count`](https://rxjs.dev/api/operators/count)
- [`max`](https://rxjs.dev/api/operators/max)
- [`min`](https://rxjs.dev/api/operators/min)
- [`reduce`](https://rxjs.dev/api/operators/reduce)

---
title: 自定义操作符
level: 2
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080

---

### 创建自定义操作符

#### 使用pipe创建新的操作符
如果有可复用的序列,可以用pipe函数来提取到新的操作符中。

比如，可以创建一个丢弃奇数并将偶数加倍的函数

```ts 
import { pipe, filter, map } from 'rxjs';

function discardOddDoubleEven() {
  return pipe(
    filter((v:number) => !(v % 2)),
    map((v) => v + v)
  );
}
```

```shell
npx tsx .\examples\009discardOddDoubleEven.ts
```

---
hideInToc: true

---

#### 从头创建新的操作符

它更复杂，但如果您必须编写一个不能由现有操作符组合而成的操作符（很少发生），您可以使用 Observable 构造函数从头开始编写一个操作符

1. 订阅输入 Observable 时实现所有三个 Observer 函数 next() 、 error() 和 complete() 。
2. 实现一个“终结”函数，在 Observable 完成时进行清理
3. 从传递给 Observable 构造函数的函数返回该终结函数。

```shell
 .\examples\010delay.ts
```

> 操作符本质上是返回一个全新Observable对象的函数
