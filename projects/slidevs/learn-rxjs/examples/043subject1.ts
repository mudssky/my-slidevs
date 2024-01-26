import { Subject, map } from 'rxjs'

const subject = new Subject<number>()

const source = subject.pipe(map((x) => x * 2))
const sub1 = source.subscribe({
  next(value) {
    console.log({ value })
  },
  error(err) {
    console.log({ err })
  },
  complete() {
    console.log('on complete')
  },
})

// const sub2 = source.subscribe({
//   next(value) {
//     console.log({ name: 'sub2', value })
//   },
//   error(err) {
//     console.log({ err })
//   },
//   complete() {
//     console.log('on complete')
//   },
// })

subject.next(1)
subject.next(2)
subject.next(3)
subject.complete()
