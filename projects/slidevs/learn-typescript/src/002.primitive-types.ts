/* eslint-disable @typescript-eslint/no-inferrable-types */
/**
 * 原始数据类型
 */
// 原始数据类型，定义以后只有重新赋值才能修改,区别于引用类型，定义之后能在基础上修改。
const a: string = 'hello'
// 数字，和js一样，都是64位浮点数，支持十进制和十六进制字 ,二进制和八进制字面量
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;
const b: boolean = true
const c: number = 111
// 编译目标低于es2020时不可用
const d: bigint = 120000983300012345090n
const e: null = null
const f: undefined = undefined
// void表示没有任何类型，默认可以赋值 undefined和null,严格模式下只能是 undefined 一种值
// const g: void = undefined

// 这种es6的对象使用会报错，解决方法有两种，
// 1.在tsconfig中把编译目标设置为es2015
// 2.在tsconfig中设置lib为   "lib": ["es2015","dom"], 也就是指定编译中使用的标准库，
// 因为默认它编译目标设置为es5只会用到es5的类型文件，所以产生了报错，这里相当于让他使用es2015的类型文件编译
const h: symbol = Symbol('测试')
// console.log(a, b, c, d, f, g, h)
// es6 对象的简洁表示法，属性名和变量名相同可以简写
console.log({
  a,
  b,
  c,
  d,
  e,
  f,
  h,
})
