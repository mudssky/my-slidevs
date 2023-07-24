class Base {
  protected x = 1
}
class Derived1 extends Base {
  protected x = 5
}
class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10
  }
  f2(other: Base) {
    other.x = 10
  }
}

export {}
