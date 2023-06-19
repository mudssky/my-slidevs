class Box {
  content = ''
  sameAs(other: this) {
    return other.content === this.content
  }
}

class DerivedBox extends Box {
  otherContent = '?'
}

const base = new Box()
const derived = new DerivedBox()
derived.sameAs(base)
export {}
