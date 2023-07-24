type DescribableFunction = {
  description: string
  (someArg: number): boolean
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' 结果为 ' + fn(6))
}

function isOver5(num: number) {
  return num > 5 ? true : false
}
isOver5.description = '判断是否大于5'

doSomething(isOver5)
