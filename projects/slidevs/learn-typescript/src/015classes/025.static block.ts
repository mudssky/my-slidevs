class Foo {
  static #count = 0

  get count() {
    return Foo.#count
  }

  static {
    try {
      const lastInstances = loadLastInstances()
      Foo.#count += lastInstances.length
    } catch {}
  }
}

export {}
function loadLastInstances() {
  throw new Error('Function not implemented.')
}
