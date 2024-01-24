import { concatAll, from, map, of } from 'rxjs'

from([1, 2, 3])
  .pipe(
    map((n) => of(n * 2)),
    concatAll(),
  )
  .subscribe((x) => console.log(x))

// 输出:
// 2
// 4
// 6
