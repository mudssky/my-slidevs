class Box<Type> {
  contents: Type
  constructor(value: Type) {
    this.contents = value
  }
}

const b = new Box('hello!')

export {}
