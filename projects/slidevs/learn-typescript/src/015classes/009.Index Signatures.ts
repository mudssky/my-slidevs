class MyClass {
  [s: string]: boolean | ((s: string) => boolean)

  check(s: string) {
    return this[s] as boolean
  }
}

const m1 = new MyClass()
m1.isClass = true
m1.hasConstructor = false
m1.isAtNight = () => {
  const hours = new Date().getHours()
  if (hours > 18 || hours < 5) {
    return true
  }
  return false
}
console.log(m1.check('isClass'))
console.log(m1.check('hasConstructor'))
console.log(m1.check('isAtNight'))

export {}
