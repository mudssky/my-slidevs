type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish //number

let a: A = 2
a = 3

console.log(a)

export {}
