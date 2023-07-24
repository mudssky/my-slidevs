// function firstElement(arr: any[]) {
//   return arr[0]
// }
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}
const arr = ['1', '2', '3']
const fe = firstElement(arr)
console.log(fe)
