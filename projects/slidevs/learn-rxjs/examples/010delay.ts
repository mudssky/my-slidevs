import { Observable, of } from 'rxjs'

function delay<T>(delayInMillis: number) {
  return (observable: Observable<T>) =>
    new Observable<T>((subscriber) => {
      // 这个函数在每次subscribed时被调用
      // this function will be called each time this
      // Observable is subscribed to.
      const allTimerIDs = new Set<number>()
      let hasCompleted = false
      const subscription = observable.subscribe({
        next(value) {
          // 每次有新值时，我们都会创建一个新的定时器
          // Start a timer to delay the next value
          // from being pushed.
          const timerID = setTimeout(() => {
            subscriber.next(value)
            //   推送一个值之后，我们清除计时器id
            // after we push the value, we need to clean up the timer timerID
            allTimerIDs.delete(timerID)
            //  如果执行完成，并且没有其他计时器，可以完成这个observable
            // If the source has completed, and there are no more timers running,
            // we can complete the resulting observable.
            if (hasCompleted && allTimerIDs.size === 0) {
              subscriber.complete()
            }
          }, delayInMillis)

          allTimerIDs.add(timerID)
        },
        error(err) {
          // We need to make sure we're propagating our errors through.
          subscriber.error(err)
        },
        complete() {
          hasCompleted = true
          //   如果还有定时器运行，不能完成
          // If we still have timers running, we don't want to complete yet.
          if (allTimerIDs.size === 0) {
            subscriber.complete()
          }
        },
      })

      // 返回终结逻辑，这个会在error或者complete，unsubscribed时调用，
      // Return the finalization logic. This will be invoked when
      // the result errors, completes, or is unsubscribed.
      return () => {
        subscription.unsubscribe()
        // Clean up our timers.
        for (const timerID of allTimerIDs) {
          clearTimeout(timerID)
        }
      }
    })
}

// Try it out!
of(1, 2, 3).pipe(delay(5000)).subscribe(console.log)
