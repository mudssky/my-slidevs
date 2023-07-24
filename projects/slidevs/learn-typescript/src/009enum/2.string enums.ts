// 2.字符换枚举,用字符串字面量可以增加可读性
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

console.log(
  'Direction2',
  Direction2.Up,
  Direction2.Down,
  Direction2.Left,
  Direction2.Right
)
console.log(Direction2)

// 字符串枚举没有反向映射
// console.log('Up2', Direction2['UP'])
