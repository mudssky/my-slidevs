interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

interface StringArray {
  [index: number]: string
}

const s: SquareConfig = {
  color: 'sda',
  name: 'zhangsan',
  age: 15,
}
const sa: StringArray = ['112231', '2121']
console.log(s, sa)

export {}
