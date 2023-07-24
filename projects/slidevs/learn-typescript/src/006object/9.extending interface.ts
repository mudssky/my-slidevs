interface PointX {
  x: number
}
interface Point extends PointX {
  y: number
}

const p: Point = {
  x: 1,
  y: 2,
}

console.log(p)

export {}
