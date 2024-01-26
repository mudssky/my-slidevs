import { catchError, map, of, range } from 'rxjs'

const throwOnUnluckyNumber = (value: number) => {
  if (value === 4) {
    throw new Error('Bad luck!')
  }
  return value
}

const source$ = range(1, 5)
const error$ = source$.pipe(map(throwOnUnluckyNumber))
const catch$ = error$.pipe(catchError((err) => of(err.message)))

catch$.subscribe(console.log) // "Bad luck!"
console.log({ source$, error$, catch$ })
