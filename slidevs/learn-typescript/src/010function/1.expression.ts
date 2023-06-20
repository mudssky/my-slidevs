export function sum1(x: number, y: number): number {
  return x + y
}

export const sum2 = (x: number, y: number) => {
  return x + y
}

// type s1=typeof sum1
// type s2 = typeof sum2
// type s3 =s1 extends s2?true:false
// type s4 =s2 extends s1?true:false

console.log(sum1(1, 2), sum2(1, 2))

export {}
