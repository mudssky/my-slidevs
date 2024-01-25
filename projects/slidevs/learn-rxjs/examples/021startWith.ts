import { map, startWith, timer } from 'rxjs'

timer(1000)
  .pipe(
    map(() => 'timer emit'),
    startWith('timer start'),
  )
  .subscribe((x) => console.log(x))

// results:
// 'timer start'
// 'timer emit'
