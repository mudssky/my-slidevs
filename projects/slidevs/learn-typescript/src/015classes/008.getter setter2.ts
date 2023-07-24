class Thing {
  _size = 0

  get size(): number {
    return this._size
  }

  set size(value: string | number | boolean) {
    const num = Number(value)

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0
      return
    }

    this._size = num
  }
}
