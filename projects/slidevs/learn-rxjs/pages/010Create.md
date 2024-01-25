---
title: Create Operators
level: 1
---
## 创建类操作符

| 功能需求                     | 适用的操作符                |
| ---------------------------- | --------------------------- |
| 直接操作观察者               | create                      |
| 根据有限的数据产生同步数据流 | of                          |
| 产生一个数值范围的数据       | range                       |
| 以循环方式产生数据           | generate   (已弃用)                 |
| 产生空数据流                 | empty                       |
| 产生直接出错的数据流         | throw                       |
| 间隔给定时间持续产生数据     | interval和timer             |
| 从数组等枚举型数据产生数据流 | from                        |
| 从Promise对象产生数据流      | fromPromise                 |
| 从外部事件对象产生数据流     | fromEvent和fromEventPattern |
| 从AJAX请求结果产生数据流     | ajax                        |
| 延迟产生数据流               | defer                       |

---

### create

和new一个Observable对象是一样的

### of

可以列举同步数据
一般这种情况用数组的方法处理就行了，包装成observable显得多此一举，性能也有影响

### range
产生一个数值范围的数据，不过和python的range不一样，第二个参数是元素个数，且步长特定为1

### empty

产生一个直接完结的Observable对象，没有参数，不产生任何数据

### throwError
产生一个直接出错的Observable对象，参数为错误对象

### never
什么都不做

---

### interval
接受毫秒数，产生一个按照指定间隔从0递增的整数序列

### timer
创建一个 observable，它将等待指定的时间段或确切的日期，然后发出数字 0。

### from
从数组，Promise，迭代器等转化

### formPromise

Promsie对象成功结束时，对应的Observable对象也结束，失败时（reject）则触发失败时间

---

### fromEvent
转换事件源

### fromEventPattern

接受两个函数参数，分别对应产生的Observable对象被订阅和退订的动作。
使用需求较少，一般用在fromEvent没法覆盖的时候。

```shell
 .\examples\013fromEventPattern.ts
```

### ajax
直接发ajax请求。
因为现在一般都封装axios，没什么必要用这个

### defer
延迟到订阅时调用，避免占用资源
