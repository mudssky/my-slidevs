import { range } from 'rxjs'

const start = new Date().getTime()

const source$ = range(1, 100000)
// const source$ = range(1, 100000).pipe(observeOn(asapScheduler, 0))
// const source$ = range(1, 100000).pipe(observeOn(asyncScheduler ))
// const source$ = range(1, 100000).pipe(observeOn(queueScheduler))
console.log('before subscribe')

source$.subscribe({
  complete() {
    console.log(`time elapsed: ${new Date().getTime() - start}ms`)
  },
})

console.log('after subscribe')
