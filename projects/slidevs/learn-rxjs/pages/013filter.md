---
title: 过滤类操作符
level: 1
layout: slim-table
tableSize: small
---

## 过滤类操作符

| 功能需求                           | 适用的操作符                                  |
| ---------------------------------- | --------------------------------------------- |
| 过滤掉不满足判定条件的数据         | filter                                        |
| 获得满足判定条件的第一个数据       | first                                         |
| 获得满足判定条件的最后一个数据     | last                                          |
| 从数据流中选取最先出现的若干数据   | take                                          |
| 从数据流中选取最后出现的若干数据   | takeLast                                      |
| 从数据流中忽略最先出现的若干数据   | skip                                          |
| 从数据流中忽略数据直到某种情况发声 | skipWhile,skipUntil                           |
| 基于时间的数据流量筛选             | throttleTime,debounceTime和auditTime          |
| 基于数据内容的数据流量筛选         | throttle，debounce，audit                     |
| 基于采样方式的数据流量筛选         | sample和sampleTime                            |
| 删除重复的数据                     | distinct                                      |
| 删除重复的连续数据                 | distinctUntilChanged和distinctUntilKeyChanged |
| 忽略数据流中的所有数据             | ignoreElements                                |
| 只选取指定出现位置的数据           | elementAt                                     |
| 判断是否只有一个数据满足判定条件   | single                                        |

---

### 回压控制 Back Pressure

类比现实中的管道，从粗管道流入细管道，流速过大就会在细管道处产生方向相反的压力，因为这个压力是往回走的，所以称为回压

一种方式是舍弃一些涌入的数据，这种方式称为”有损回压控制“
