---
title: 实战案例 
level: 1
---


## 01.并发控制

面试题中经常见到的，实现一个批量请求函数，有一个maxNum参数用于控制最大并发数。

这个需求如果手写Promise代码会有很多，
但是用rxjs，一行就能解决

```ts
function multiRequest(list: string[], maxNum: number = 2) {
  return from(list)
    .pipe(
      mergeMap((url) => from(httpGet(url)), maxNum),
      //retry({ count: 3, delay: 2000 }), //还可添加错误重试
    ) 
    .subscribe(console.log)
}

```

总的来说Promise不好处理的一些异步场景，可以考虑使用rxjs

---

## 02.事件处理

下面是搜索框用户输入的例子

```ts
  fromEvent<KeyboardEvent>(searchRef.value, 'keyup')
    .pipe(
      map((e: any) => e.target.value), // 获取输入值
      debounceTime(500), // 等待 500ms，如果没有新的输入则继续
      distinctUntilChanged(), // 只有当输入值变化时才继续
      switchMap((searchTerm: string) => handleSearch(searchTerm)), // 执行搜索操作
    )
    .subscribe((data) => {
      console.log({ data })
    })
```

<Demo005SearchInput/>

## 03
