// export const name = 'zhangsan'
// export const age = 15
export interface Person {
  name: string
  age: number
}
const name = 'zhangsan'
const age = 15

export { name as username, age }
