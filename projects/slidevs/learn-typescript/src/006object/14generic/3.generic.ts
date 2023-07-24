interface Box<Type> {
  contents: Type
}

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents
}

const box: Box<string> = {
  contents: 'this is a box',
}

console.log(box)
setContents(box, 'changed box contents')
console.log(box)

const box2: Box<number> = {
  contents: 123,
}

console.log(box2)
setContents(box2, 456)
console.log(box2)

export {}
