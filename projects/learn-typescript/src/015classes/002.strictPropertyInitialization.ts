// class BadGreeter {
//   name: string;
// }

class GoodGreeter {
  name: string
  age = 2
  constructor() {
    this.name = 'hello'
  }
}

class OKGreeter {
  // Not initialized, but no error
  name!: string
}

const og = new OKGreeter()

export {}
