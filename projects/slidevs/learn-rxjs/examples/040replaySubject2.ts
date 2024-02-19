import { ReplaySubject } from 'rxjs'

const subject = new ReplaySubject(100, 500 /* windowTime */)

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})

let i = 1
// 这里设置500ms窗口也就是只缓存最后两个
setInterval(() => subject.next(i++), 200)

setTimeout(() => {
  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  })
}, 1000)

// Logs
// observerA: 1
// observerA: 2
// observerA: 3
// observerA: 4
// observerB: 2
// observerB: 3
// observerB: 4
// observerA: 5
// observerB: 5
// observerA: 6
// observerB: 6
// observerA: 7
