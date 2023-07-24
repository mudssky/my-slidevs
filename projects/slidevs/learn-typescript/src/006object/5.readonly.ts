interface Point {
  x: number
  readonly y: number
}

const p: Point = { x: 1, y: 2 }

p.x = 2
p.y = 3
// Cannot assign to 'y' because it is a read-only property
export {}
