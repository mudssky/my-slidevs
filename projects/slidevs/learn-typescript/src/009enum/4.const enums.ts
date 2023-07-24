//4.const枚举 只能用常量,编译结果直接用常量替换,效率最高
const enum Directions4 {
  Up,
  Down,
  Left,
  Right,
} as const
// console.log('Directions4', Directions4)
console.log('Directions4', Directions4.Up)
