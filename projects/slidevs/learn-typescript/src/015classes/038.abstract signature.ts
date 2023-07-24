abstract class Base {
  abstract getName(): string

  printName() {
    console.log('Hello, ' + this.getName())
  }
}

class Derived extends Base {
  getName() {
    return 'world'
  }
}
// function greet(ctor: typeof Base) {
//   const instance = new ctor()

//   instance.printName()
// }

function greet(ctor: new () => Base) {
  const instance = new ctor()
  instance.printName()
}
greet(Derived)
greet(Base)
export {}
