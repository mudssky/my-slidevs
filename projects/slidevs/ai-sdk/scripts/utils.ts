export interface OpenAIOption {
  baseURL: string
  apiKey: string
}

export interface ChatOption {
  message: { role: string; content: string }[]
  model: 'deepseek-chat' | 'deepseek-reasoner'
}
export class MyOpenAI {
  constructor(private options: OpenAIOption) {}

  async createCompletions(option: ChatOption) {
    const req = await fetch(`${this.options.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.options.apiKey}`,
      },
      body: JSON.stringify(option),
    })
    const res: any = await req.json()
    return res
  }
}

export function createChat(options: OpenAIOption) {
  return new MyOpenAI(options)
}
