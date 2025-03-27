---
level: 1
title: API调用
---

## API调用

deepseek api兼容了open的sdk，按照下面的方式调用api

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

> 上面是二月初写的，2025年3月27日的时间点，已经推出v3 0324版本，代码能力强于当前的r1，媲美claude3.7，gpt-4.5 并且加量不加价。

<!-- ---
layout: image-left
image: /assets/ai/ds_v3_benchmark_hist_zh.jpeg
backgroundSize: contain
---

DeepSeek-V3 多项评测成绩超越了 Qwen2.5-72B 和 Llama-3.1-405B 等其他开源模型，并在性能上和世界顶尖的闭源模型 GPT-4o 以及 Claude-3.5-Sonnet 不分伯仲。 -->

<!-- ![v3跑分](/assets/ai/ds_v3_benchmark_hist_zh.jpeg) -->

---
layout: image-left
image: /assets/ai/v3_0324_benchmark.webp
backgroundSize: contain
---

DeepSeek-V3 0324 大幅提高了在推理类任务上的表现水平，在数学、代码类相关评测集上取得了超过 GPT-4.5 的得分成绩。

---
title: 温度设置
level: 2
---

## 温度设置

官网的文档没更新，从hugging face了解的信息来看官网的默认温度是0.3
api调用时，会按照以下公式转换

![温度公式](/assets/ai/temperature_fn.png)

#### 温度的作用
低温度：输出更确定性和一致性
高温度：输出更随机和创造性

---
title: v3 0324版本官方提示词
level: 2
---
## v3 0324版本官方提示词

文件上传和 Web 搜索提示

```
file_template = \
"""[file name]: {file_name}
[file content begin]
{file_content}
[file content end]
{question}"""

```

对于 Web 搜索，`{search_results}、{cur_date} 和 {question}` 是参数。

---

对于中文查询，我们使用提示符：

```
search_answer_zh_template = \
'''# 以下内容是基于用户发送的消息的搜索结果:
{search_results}
在我给你的搜索结果中，每个结果都是[webpage X begin]...[webpage X end]格式的，X代表每篇文章的数字索引。请在适当的情况下在句子末尾引用上下文。请按照引用编号[citation:X]的格式在答案中对应部分引用上下文。如果一句话源自多个上下文，请列出所有相关的引用编号，例如[citation:3][citation:5]，切记不要将引用集中在最后返回引用编号，而是在答案对应部分列出。
在回答时，请注意以下几点：
- 今天是{cur_date}。
- 并非搜索结果的所有内容都与用户的问题密切相关，你需要结合问题，对搜索结果进行甄别、筛选。
- 对于列举类的问题（如列举所有航班信息），尽量将答案控制在10个要点以内，并告诉用户可以查看搜索来源、获得完整信息。优先提供信息完整、最相关的列举项；如非必要，不要主动告诉用户搜索结果未提供的内容。
- 对于创作类的问题（如写论文），请务必在正文的段落中引用对应的参考编号，例如[citation:3][citation:5]，不能只在文章末尾引用。你需要解读并概括用户的题目要求，选择合适的格式，充分利用搜索结果并抽取重要信息，生成符合用户要求、极具思想深度、富有创造力与专业性的答案。你的创作篇幅需要尽可能延长，对于每一个要点的论述要推测用户的意图，给出尽可能多角度的回答要点，且务必信息量大、论述详尽。
- 如果回答很长，请尽量结构化、分段落总结。如果需要分点作答，尽量控制在5个点以内，并合并相关的内容。
- 对于客观类的问答，如果问题的答案非常简短，可以适当补充一到两句相关信息，以丰富内容。
- 你需要根据用户要求和回答内容选择合适、美观的回答格式，确保可读性强。
- 你的回答应该综合多个相关网页来回答，不能重复引用一个网页。
- 除非用户要求，否则你回答的语言需要和用户提问的语言保持一致。

# 用户消息为：
{question}'''

```

---

英文查询

```
search_answer_en_template = \
'''# The following contents are the search results related to the user's message:
{search_results}
In the search results I provide to you, each result is formatted as [webpage X begin]...[webpage X end], where X represents the numerical index of each article. Please cite the context at the end of the relevant sentence when appropriate. Use the citation format [citation:X] in the corresponding part of your answer. If a sentence is derived from multiple contexts, list all relevant citation numbers, such as [citation:3][citation:5]. Be sure not to cluster all citations at the end; instead, include them in the corresponding parts of the answer.
When responding, please keep the following points in mind:
- Today is {cur_date}.
- Not all content in the search results is closely related to the user's question. You need to evaluate and filter the search results based on the question.
- For listing-type questions (e.g., listing all flight information), try to limit the answer to 10 key points and inform the user that they can refer to the search sources for complete information. Prioritize providing the most complete and relevant items in the list. Avoid mentioning content not provided in the search results unless necessary.
- For creative tasks (e.g., writing an essay), ensure that references are cited within the body of the text, such as [citation:3][citation:5], rather than only at the end of the text. You need to interpret and summarize the user's requirements, choose an appropriate format, fully utilize the search results, extract key information, and generate an answer that is insightful, creative, and professional. Extend the length of your response as much as possible, addressing each point in detail and from multiple perspectives, ensuring the content is rich and thorough.
- If the response is lengthy, structure it well and summarize it in paragraphs. If a point-by-point format is needed, try to limit it to 5 points and merge related content.
- For objective Q&A, if the answer is very brief, you may add one or two related sentences to enrich the content.
- Choose an appropriate and visually appealing format for your response based on the user's requirements and the content of the answer, ensuring strong readability.
- Your answer should synthesize information from multiple relevant webpages and avoid repeatedly citing the same webpage.
- Unless the user requests otherwise, your response should be in the same language as the user's question.

# The user's message is:
{question}'''

```

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

使用openaisdk时，非流式请求没有影响。
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

---

`https://api.deepseek.com/beta/completions`

FIM（Fill-In-the-Middle）补全 API。

也是补全api，用户可以提供前缀和后缀（可选），FIM 常用于内容续写、代码补全等场景。
但是它是beta路径的，我认为一般不需要使用这个

查看模型列表

`GET https://api.deepseek.com/models`

```js
{
  object: 'list',
  data: [
    { id: 'deepseek-chat', object: 'model', owned_by: 'deepseek' },
    { id: 'deepseek-reasoner', object: 'model', owned_by: 'deepseek' }
  ]
}
```

---
title: 多轮对话
level: 2
---

DeepSeek /chat/completions API 是一个“无状态” API，即服务端不记录用户请求的上下文，用户在每次请求时，需将之前所有对话历史拼接好后，传递给对话 API。

也就是按照下面的例子，用户的role是user，deepseek的回复role是assistant，需要把对话历史都传入接口

```js
[
    {"role": "user", "content": "What's the highest mountain in the world?"},
    {"role": "assistant", "content": "The highest mountain in the world is Mount Everest."},
    {"role": "user", "content": "What is the second?"}
]
```

---

对话前缀续写 和 FIM 补全 都是beta的功能，所以这里先跳过

```js
// 前缀续写
messages = [
    {"role": "user", "content": "Please write quick sort code"},
    {"role": "assistant", "content": "```python\n", "prefix": True}
]
```

[Continue](https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/docs/continue/README_cn.md) 是vscode的一个代码补全插件，可以配置使用deepseek的api来补全代码。它使用的就是FIM补全api。

---
title: JSON输出
level: 2
layout: scroll
---
在很多场景下，用户需要让模型严格按照 JSON 格式来输出，以实现输出的结构化，便于后续逻辑进行解析。

<<< @/scripts/jsonOutput.ts

---
title: Function Calling
level: 2
---

目前文档里，提到这部分还不完善，暂时跳过  
当前版本 deepseek-chat 模型 Function Calling 功能效果不稳定，会出现循环调用、空回复的情况。我们正在积极修复中，预计将在下一个版本中得到修复。

https://api-docs.deepseek.com/zh-cn/guides/function_calling

---
title: 上下文硬盘缓存
level: 2
---

DeepSeek API 上下文硬盘缓存技术对所有用户默认开启，用户无需修改代码即可享用。  
用户的每一个请求都会触发硬盘缓存的构建。若后续请求与之前的请求在前缀上存在重复，则重复部分只需要从缓存中拉取，计入“缓存命中”。

多轮对话的情况
第一次请求

```
messages: [
    {"role": "system", "content": "你是一位乐于助人的助手"},
    {"role": "user", "content": "中国的首都是哪里？"}
]
```

第二次请求

```
messages: [
    {"role": "system", "content": "你是一位乐于助人的助手"},
    {"role": "user", "content": "中国的首都是哪里？"},
    {"role": "assistant", "content": "中国的首都是北京。"},
    {"role": "user", "content": "美国的首都是哪里？"}
]
```

此时前面重复的部分会被计入缓存命中
