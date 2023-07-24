// Extract<Type, Union> 从Type联合类型中提取可分配给Union的联合类型
/**
 * Extract from T those types that are assignable to U
 */
// type Extract<T, U> = T extends U ? T : never;

type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>

// eslint-disable-next-line @typescript-eslint/ban-types
type T1 = Extract<string | number | (() => void), Function>

export {}
