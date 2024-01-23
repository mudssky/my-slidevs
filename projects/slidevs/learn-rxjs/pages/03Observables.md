---
title: Observable
level: 1
---
Observable 是多个值的惰性Push集合

|type | single|multiple|
|---|---|---|
| Pull| Function|Iterator|
| Push| Promise| Observable|

```shell
code ./examples/001observable.ts
```

```shell
npx tsx  ./examples/001observable.ts
```

---
title:  Pull vs Push
level: 2
---

### Pull vs Push
Pull 和 Push 是两种不同的协议，描述了数据生产者如何与数据消费者进行通信。

Pull系统中，消费者决定何时从数据生产者接收数据。生产者本身并不知道数据何时会传递给消费者。
每个 JavaScript 函数都是一个 Pull 系统。该函数是数据的生产者，调用该函数的代码通过从其调用中“拉出”单个返回值来使用它。

ES2015 引入了生成器函数和迭代器 ( function* )，这是另一种类型的 Pull 系统。调用 iterator.next() 的代码是消费者，从迭代器（生产者）“拉”出多个值。

|type | PRODUCER（生产者） |CONSUMER（消费者） |
|---|---|---|
| Pull| Passive（被动：请求时生成数据）|Active（决定何时请求数据）|
| Push| Active（主动：按照自己的节奏生成数据）| Passive（对接收到的数据做出反应）|

Push系统中，生产者决定何时向消费者发送数据。消费者不知道何时会收到该数据。

Promise 是当今 JavaScript 中最常见的 Push 系统类型。 Promise（生产者）将解析值传递给注册的回调（消费者），但与函数不同的是，Promise 负责精确确定该值何时“推送”到回调。

---

RxJS 引入了 Observables，这是一种新的 JavaScript Push系统。 Observable 是多个值的生产者，将它们“推送”给观察者（消费者）。

- Function是一种延迟计算，在调用时同步返回单个值。
- generator是一种延迟计算，在迭代时同步返回0到无限值
- Promise 是一种最终可能（或者不）返回单个值的计算
- Observable 是一种延迟计算，可以同步或者异步返回0到无限值

---
title:   As Function
level: 2
---
### Observables as Function

```js
function foo() {
  console.log('Hello');
  return 42;
}

const x = foo.call(); // same as foo()
console.log(x);
const y = foo.call(); // same as foo()
console.log(y);

// "Hello"
// 42
// "Hello"
// 42
```

```shell
code .\examples\002oservableAsFn.ts
```

```shell
tsx .\examples\002oservableAsFn.ts
```

函数和Observables一样是惰性计算，调用call和订阅subscribe会触发两个单独的副作用

---

Observable 和函数的区别是，Observable可以随着时间的推移返回多个值

函数不能这样做

```js
function foo() {
  console.log('Hello');
  return 42;
  return 100; // dead code. will never happen
}
```
