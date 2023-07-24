// class Point {
//   x: number;
//   y: number;
// }

// class Point {
//   x!: number
//   y!: number
// }

class Point {
  x = 1
  y = 1
}
const pt = new Point()
pt.x = 0
pt.y = 0
console.log(`${pt.x}, ${pt.y}`)

// pt.x = '2'

export {}
