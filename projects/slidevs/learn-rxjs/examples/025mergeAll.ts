import { interval, map, mergeAll, take } from 'rxjs'

const start = new Date().getTime()
const highOrder$ = interval(1000).pipe(
  take(2),
  map((x) =>
    interval(1500).pipe(
      map((y) => {
        const end = new Date().getTime()
        return x + ' ' + y + ' ' + ((end - start) / 1000).toFixed(1)
      }),
      take(2),
    ),
  ),
)

highOrder$.pipe(mergeAll()).subscribe(console.log)

// 0 0 1+1.5
// 0 1 1+1.5+1.5
