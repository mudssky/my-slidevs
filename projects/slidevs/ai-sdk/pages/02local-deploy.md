
---
level: 1
title: 本地部署
---

# 本地部署

出于企业数据安全性考虑，本地部署的需求比较大。  

部署完整版671B模型的成本比较高，需要8张80GB显存的H100或A100显卡，需要上百万的硬件成本。

deepseek-v3是基于MoE架构的大模型。
而deepseek-r1是DeepSeek的第一代推理模型与OpenAI-O1相当，同时开源了基于Llama和Qwen的蒸馏模型

~~我认为r1 32b蒸馏版模型，已经能够满足大部分需求了。部署这个模型，只需要24gb显存，3090或者4090即可。~~
> 2025-03-27  目前有很多性能更好的小模型  
> qwq 32b 阿里3月开源的推理模型，官方测试成绩甚至和R1 671B相当  
> gemma3 27b 谷歌 3月开源的多模态模型，有1b， 4b，12，27b 4个版本，官方arena测试成绩在deepseek v3和r1之间。  
> （不过小模型知识量上远远不如，可能是针对测试优化了，实际使用效果可能不如）  

---
title: 什么是推理模型
level: 2
---

## 什么是推理模型

先看一下官网关于deepseek-reasoner的API参数介绍

- **输入参数**：
  - `max_tokens`：最终回答的最大长度（不含思维链输出），默认为 4K，最大为 8K。请注意，思维链的输出最多可以达到 32K tokens，控思维链的长度的参数（`reasoning_effort`）将会在近期上线。
- **输出字段**：
  - `reasoning_content`：思维链内容，与 `content` 同级，访问方法见[访问样例](https://api-docs.deepseek.com/zh-cn/guides/reasoning_model#访问样例)
  - `content`：最终回答内容
- **上下文长度**：API 最大支持 64K 上下文，输出的 `reasoning_content` 长度不计入 64K 上下文长度中
- **支持的功能**：[对话补全](https://api-docs.deepseek.com/zh-cn/api/create-chat-completion)，[对话前缀续写 (Beta)](https://api-docs.deepseek.com/zh-cn/guides/chat_prefix_completion)
- **不支持的功能**：Function Call、Json Output、FIM 补全 (Beta)
- **不支持的参数**：`temperature`、`top_p`、`presence_penalty`、`frequency_penalty`、`logprobs`、`top_logprobs`。请注意，为了兼容已有软件，设置 `temperature`、`top_p`、`presence_penalty`、`frequency_penalty` 参数不会报错，但也不会生效。设置 `logprobs`、`top_logprobs` 会报错。

---

![推理模型和通用模型](/assets/ai/infermodel_compare.png)

---
title: 推理模型的特点
level: 2
---

## 推理模型的特点

1. 擅长数学，编程等逻辑性强的任务。
2. 提示语更简洁。无需给出非常详细的步骤，那样会限制发挥

---
title: ollama本地部署r1
level: 2
---

## ollama本地部署r1

可以通过ollama进行模型部署，这是一个专门用来运行大语言模型的工具，可以一条命令部署大模型，帮我们处理了模型的下载、配置、启动等繁琐过程。也处理了跨平台的问题。

我的电脑没有独立显卡，所以用最小的1.5b蒸馏模型作为例子

首先在官网安装一下 https://ollama.com/  

执行命令运行模型

```shell
ollama run deepseek-r1:1.5b
```

之后我们可以在命令行和模型交互

---
title: ollama常用命令
level: 2
---

## ollama常用命令

查看模型信息

```shell
ollama show deepseek-r1:1.5b
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
ollama stop deepseek-r1:1.5b
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

$resText = [System.Text.Encoding]::UTF8.GetString($res.Content)
$resText
```

返回值是类似下面的

```
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.7953919Z","message":{"role":"assistant","content":"\u003cthink\u003e"},"done":false}
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.8232843Z","message":{"role":"assistant","content":"\n\n"},"done":false}
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.8517681Z","message":{"role":"assistant","content":"\u003c/think\u003e"},"done":false}
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.8795073Z","message":{"role":"assistant","content":"\n\n"},"done":false}
{"model":"deepseek-r1:1.5b","created_at":"2025-02-10T09:21:18.9068617Z","message":{"role":"assistant","content":"The"},"done":false}
```
