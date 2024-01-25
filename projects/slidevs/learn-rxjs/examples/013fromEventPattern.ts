import event from 'events'
import { fromEventPattern } from 'rxjs'
const emitter = new event.EventEmitter()

const addHandler = (handler: (...args: any[]) => void) => {
  emitter.addListener('msg', handler)
}

const removeHandler = (handler: (...args: any[]) => void) => {
  emitter.removeListener('msg', handler)
}

const source$ = fromEventPattern(addHandler, removeHandler)

const subscription = source$.subscribe({
  next: console.log,
  error: (error) => console.error(error),
  complete: () => console.log('complete'),
})

emitter.emit('msg', 'Hello')
emitter.emit('msg', 'World!')

subscription.unsubscribe() // 取消订阅
emitter.emit('msg', 'Hello again') // 不再输出
