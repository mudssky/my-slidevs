import { filter, map, of, pipe } from 'rxjs'

function discardOddDoubleEven() {
  return pipe(
    filter((v: number) => !(v % 2)),
    map((v) => v + v),
  )
}

of(...[1, 2, 3, 4, 5, 6, 7])
  .pipe(discardOddDoubleEven())
  .subscribe((item) => {
    console.log({ item })
  }) // [4, 8, 12]
