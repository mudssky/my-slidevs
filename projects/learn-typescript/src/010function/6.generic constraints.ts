function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a
  } else {
    return b
  }
}

const a = {
  name: 'zhangsan',
  length: 3,
}
const b = {
  //   name: 'lisa',
  length: 5,
}

console.log(longest(a, b))
export {}
