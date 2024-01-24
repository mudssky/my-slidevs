import { interval, map, take } from 'rxjs'

const observable = interval(1000 /* number of milliseconds */).pipe(
  map((x) => x * 1000),
  take(4),
)

observable.subscribe((item) => {
  console.log({ item })
})
