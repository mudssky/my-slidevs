// NonNullable<Type> 从Type中排除undefined和null
/**
 * Exclude null and undefined from T
 */
// type NonNullable<T> = T extends null | undefined ? never : T;

type T0 = NonNullable<string | number | undefined>

type T1 = NonNullable<string[] | null | undefined>

export {}
