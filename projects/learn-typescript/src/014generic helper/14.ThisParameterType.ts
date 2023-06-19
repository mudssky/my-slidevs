// ThisParameterType<Type> 为函数类型提取this参数的类型，如果没有this参数，则为unknown
/**
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter. ts 3.3
 */
// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;

function toHex(this: number) {
  return this.toString(16)
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n)
}

export {}
