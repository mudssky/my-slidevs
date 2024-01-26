import { Subject } from 'rxjs'

const subject = new Subject<void>() // Shorthand for Subject<void>

subject.subscribe({
  next: () => console.log('One second has passed'),
})

setTimeout(() => subject.next(), 1000)
