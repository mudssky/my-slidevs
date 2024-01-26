import { interval, map, take } from 'rxjs'
const highOrder$ = interval(1000).pipe(
  take(2),
  map((x) =>
    interval(1500).pipe(
      map((y) => x + ' ' + y),
      take(2),
    ),
  ),
)

highOrder$.subscribe(console.log)
