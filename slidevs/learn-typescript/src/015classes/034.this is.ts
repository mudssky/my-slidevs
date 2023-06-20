class Box<T> {
  value?: T

  hasValue(): this is { value: T } {
    return this.value !== undefined
  }
  // hasName() {
  //   return this.value!== undefined
  // }
  // 函数返回值的is语法，是为了帮ts确定类型的
}

const box = new Box()
box.value = 'Gameboy'

// type newtype = typeof box

if (box.hasValue()) {
  // box.value
  // type newtype= typeof box
  console.log(box.value)
} else {
  //  box.value
  console.log('is undefined')
}
export {}
