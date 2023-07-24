// const mySum: (x: number, y: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y
// }

// console.log(mySum(1, 2))

function greeter(fn: (a: string) => void) {
  fn('Hello, World')
}

function printToConsole(s: string) {
  console.log(s)
}

greeter(printToConsole)
