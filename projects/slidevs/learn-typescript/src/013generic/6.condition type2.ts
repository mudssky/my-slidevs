interface IdLabel {
  id: number /* some fields */
}
interface NameLabel {
  name: string /* other fields */
}
function createLabel(id: number): IdLabel
function createLabel(name: string): NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw 'unimplemented'
}
