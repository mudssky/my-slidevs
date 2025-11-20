import { from, mergeMap, retry } from 'rxjs'

// 假设这是你的http请求函数
// 这里用了随机数模拟真实的网络延迟
function httpGet(url: string): Promise<string> {
  return new Promise((resolve, reject) =>
    setTimeout(
      () => {
        if (url === 'https://httpbin.org/user-agent') {
          console.log('request failed')
          reject('User-Agent request failed')
        }
        resolve(`Result: ${url}`)
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
      mergeMap((url) => from(httpGet(url)), maxNum),
      retry({ count: 3, delay: 2000 }), //还可添加错误重试
    ) //将每个值映射到一个 Observable，然后使用 mergeAll 展平所有这些内部 Observable。
    .subscribe(console.log)
}

multiRequest(urlList, 2)

function multiRequestPromise(urls = [], maxNum: number = 2) {
  // 请求总数量
  const length = urls.length // 根据请求数量创建一个数组来保存请求的结果
  const result = new Array(length).fill(false) // 当前完成的数量
  let count = 0

  return new Promise((resolve, reject) => {
    function next() {
      const current = count++ // 处理边界条件
      if (current >= length) {
        // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
        !result.includes(false) && resolve(result)
        return
      }
      const url = urls[current]
      console.log(`开始 ${current}`, new Date().toLocaleString())
      fetch(url)
        .then((res) => {
          // 保存请求结果
          result[current] = res
          console.log(`完成 ${current}`, new Date().toLocaleString()) // 请求没有全部完成, 就递归
          if (current < length) {
            next()
          }
        })
        .catch((err) => {
          console.log(`结束 ${current}`, new Date().toLocaleString())
          result[current] = err // 请求没有全部完成, 就递归
          if (current < length) {
            next()
          }
        })
    }
    // 请求maxNum个
    while (count < maxNum) {
      next()
    }
  })
}
