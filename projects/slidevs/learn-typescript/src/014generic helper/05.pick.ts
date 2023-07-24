// 从Type中挑选一组属性key集合来构造一种类型
/**
 * From T, pick a set of properties whose keys are in the union K
 */
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

export {}
