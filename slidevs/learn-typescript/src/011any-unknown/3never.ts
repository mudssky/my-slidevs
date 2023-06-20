// 异常
export function err(msg: string): never {
  // OK
  throw new Error(msg)
}
// 死循环
export function loopForever(): never {
  // OK
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('loop forever')
  }
}
