type Point = { x: number; y: number }
type P = keyof Point
//“x” | “y”

let p: P = 'x'
// p = 'z'
p = 'y'
console.log(p)

export {}
