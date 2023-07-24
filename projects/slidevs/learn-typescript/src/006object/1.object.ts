function greet(person: { name: string; age: number }) {
  console.log('Hello ' + person.name)
}
greet({
  name: 'zhangsan',
  age: 15,
})
