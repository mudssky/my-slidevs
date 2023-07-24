// Readonly<Type> 将类型的属性变成只读
/**
 * Make all properties in T readonly
 */
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P]
// }
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
}

todo.title = 'Hello'
