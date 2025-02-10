import Config from './config.json'
import { createChat } from './utils'

// 正常返回
async function example1() {
  const req = await fetch(`${Config.deepseek_base_url}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${Config.deepseek_api_key}`,
    },
    body: JSON.stringify({
      messages: [
        { role: 'user', content: '实现一个获取今日天气的html网页程序' },
      ],
      model: 'deepseek-chat',
    }),
  })
  const res: any = await req.json()
  console.log(res?.choices[0].message.content)
}

// 流式输出
async function example2() {
  const res = await fetch(`${Config.deepseek_base_url}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${Config.deepseek_api_key}`,
    },
    body: JSON.stringify({
      messages: [
        { role: 'user', content: '实现一个获取今日天气的html网页程序' },
      ],
      model: 'deepseek-chat',
      stream: true,
    }),
  })
  for await (const chunk of res.body as any) {
    const decoder = new TextDecoder()
    const text = decoder.decode(chunk, { stream: true })
    if (text === ': keep-alive\n\n') {
      continue
    }
    // a  1 移除前部的data:
    const dataJson = text.slice(5)
    const data = JSON.parse(dataJson)
    process.stdout.write(data.choices[0].message.content)
  }
}
const ai = createChat({
  baseURL: Config.deepseek_base_url,
  apiKey: Config.deepseek_api_key,
})
async function example3() {
  const completion = await ai.createCompletions({
    model: 'deepseek-chat',
    message: [
      {
        role: 'user',
        content: '实现一个获取今日天气的html网页程序',
      },
    ],
  })
  console.log(completion.choices[0].message.content)
}

example1()
// example2()
// example3()
// console.log(await ai.listModels())
// console.log(await ai.getbalance())

// {
//   object: 'list',
//   data: [
//     { id: 'deepseek-chat', object: 'model', owned_by: 'deepseek' },
//     { id: 'deepseek-reasoner', object: 'model', owned_by: 'deepseek' }
//   ]
// }
