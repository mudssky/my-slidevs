function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    console.log(x.toUpperCase(), y.toLowerCase())
  } else {
    console.log(x, y)
  }
}

example('aBc', 'aBc')
example('aBc', true)
