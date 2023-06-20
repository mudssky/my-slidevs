interface IdLabel {
  id: number /* some fields */
}
interface NameLabel {
  name: string /* other fields */
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented'
}
const a = createLabel('typescript')
//NameLabel
const b = createLabel(2.8)
//IdLabel
const c = createLabel(Math.random() ? 'hello' : 42)
// NameLabel | IdLabel

console.log({
  a,
  b,
  c,
})

export {}
