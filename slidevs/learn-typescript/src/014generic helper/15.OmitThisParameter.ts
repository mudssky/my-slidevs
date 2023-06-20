// OmitThisParameter<Type>  从Type类型中删除this参数
/**
 * Removes the 'this' parameter from a function type.
 */
// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;

function toHex(this: number) {
  return this.toString(16)
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5)

console.log(fiveToHex())

export {}
