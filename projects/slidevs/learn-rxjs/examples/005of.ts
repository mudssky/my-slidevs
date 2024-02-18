import { find, map, of } from 'rxjs'

of(1, 2, 3)
  .pipe(
    map((x) => x * x),
    // last(),
    // 先取前两个，再取最后一个，也就是第二个
    // take(2),
    // last(),
    // 跳过第一个，再取第一个，也就是第二个
    // skip(1),
    // first(),
    // 也可以用find直接查找下标为1，也就是第二个
    find((value, index) => index === 1),
  )
  .subscribe((v) => console.log(`value: ${v}`))

// Logs:
// value: 1
// value: 4
// value: 9
