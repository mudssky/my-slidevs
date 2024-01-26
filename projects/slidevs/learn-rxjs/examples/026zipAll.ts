import { interval, map, take, tap, zipAll } from 'rxjs'

const start = new Date().getTime()
const highOrder$ = interval(1000).pipe(
  take(2),
  map((x) =>
    interval(1500).pipe(
      map((y) => x + ' ' + y),
      take(2),
      tap(() => {
        const end = new Date().getTime()
        console.log({ time: ((end - start) / 1000).toFixed(1) })
      }),
    ),
  ),
)

highOrder$.pipe(zipAll()).subscribe(console.log)

// 0 0 1+1.5
// 0 1 1+1.5+1.5
