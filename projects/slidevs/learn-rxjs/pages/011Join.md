---
title: Join Operators
level: 1
---

## 合并类操作符

| 功能需求                     | 适用的操作符                |
| ---------------------------- | --------------------------- |
| 把多个数据流已首尾相连的方式合并 | concat和concatAll         |
| 把多个数据流中数据以先到先得方式合并 | merge和mergeAll                           |
| 把多个数据流中数据以一一对应方式合并 | zip和zipAll             |
| 持续合并多个数据流中最新产生的数据 | combineLatest，combineAll和withLatestFrom |
| 从多个数据流中选取第一个产生内容的数据流 | race                    |
| 在数据流前面添加一个指定数据 | startWith                   |
| 只获取多个数据流最后产生的那个数据 | forkJoin |
| 从高阶数据流中切换数据源 | swicth和exhaust        |

---

### concat 首尾相连

```shell
 .\examples\014concat.ts
```

### merge 先到先得快速通过

```shell
 .\examples\015merge.ts
```

concurrent参数可以限流，只合并前concurrent个数据流

merge的应用场景
fromEvent绑定多个事件的情况，比如移动设备上touch事件比click事件先触发，
我们只用merge合并click事件和touch事件，接受最早到达那个，统一处理。

### zip 拉链式组合

zip的英文含义就是拉链，拉链的工作方式两端是一一对应的
这个方法就类似于python的zip

```shell
 .\examples\016zip.ts
```

数据积压问题

如果几个上游吐出数据的速度不一样，快速的数据流就会逐渐积压，造成内存占用。

---

### combineLatest 合并最新数据

```shell
 .\examples\017combineLatest.ts
```

**多重依赖问题**

```mermaid
graph TD
original$ --> source1$
original$ --> source2$
source1$ --> result$
source2$ --> result$
```

会在同一时间出现两个数据，因为数据源是同一个，被认为是"同时产生",可以用withLatestFrom处理这个情况

```shell
 .\examples\018combineLatest2.ts
```

---

### withLatestFrom

类似于combineLatest,但是只能由一个observable pipe调用（实例操作符）
调用的那个observable的数据是主导地位，作为参数的Observable对象只能贡献数据，不能控制产生数据的时机。

也就是调用observable触发的时候才获取数据
这样也就解决了combineLatest多重依赖的问题，因为只有主导的observable对象触发的时候才会获取数据，所以不会出现触发两次的情况。

### race 赢者通吃
也就类似于promise.race

多个Observable对象，谁先产生数据，就由谁来决定结果。其余的会被退订。

### startWith

在数据流前面添加一个指定数据

startWith的功能也可以用concat实现

---

### forkJoin

合并所有参数的最后一个数据

---

## 高阶Observable

一般Observable是返回函数的，高阶Observable返回的仍然是Observable

```shell
 .\examples\023highOrder.ts
```

高阶Observable本质是用管理数据的方式来管理多个Observable对象
下面介绍一些操作高阶Observable的操作符

### concatAll

类似于concat，先订阅第一个Observable，再订阅第二个，以此类推。第一个没有完结就不会订阅下一个。

如果第一个Observable不断产生数据，就会产生积压。

```shell
 .\examples\024concatAll.ts
```

### mergeAll

这个是只要上游产生Observable就订阅

```shell
 .\examples\025mergeAll.ts
```

---

### zipAll

这个是一一对应
会等上游的Observable先完结再开始执行匹配，因为如果上游不完结，无法确定上游的数量，无法确定后续是否产生。
其实就是等上游完结，然后依次行订阅所有Observable，使用zip策略

```shell
 .\examples\025zipAll.ts
```

### combineLatestAll

和zipAll一样也是必须等上游完结，
等上游完结后，订阅所有收集到Observable，使用combineLatest策略

### switchAll
 总是切换到最新的
 每当上游Ob产生一个内部Ob对象，switch就会立刻订阅最新的，如果已经订阅了之前的内部Ob对象，就会退订那个过时的Ob对象

### exhaustAll
不耗尽当前内部Ob的数据之前不会切换到下一个内部Ob  
exhaustAll选择前一个Ob的数据，后一个就会被丢弃
