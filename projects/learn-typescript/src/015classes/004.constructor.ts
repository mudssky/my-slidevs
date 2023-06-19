// class Point {
//   x: number
//   y: number

//   // Normal signature with defaults
//   constructor(x = 0, y = 0) {
//     this.x = x
//     this.y = y
//   }
// }

class Point {
  // Overloads
  constructor(x: number, y: string)
  constructor(s: string)
  constructor(xs: any, y?: any) {
    // TBD
  }
}
export {}
