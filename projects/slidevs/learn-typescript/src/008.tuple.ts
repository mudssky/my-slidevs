const tuple: [number, string] = [18, 'zhangsan']

const [age, name] = tuple

console.log({ age, name })

// Object.entries是 ES8（2017）的新方法，把对象返回成元组的列表
const tuplelist = Object.entries({
  foo: 123,
  bar: 456,
})
console.log('tuplelist', tuplelist)
export {}
