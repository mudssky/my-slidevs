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

const b = new Base()
const d = new Derived()
d.printName()
export {}
