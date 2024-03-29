import { Observable, PartialObserver, asyncScheduler, observeOn } from 'rxjs'

const observable = new Observable((proxyObserver) => {
  proxyObserver.next(1)
  proxyObserver.next(2)
  proxyObserver.next(3)
  proxyObserver.complete()
}).pipe(observeOn(asyncScheduler))

const finalObserver: PartialObserver<unknown> = {
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err)
  },
  complete() {
    console.log('done')
  },
}

console.log('just before subscribe')
observable.subscribe(finalObserver)
console.log('just after subscribe')
