class Base {
  greet() {
    console.log('Hello, world!')
  }
}

class Derived extends Base {
  // Make this parameter required
  greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}`)
  }
}

// const b: Base = new Derived();
// Crashes because "name" will be undefined
// b.greet();

export {}
