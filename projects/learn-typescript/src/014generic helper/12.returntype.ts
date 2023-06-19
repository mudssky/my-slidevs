declare function f1(): { a: number; b: string }

type T0 = ReturnType<() => string>

// ReturnType<Type> 获取函数类型的返回值类型
/**
 * Obtain the return type of a function type
 */
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type T1 = ReturnType<(s: string) => void>

type T2 = ReturnType<<T>() => T>

type T3 = ReturnType<<T extends U, U extends number[]>() => T>

type T4 = ReturnType<typeof f1>

type T5 = ReturnType<any>

type T6 = ReturnType<never>

// type T7 = ReturnType<string>//Type 'string' does not satisfy the constraint '(...args: any) => any'

// type T8 = ReturnType<Function>//Type 'Function' does not satisfy the constraint '(...args: any) => any'
export {}
