---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
hideInToc: true
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
addons:
  - '@mudssky/slidev-addon-default'
---



## 在项目中使用AI，以DEEPSEEK为例

---
hideInToc: true
---

## 目录

<Toc columns="4" />

<style>
  .slidev-layout{
    overflow:auto;
  }
</style>

---
level: 1
title: API调用
---

## API调用
按照下面的方式调用api

```js
// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: 'your-api-key'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
    // deepseek-reasoner
  });

  console.log(completion.choices[0].message.content);
}

main();
```

---
title: 流式调用
level: 2
---

```js
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
    process.stdout.write(chunk.choices[0]?.delta?.content || '')
  }
}

```

---
title: 模型选择
level: 2
---

## 模型选择
deepseek-chat 目前是deepseek-v3  
deepseek-reasoner 目前是deepseek-r1  
r1是推理模型，会输出思维链，能看到模型的思考过程，思维链是计入token输出的。

总体来说，一般不需要思维链，deepseek-v3就够用了。而且token要便宜很多。

| 模型(1)           | 上下文长度 | 最大思维链长度(2) | 最大输出长度(3) | 百万tokens 输入价格 （缓存命中）(4) | 百万tokens 输入价格 （缓存未命中） | 百万tokens 输出价格 输出价格 |
| ----------------- | ---------- | ----------------- | --------------- | ----------------------------------- | ---------------------------------- | ---------------------------- |
| deepseek-chat     | 64K        | -                 | 8K              | ~~0.5元~~(5) 0.1元                  | ~~2元~~(5) 1元                     | ~~8元~~(5) 2元               |
| deepseek-reasoner | 64K        | 32K               | 8K              | 1元                                 | 4元                                | 16元(6)                      |

---
layout: image-left
image: /public/assets/ai/ds_v3_benchmark_hist_zh.jpeg
backgroundSize: contain
---

DeepSeek-V3 多项评测成绩超越了 Qwen2.5-72B 和 Llama-3.1-405B 等其他开源模型，并在性能上和世界顶尖的闭源模型 GPT-4o 以及 Claude-3.5-Sonnet 不分伯仲。

<!-- ![v3跑分](/public/assets/ai/ds_v3_benchmark_hist_zh.jpeg) -->

---
title: 温度设置
level: 2
---

## 温度设置

| 场景                | 温度 |
| ------------------- | ---- |
| 代码生成/数学解题   | 0.0  |
| 数据抽取/分析       | 1.0  |
| 通用对话            | 1.3  |
| 翻译                | 1.3  |
| 创意类写作/诗歌创作 | 1.5  |

---
title: token用量计算
level: 2
---

## token用量计算

token 是模型用来表示自然语言文本的基本单位，可以直观的理解为“字”或“词”；通常 1 个中文词语、1 个英文单词、1 个数字或 1 个符号计为 1 个 token。

一般情况下模型中 token 和字数的换算比例大致如下：

- 1 个英文字符 ≈ 0.3 个 token。
- 1 个中文字符 ≈ 0.6 个 token。

官方提供了一个代码来离线计算token用量 [deepseek_v3_tokenizer.zip](https://cdn.deepseek.com/api-docs/deepseek_v3_tokenizer.zip)

---
title: 错误处理
level: 2
---

## 错误处理
DeepSeek的服务器承受高流量压力时，可能需要等待一段时间才能响应。在这段时间里，HTTP 请求会保持连接，并持续收到如下格式的返回内容：

- 非流式请求：持续返回空行
- 流式请求：持续返回 SSE keep-alive 注释（: keep-alive）

使用opensdk时，非流式请求没有影响。
流式请求时，可能会超时，然后没有收到任何信息。

我们也可以自己发送http请求，解析响应。

```shell
curl https://api.deepseek.com/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <DeepSeek API Key>" \
  -d '{
        "model": "deepseek-chat",
        "messages": [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": "Hello!"}
        ],
        "stream": false
      }'
```

---

错误码如下

| 错误码                 | 描述                                                         |
| ---------------------- | ------------------------------------------------------------ |
| 400 - 格式错误         | **原因**：请求体格式错误 **解决方法**：请根据错误信息提示修改请求体 |
| 401 - 认证失败         | **原因**：API key 错误，认证失败 **解决方法**：请检查您的 API key 是否正确，如没有 API key，请先 [创建 API key](https://platform.deepseek.com/api_keys) |
| 402 - 余额不足         | **原因**：账号余额不足 **解决方法**：请确认账户余额，并前往 [充值](https://platform.deepseek.com//top_up) 页面进行充值 |
| 422 - 参数错误         | **原因**：请求体参数错误 **解决方法**：请根据错误信息提示修改相关参数 |
| 429 - 请求速率达到上限 | **原因**：请求速率（TPM 或 RPM）达到上限 **解决方法**：请合理规划您的请求速率。 |
| 500 - 服务器故障       | **原因**：服务器内部故障 **解决方法**：请等待后重试。若问题一直存在，请联系我们解决 |
| 503 - 服务器繁忙       | **原因**：服务器负载过高 **解决方法**：请稍后重试您的请求    |

---
title: 直接调用API
level: 2
---

## 直接调用API

用openai的SDK调用会比较方便(方便兼容chatgpt)，也可以自己发请求来调用

常用的对话补全api `https://api.deepseek.com/chat/completions`

```ts
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
```

---
layout: scroll
---

流式输出

```ts
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
    const dataJson =text.slice(5)
    const data=JSON.parse(dataJson)
    process.stdout.write(data.choices[0].message.content)
  }
}
```
