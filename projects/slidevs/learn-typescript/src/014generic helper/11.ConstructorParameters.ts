// ConstructorParameters<Type> 从构造函数的参数列表创建一个类型。
/**
 * Obtain the parameters of a constructor function type in a tuple
 */
// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

type T0 = ConstructorParameters<ErrorConstructor>

type T1 = ConstructorParameters<FunctionConstructor>

type T2 = ConstructorParameters<RegExpConstructor>

type T3 = ConstructorParameters<any>

// type T4 = ConstructorParameters<Function>
export {}
