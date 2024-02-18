import { first, last, of, take } from 'rxjs'

of(1, 2, 3)
  .pipe(first())
  .subscribe((v) => console.log(`value: ${v}`))

// Logs:
// value: 1

// pipe是方便串联多个函数的
last()(take(2)(of(1, 2, 3))).subscribe((v) => console.log(`value2: ${v}`))
