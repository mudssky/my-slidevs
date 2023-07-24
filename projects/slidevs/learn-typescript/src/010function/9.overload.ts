// 函数声明
function add(x: number, y: number): number
function add(x: string, y: string): string
function add(x: string, y: number): string
function add(x: number, y: string): string

function add(x: string | number, y: string | number) {
  if (typeof x === 'string' || typeof y === 'string') {
    return x.toString() + y.toString()
  }
  return x + y
}

console.log(add(1, 2))
console.log(add('1', '2'))
console.log(add('1', 2))

export {}
