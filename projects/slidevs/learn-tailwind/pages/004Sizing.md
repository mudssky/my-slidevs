---
title: Sizing
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Sizing

---
title: Width
level: 2
---
### Width

有px，百分比,rem，vw，vh几种单位

还有min-content，max-content fit-content
这三个是css3随着出现的属性，目前兼容度96%  
这几个和文字换行有关，min-content,容器宽度会是内容中最短单词的宽度，  
max-content,容器宽度会是内容最长的宽度  
fit-content,容器宽度初始会是内容宽度，小于min-content时采用min-content

<CanIUseCssProperty cssProperty="width_min-content" />

svw,lvw,dvw 是2023年新出的属性，不建议使用  
动态视口单位可以解决IOS上100vh不准确的问题（会忽略UI的一些部分）

- 小视口高度和宽度（svh 和 svw），代表最小的活动视口尺寸。
- 大视口高度和宽度（lvh 和 lvw），代表最大的尺寸。
- 动态视口高度和宽度（dvh 和 dvw）。

min-width,max-width单位都是一样的，不细说了。  
高度对应的一样，略

---

### Size

这是tailwind提供的一些使用的类，可以同时设置宽高。
