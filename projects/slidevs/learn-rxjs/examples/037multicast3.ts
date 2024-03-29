import { Subject, Subscription, interval, share } from 'rxjs'

const source = interval(500)
const subject = new Subject()
const refCounted = source.pipe(share({ connector: () => subject }))
let subscription1: Subscription, subscription2: Subscription

// This calls `connect()`, because
// it is the first subscriber to `refCounted`
console.log('observerA subscribed')
subscription1 = refCounted.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})

setTimeout(() => {
  console.log('observerB subscribed')
  subscription2 = refCounted.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  })
}, 600)

setTimeout(() => {
  console.log('observerA unsubscribed')
  subscription1.unsubscribe()
}, 1200)

// This is when the shared Observable execution will stop, because
// `refCounted` would have no more subscribers after this
setTimeout(() => {
  console.log('observerB unsubscribed')
  subscription2.unsubscribe()
}, 2000)

// Logs
// observerA subscribed
// observerA: 0
// observerB subscribed
// observerA: 1
// observerB: 1
// observerA unsubscribed
// observerB: 2
// observerB unsubscribed
