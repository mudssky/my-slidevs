type Response = {
  data: {
    name: string
    age: number
  }
}

type Data = Response['data']

export {}
