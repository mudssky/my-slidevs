// InstanceType<Type> 构造函数的实例类型
/**
 * Obtain the return type of a constructor function type
 */
// type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

class C {
  x = 0
  y = 0
}

type T0 = InstanceType<typeof C>

type T1 = InstanceType<any>

type T2 = InstanceType<never>

// type T3 = InstanceType<string>
// type T4 = InstanceType<Function>

export {}
