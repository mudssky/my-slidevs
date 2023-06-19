// Parameters<Type>   从函数类型的参数列表构造一个元组类型
/**
 * Obtain the parameters of a function type in a tuple
 */
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

declare function f1(arg: { a: number; b: string }): void

type T0 = Parameters<() => string>

type T1 = Parameters<(s: string) => void>

type T2 = Parameters<<T>(arg: T) => T>

type T3 = Parameters<typeof f1>

type T4 = Parameters<any>

type T5 = Parameters<never>

// type T6 = Parameters<string> //Type 'string' does not satisfy the constraint '(...args: any) => any'.
// eslint-disable-next-line @typescript-eslint/ban-types
// type T7 = Parameters<Function> //Type 'Function' does not satisfy the constraint '(...args: any) => any'.

export {}
