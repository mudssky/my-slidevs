---
title: 多播
level: 1
---

RxJS提供了一系列操作符用于多播

| 功能需求                     | 适用的操作符     |
| ---------------------------- | ---------------- |
| 灵活选取Subject对象进行多播      | connectable |
| 只多播数据流中最后一个数据 | publishLast(弃用) |
| 对数据流中给定数量的数据进行多播 | publishReplay（弃用）    |
| 拥有默认数据的多播 | publishBehavior（弃用） |

---

在RxJS中，Observable和Observer的关系，就是前者在播放内容，后者在收听内容。播放内容的方式可以分为三种：

1. 单播(unicast)
2. 广播(broadcast)
3. 多播(multicast)

Rxjs主要使用单播和多播，没有提供广播相关的api（这种场景可以使用nodejs的EventEmiter）

---

### Hot与Code数据流差异

RxJS创建类操作符，绝大部分创建的都是Cold Observable对象，也就是说每次subscribe都会从头开始创建一个新的数据流。
比如interval，range

下面几个产生的是Hot Observable

1. fromPromise
2. fromEvent
3. fromEventPattern

不难看出，这些产生Hot Observable对象的操作符数据源都在外部，或者是来自于Promise，或者是来自于DOM，或者是来自于Event Emitter，真正的数据源和有没有Observer没有任何关系。

只有Hot Observable才能实现真正的多播。
如何把Cold Observable变成Hot Observable呢？就要用到Subject

---

### Subject

我们知道，在函数式编程的世界里，有一个要求是保持“不可变性”（Immutable），所以，要把一个Cold Observable对象转换成一个Hot Observable对象，并不是去改变这个Cold Observable对象本身，而是产生一个新的Observable对象，包装之前Cold Observable对象，这样在数据流管道中，新的Observable对象就成为了下游，想要Hot数据源的Observer要订阅的是这个作为下游的Observable对象。要实现这个转化，很明显需要一个“中间人”做串接的事情，这个中间人有两个职责：

1. 中间人要提供subscribe方法，让其他人能够订阅自己的数据源。
2. 中间人要能够有办法接受推送的数据，包括Cold Observable推送的数据。

中间人要能够有办法接受推送的数据，包括Cold Observable推送的数据。
