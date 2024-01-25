import { map, timer, withLatestFrom } from 'rxjs'

const original$ = timer(0, 1000)
const source1$ = original$.pipe(map((val) => `source1: ${val}`))
const source2$ = original$.pipe(map((val) => `source2: ${val}`))

const result$ = source1$.pipe(withLatestFrom(source2$))

result$.subscribe(console.log)
