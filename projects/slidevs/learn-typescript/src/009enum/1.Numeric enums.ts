// 1.数字枚举，up初始化为1,后续的会自动增长
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
// 也可以不用初始化器，这样默认的UP就是从0开始
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
console.log(
  'Direction',
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
  Direction
)
// 反向映射
console.log('Up', Direction['1'])
// console.log('Up', Direction[1])
