
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
