import { catchError, from, mergeMap, retry } from 'rxjs'

// 假设这是你的http请求函数
// 这里用了随机数模拟真实的网络延迟
function httpGet(url: string): Promise<string> {
  return new Promise((resolve, reject) =>
    setTimeout(
      () => {
        resolve(`Result: ${url}`)

        if (url === 'https://httpbin.org/user-agent') {
          //   reject('User-Agent request failed')
          throw new Error('User-Agent request failed')
        }
      },
      //   Math.floor(Math.random() * 5000),
      2000,
    ),
  )
}

const urlList = [
  'https://httpbin.org/ip',
  'https://httpbin.org/user-agent',
  'https://httpbin.org/delay/3',
  'https://httpbin.org/abnet',
  'https://httpbin.org/s',
]

// from(urlList)
//   .pipe(
//     map((url) => from(httpGet(url))),//先调用map，映射promise到Observable对象
//     mergeAll(2),// mergeAll可以控制多个Observable的并发,它的数据流是先来后到的顺序
//   )
//   .subscribe(console.log)

//上面的代码可以简化为mergeMap

function multiRequest(list: string[], maxNum: number = 2) {
  return from(list)
    .pipe(
      mergeMap(
        (url) =>
          from(httpGet(url)).pipe(
            catchError((err) => {
              console.log(err)
              return from(httpGet(url))
            }),
            retry(3),
          ),
        maxNum,
      ),
    ) //将每个值映射到一个 Observable，然后使用 mergeAll 展平所有这些内部 Observable。

    .subscribe(console.log)
}

multiRequest(urlList, 2)
