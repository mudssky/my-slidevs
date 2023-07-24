// Exclude<UnionType, ExcludedMembers>  把ExcludedMembers中的类型从UnionType中排除构造新类型
/**
 * Exclude from T those types that are assignable to U
 */
// type Exclude<T, U> = T extends U ? never : T;

type T0 = Exclude<'a' | 'b' | 'c', 'a'>

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>

// eslint-disable-next-line @typescript-eslint/ban-types
type T2 = Exclude<string | number | (() => void), Function>
