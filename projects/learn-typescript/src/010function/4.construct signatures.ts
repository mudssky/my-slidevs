class Person {
  name: string
  constructor(name: string) {
    this.name = name
    return this
  }
}
type PersonConstructor = {
  new (s: string): Person
}

function fn(pc: PersonConstructor) {
  return new pc('hello')
}

const res = fn(Person)
console.log(res)

export {}
