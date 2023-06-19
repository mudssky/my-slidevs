const s = 'hello'
let n: typeof s

type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate> //boolean
export { n }
