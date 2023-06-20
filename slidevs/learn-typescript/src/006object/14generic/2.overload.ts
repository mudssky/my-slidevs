interface NumberBox {
  contents: number
}
interface StringBox {
  contents: string
}
interface BooleanBox {
  contents: boolean
}

function setContents(box: StringBox, newContents: string): void
function setContents(box: NumberBox, newContents: number): void
function setContents(box: BooleanBox, newContents: boolean): void
function setContents(
  box: { contents: string | number | boolean },
  newContents: string | number | boolean
) {
  box.contents = newContents
}

const box: StringBox = {
  contents: 'this is a box',
}

console.log(box)
setContents(box, 'changed box contents')
console.log(box)

export {}
