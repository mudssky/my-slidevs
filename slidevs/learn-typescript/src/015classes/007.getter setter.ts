class C {
  _length = 0
  get length() {
    return this._length
  }
  set length(value) {
    this._length = value
  }
}

const c1 = new C()

c1.length = 2
export {}
