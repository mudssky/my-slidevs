import { username, age } from './1. export many'
import type { Person } from './1. export many'
const p: Person = {
  name: username,
  age,
}
console.log({
  username,
  age,
})

console.log(p)
