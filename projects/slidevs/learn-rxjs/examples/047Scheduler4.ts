import { asapScheduler, asyncScheduler, queueScheduler } from 'rxjs'

console.log('before subscribe')
asyncScheduler.schedule(() => console.log('async'))
asapScheduler.schedule(() => console.log('asap'))
queueScheduler.schedule(() => console.log('queue')) //同步执行

console.log('after subscribe')
