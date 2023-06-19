// object 类型
// object类型可以接受函数,对象,数组,可以接收除了原始类型以外的其他类型

const foo: object = function () {
  console.log('this is foo')
}
const obj1: object = {
  name: 'zhangsan',
  age: 15,
}
const obj2: object = [1, 2, 3]

console.log({
  foo,
  obj1,
  obj2,
})

// let b: Object = {
//   name: 'zhangsan',
//   age: 15,
// }
// b=1
/** 
Don't use `Object` as a type. The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.
- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.
- If you want a type meaning "any value", you probably want `unknown` instead.eslint@typescript-eslint/ban-types
*/

// let c: {} = {
//   name: 'zhangsan',
//   age: 15,
// }
// c=1
/**
Don't use `{}` as a type. `{}` actually means "any non-nullish value".
- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.
- If you want a type meaning "any value", you probably want `unknown` instead.
- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.eslint@typescript-eslint/ban-types
*/
export {}
