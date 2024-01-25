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
