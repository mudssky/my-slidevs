// 3.异构枚举（Heterogeneous enums） 可以混合使用字符串和数字
enum Direction3 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 1,
  Right = 2,
}

console.log(
  'Direction3',
  Direction3.Up,
  Direction3.Down,
  Direction3.Left,
  Direction3.Right,
  Direction3
)
