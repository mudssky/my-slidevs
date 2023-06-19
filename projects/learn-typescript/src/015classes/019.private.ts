class Base {
  private x = 0
}

class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x)
  }
}

const b = new Base()
// Can't access from outside the class
console.log(b.x)

export {}
