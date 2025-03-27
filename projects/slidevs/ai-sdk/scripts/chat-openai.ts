import Config from './config.json'

// Please install OpenAI SDK first: `npm install openai`

import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: Config.deepseek_base_url,
  apiKey: Config.deepseek_api_key,
})

// 正常返回
async function example1() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: '实现一个获取今日天气的html网页程序' },
    ],
    // messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'deepseek-chat',
    temperature: 1.0,
  })

  console.log(completion.choices[0].message.content)
}

// 流式输出
async function example2() {
  const resStream = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: '实现一个获取今日天气的html网页程序' },
    ],
    model: 'deepseek-chat',
    // model: 'deepseek-reasoner',
    stream: true,
  })

  for await (const chunk of resStream) {
    if (chunk.choices[0]?.finish_reason === 'stop') break
    process.stdout.write(chunk.choices[0]?.delta?.content || '')
  }
}

// example1()
example2()
