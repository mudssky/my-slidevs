// 异常
export function err(msg: string): never {
  // OK
  throw new Error(msg)
}
// 死循环
export function loopForever(): never {
  // OK
   
  while (true) {
    console.log('loop forever')
  }
}
