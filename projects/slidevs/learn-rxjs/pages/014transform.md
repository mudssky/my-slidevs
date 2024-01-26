---
title: 转化类操作符
level: 1
---

## 转化类操作符

| 功能需求                           | 适用的操作符                                          |
| ---------------------------------- | ----------------------------------------------------- |
| 将每个元素用映射函数产生新的数据   | map                                                   |
| 将数据流中每个元素映射为同一个数据 | mapTo                                                 |
| 抽取数据流中每个数据的某个字段     | pluck                                                 |
| 产生高阶Observable对象             | windowTime,windowCount,windowWhen,windowToggle,window |
| 产生数组构成的数据流               | bufferTime,bufferCount,bufferWhen,bufferToggle,buffer |
| 映射产生高阶Observable对象然后合并 | concatMap,mergeMap,switchMap,exhaustMap               |
| 产生规约运算结果组成的数据流       | scan和mergeScan                                       |

---

### 缓存窗口，无损回压控制

buffer系列操作符，把上游数据放在数组中传给下游的操作符

window系列操作符，把上游数据放在Observable中传给下游的操作符
