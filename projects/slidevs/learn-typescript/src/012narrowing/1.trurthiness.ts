function printName(name?: string) {
  if (name) {
    console.log('名字是', name)
  } else {
    console.log('请传入名字')
  }
}

printName('张三')
// printName()
