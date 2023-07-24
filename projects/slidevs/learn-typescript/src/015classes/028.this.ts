class MyClass {
  name = 'MyClass'
  getName() {
    console.log(this)

    return this.name
  }
}
const c = new MyClass()
const obj = {
  name: 'obj',
  getName: c.getName,
}

// Prints "obj", not "MyClass"
console.log(obj.getName())

// const g = c.getName
// console.log(g())

export {}
