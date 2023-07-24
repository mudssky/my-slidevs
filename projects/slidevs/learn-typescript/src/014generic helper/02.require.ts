// Required<Type> 将类型的属性变成必选
/**
 * Make all properties in T required
 */
// type Required<T> = {
//     [P in keyof T]-?: T[P]
// };

interface Props {
  a?: number
  b?: string
}

const obj: Props = { a: 5 }

const obj2: Required<Props> = { a: 5 }

export {}
