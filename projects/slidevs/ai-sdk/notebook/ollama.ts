export interface OllamaRes {
  model: string
  created_at: string
  message: { role: string; content: string }
  done: boolean
}

export function parseOllamaRes(res: string) {
  const list = res.split('\n').filter(Boolean)
  // console.log({list});
  const data = list.map((line) => {
    try {
      const obj = JSON.parse(line)
      return obj
    } catch (e) {
      console.log(e)
      console.log({ line })
      throw e
    }
  })
  return data
}

export function joinOllamaResMsg(objs: OllamaRes[]) {
  const tokens = objs.map((obj) => obj?.message?.content ?? '')
  return tokens.join('')
}

export function getOllamaMessageFromRes(res: string) {
  return joinOllamaResMsg(parseOllamaRes(res))
}

class OllamaClient {
  constructor(private baseUrl: string) {}
}
