function firstElement1<Type>(arr: Type[]) {
  return arr[0]
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0]
}

// a: number (good)
const a = firstElement1([1, 2, 3])
// b: any (bad) 约束方式的范围不够明确
const b = firstElement2([1, 2, 3])

console.log(a, b)
export {}
