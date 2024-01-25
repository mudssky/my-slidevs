import { concat, interval, range, take } from 'rxjs'

const timer = interval(1000).pipe(take(4))
const sequence = range(1, 10)
const result = concat(timer, sequence)
// const result = concat(sequence, timer)
result.subscribe((x) => console.log(x))
