// Partial<Type> 可以将一个type的所有属性设置为可选，也就是可以是undefined

interface Todo {
  title: string
  description: string
  person: {
    name?: string
    age: number
  }
}

/**
 * Make all properties in T optional
 */
// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
export type Pt = Partial<Todo>

export type DeepPartial<T> = {
  // 如果是object，则递归类型
  [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U]
}

export type Ptd = DeepPartial<Todo>

// const  pt: Pt = {
//   person: {
//     name: '12321',
//   },
// }
const ptd: Ptd = {
  person: {
    name: '12321',
  },
}

export {}
