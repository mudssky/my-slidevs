---
title: 搭建本地知识库
level: 1
---

---
title: 企业中AI的两种使用方式
level: 2
---

## 企业中AI的两种使用方式

一般企业会选择本地部署模型，而不是使用外部api。
我们需要针对特定的业务场景来调整AI，而不是把通用大模型直接部署使用。
（通用大模型知识存在局限性，它是通过网络公开的数据进行训练，因此没有一些实时性高的，非公开的比如公司业务数据的知识。
另外大模型存在幻觉问题，对于自己没有的信息，会一本正经的胡说八道。）

一个典型的需求，基于公司私有组件库生成代码。

有以下两种方式：

1. Fine-tuning（模型微调）， 把开源模型作为基座，使用企业特定的数据集进行训练，使得模型对于特定业务的表现更好。
2. RAG（Retrieval-Augmented Generation），检索增强生成技术。
  
<v-click>

### 模型微调的难点

最大的难点在于如何找到合适的数据集，数据集的质量对于模型训练的成果影响很大。

其次训练模型需要更高的硬件成本，需要更多计算资源。。。

</v-click>

---
title: RAG的原理
level: 2
layout: scroll
---

## RAG的原理

1. 准备外部知识库：外部知识库可能来自本地的文件、搜索引擎结果、API 等等。这样，RAG 不仅依赖于模型本身的内在的、通过训练得到的知识，还能实时调用外部的信息进行补充。
2. 通过 embedding 模型，对知识库文件进行解析：文本是由自然语言组成的，这种格式不利于机器直接计算相似度。embedding 模型要做的，就是将自然语言转化为高维向量，然后通过向量来捕捉到单词或句子背后的语义信息。；
3. 通过 embedding 模型，对用户的提问进行处理：用户的输入同样会经过嵌入（Embedding）处理，生成一个高维向量。
4. 拿用户的提问去匹配本地知识库：使用这个用户输入生成的这个高纬向量，去查询知识库中有无相关的文档片段。系统会利用某些相似度度量（如余弦相似度）去判断这个相似度。这一整个过程可以理解为，上传并解析了知识库之后，相当于给知识库中每一个小的文段都生成了一个指纹；然后用户输入问题之后，这个问题同样也会生成一个独一无二的指纹，接着RAGFLOW系统就会拿着用户输入的这个指纹，在指纹库也就是知识库中匹配，找到相似的指纹，然后把将检索到的这些相关文段与用户的输入结合，扩展模型的上下文，再喂给对话模型DeepSeek。

> 和模型微调的区别是，不用改变模型本身，相当于给模型外挂了一个可以查找的知识库

---
title: 基于AnythingLLM RAG知识库的部署
level: 2
---

## 基于AnythingLLM RAG知识库的部署

目前开源知识库有很多，比如MaxKB，Dify，FastGPT,RagFLow,AnythingLLM等等。

其中AnythingLLM安装和部署比较简单，它是all-in-one的理念，而且强调零设置，不需要额外的配置。

另外AnythingLLM docker版本支持多用户模式，分为管理员，经理和默认3个角色。。。

- admin 完全访问整个系统
- Manager 可以查看所有工作区并管理除 LLM、嵌入器和矢量数据库的设置之外的所有属性
- Default 只能将聊天发送到明确添加到的工作区。看不到或编辑任何工作区或系统设置。  

还有它支持**API接口调用**，所以我认为已经能满足常见的使用场景了。

直接在官网安装 https://anythingllm.com/ 桌面版即可

我们本地采用ollama部署，所以第一步选择模型提供商时选择ollama

有工作区的概念，工作区里可以添加多个对话，工作区可以上传文件，上传文件并且更新完成后，聊天时就可以查询知识库了。
并且对话的时候会给出检索到知识的来源。。。

---
title: AnythingLLM服务端多人使用部署
level: 2
---
之前使用的是桌面客户端，适合单人使用。
也可以self-host，自己部署服务端，适合多人使用。  

官方提供了docker部署的方式

```shell
 docker pull mintplexlabs/anythingllm
```

如果是windows环境，执行下面的命令运行镜像

```powershell
$env:STORAGE_LOCATION="$HOME\Documents\anythingllm"; `
If(!(Test-Path $env:STORAGE_LOCATION)) {New-Item $env:STORAGE_LOCATION -ItemType Directory}; `
If(!(Test-Path "$env:STORAGE_LOCATION\.env")) {New-Item "$env:STORAGE_LOCATION\.env" -ItemType File}; `
docker run -d -p 3001:3001 `
--cap-add SYS_ADMIN `
-v "$env:STORAGE_LOCATION`:/app/server/storage" `
-v "$env:STORAGE_LOCATION\.env:/app/server/.env" `
-e STORAGE_DIR="/app/server/storage" `
mintplexlabs/anythingllm;
```

---

如果是linux/mac环境

```shell
export STORAGE_LOCATION=$HOME/anythingllm && \
mkdir -p $STORAGE_LOCATION && \
touch "$STORAGE_LOCATION/.env" && \
docker run -d -p 3001:3001 \
--cap-add SYS_ADMIN \
-v ${STORAGE_LOCATION}:/app/server/storage \
-v ${STORAGE_LOCATION}/.env:/app/server/.env \
-e STORAGE_DIR="/app/server/storage" \
mintplexlabs/anythingllm
```

管理员可以手动添加其他用户，或者通过api接口来批量新增用户。。。

---
title: RAGFlow部署
level: 2
hide: true
---

Ragflow是一种基于深厚文档理解的开源RAG引擎。

1. 确保vm.max_map_count=262144

这里我的环境是wsl2

```
wsl -d docker-desktop -u root
sysctl -w vm.max_map_count=262144
```

如果是linux系统，可以检查`vm.max_map_count`的值`sysctl vm.max_map_count`

如果不是，则执行命令手动设置

```
sudo sysctl -w vm.max_map_count=262144
```

可以在`/etc/sysctl.conf`中配置持久化`vm.max_map_count=262144`
