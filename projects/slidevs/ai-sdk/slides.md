---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev

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

---
hideInToc: true
layout: center

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


```