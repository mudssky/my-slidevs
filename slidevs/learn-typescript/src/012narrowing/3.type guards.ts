export const func = (anything: string | number) => {
  if (typeof anything === 'string') {
    return anything // 类型是 string
  } else if (typeof anything === 'number') {
    return anything
  } else {
    const nothing: never = anything
    return nothing
  }
}
