interface Person {
  name: string
  age?: number
}

function printPerson(p: Person) {
  console.log('p', p)
}

printPerson({
  name: 'zhangsan',
})

printPerson({
  name: 'zhangsan',
  age: 15,
})
// printPerson()
