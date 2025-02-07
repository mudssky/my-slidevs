import Config from './config.json'

// Please install OpenAI SDK first: `npm install openai`

import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: Config.deepseek_api_key,
})

// 正常返回
async function exapmle1() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: '实现一个获取今日天气的html网页程序' },
    ],
    // messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'deepseek-chat',
  })

  console.log(completion.choices[0].message.content)
}

// 流式输出
async function exapmle2() {
  const resStream = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: '实现一个获取今日天气的html网页程序' },
    ],
    model: 'deepseek-chat',
    // model: 'deepseek-reasoner',
    stream: true,
  })

  for await (const chunk of resStream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '')
  }
}

// exapmle1()
exapmle2()
