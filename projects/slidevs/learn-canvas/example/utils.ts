// export function throttle(func: (...args: any) => any, wait: number = 200) {
//   let lastTime = new Date().getTime()
//   return function (...args: any) {
//     const now = new Date().getTime()

//     if (now - lastTime >= wait) {
//       func?.(...args)
//       lastTime = now
//     }
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle(func: (...args: any) => any, wait: number = 100) {
  let timeout: number | null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any) => {
    if (!timeout) {
      func?.(...args)
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
    }
  }
}
