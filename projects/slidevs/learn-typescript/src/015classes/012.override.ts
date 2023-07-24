class Base {
  greet() {
    console.log('Hello, world!')
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet()
    } else {
      console.log(`Hello, ${name.toUpperCase()}`)
    }
  }
}

const d = new Derived()
d.greet()
d.greet('reader')

// Alias the derived instance through a base class reference
// const b: Base = d;
// No problem
// b.greet();
export {}
