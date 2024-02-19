import { merge, of } from 'rxjs'

// const a = of(1, 2, 3).pipe(subscribeOn(asyncScheduler))
const a = of(1, 2, 3)
const b = of(4, 5, 6)
// 通过将多个 Observable 的值混合到一个 Observable 中，将多个 Observable 扁平化在一起。
merge(a, b).subscribe(console.log)
