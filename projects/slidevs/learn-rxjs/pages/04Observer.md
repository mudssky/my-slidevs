---
title: Observer 观察者
level: 1
---
## Observer 观察者
Observer是Observable(观测值)的消费者

下面是一个典型的Observer 对象的示例：

```js
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
```

传递给subscribe方法使用，三个回调函数对应Observable三种通知类型，如果你不提供回调，对应的执行仍然会发生。

我们也可以只提供一个回调，也就是next

```js
observable.subscribe(x => console.log('Observer got a next value: ' + x));
```
