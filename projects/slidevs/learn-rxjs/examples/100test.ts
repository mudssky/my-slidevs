import { filter, interval, map, take } from 'rxjs'
interval(500)
  .pipe(
    // take方法用来限制数据流中的数据个数
    take(5),
    // map方法用来处理数据流中的每个数据
    map((x) => ({ num: x })),
    // filter方法用来过滤数据流中的数据
    filter((x) => x.num % 2 === 0),
  )
  .subscribe((e) => console.log(e))
