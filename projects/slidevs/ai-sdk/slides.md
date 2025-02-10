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

<Toc columns="3" />

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

---
level: 1
title: 本地部署
---

# 本地部署

出于企业数据安全性考虑，本地部署的需求比较大。  

部署完整版671B模型的成本比较高，需要8张80GB显存的H100或A100显卡，需要上百万的硬件成本。

deepseek-v3是基于MoE架构的大模型。
而deepseek-r1是DeepSeek的第一代推理模型与OpenAI-O1相当，同时开源了基于Llama和Qwen的蒸馏模型

我认为r1 32b蒸馏版模型，已经能够满足大部分需求了。部署这个模型，只需要24gb显存，3090或者4090即可。

---
title: ollama本地部署r1
level: 2
---

## ollama本地部署r1

可以通过ollama进行模型部署，这是一个专门用来运行大语言模型的工具，可以一条命令部署大模型，帮我们处理了模型的下载、配置、启动等繁琐过程。也处理了跨平台的问题。

我的电脑没有显卡，所以用最小的1.5b蒸馏模型作为例子

首先在官网安装一下 https://ollama.com/  

执行命令运行模型

```shell
ollama run deepseek-r1:671b
```

之后我们可以在命令行和模型交互

---
title: ollama常用命令
level: 2
---

## ollama常用命令

查看模型信息

```shell
ollama show llama3.2
```

查看当前已有模型

```shell
ollama list
```

查看模型状态

```shell
ollama ps
```

停止模型

```shell
ollama stop llama3.2
```

---
title: ollama通过Modelfile部署
level: 2
---

## ollama通过Modelfile部署

ollama支持GGUF格式的模型  

创建一个名为Modelfile的文件，并在带有本地filepath的FROM指令中”到您要导入的模型。

```
FROM ./vicuna-33b.Q4_0.gguf
```

ollama基于Modelfile创建模型

```shell
ollama create example -f Modelfile
```

之后可以运行模型

```
ollama run example
```

也可以导入Safetensors格式的模型，参考这个文档 https://github.com/ollama/ollama/blob/main/docs/import.md

---
title: ollama RESTful API
level: 2
---

## ollama RESTful API

```powershell
$res = Invoke-WebRequest -Uri http://localhost:11434/api/chat `
∙ -Method Post `
∙ -ContentType "application/json" `
∙ -Body (@{
∙     model = "deepseek-r1:1.5b"
∙     messages = @(
∙         @{
∙             role = "user"
∙             content = "why is the sky blue?"
∙         }
∙     )
∙ } | ConvertTo-Json -Compress)

 [System.Text.Encoding]::UTF8.GetString($res.Content)

```

返回值是类似下面的

```
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.7953919Z","message":{"role":"assistant","content":"\u003cthink\u003e"},"done":false}
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.8232843Z","message":{"role":"assistant","content":"\n\n"},"done":false}
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.8517681Z","message":{"role":"assistant","content":"\u003c/think\u003e"},"done":false}
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.8795073Z","message":{"role":"assistant","content":"\n\n"},"done":false}
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.9068617Z","message":{"role":"assistant","content":"The"},"done":false}
```
