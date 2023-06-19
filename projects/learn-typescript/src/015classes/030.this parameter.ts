class MyClass {
  name = 'MyClass'
  getName(this: MyClass) {
    return this.name
  }
}
const c = new MyClass()
// OK
c.getName()

// Error, would crash
const g = c.getName
console.log(g())
// const d = {
//   name: 'ddd',
//   getName: c.getName,
// }
// console.log(d.getName())

export {}
