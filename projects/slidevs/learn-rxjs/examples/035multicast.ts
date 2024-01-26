import { Subject, connectable, from } from 'rxjs'

const source = from([1, 2, 3])
const subject = new Subject<any>()
const multicasted = connectable(source, { connector: () => subject })

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})
multicasted.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

// This is, under the hood, `source.subscribe(subject)`:
const subscription = multicasted.connect()

// 可以取消订阅
subscription.unsubscribe()
