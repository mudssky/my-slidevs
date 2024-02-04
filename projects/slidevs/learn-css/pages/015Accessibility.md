---
title: Accessibility
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Accessibility

---
title: Screen Readers
level: 2
layout: slim-table
---

### Screen Readers
用于提高屏幕阅读器可访问性

| Class       | Properties                                                   |
| ----------- | ------------------------------------------------------------ |
| sr-only     | `position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;` |
| not-sr-only | position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal; |

使用 sr-only 在视觉上隐藏元素，而不对屏幕阅读器隐藏它：

not-sr-only撤销sr-only的效果

---
title: Forced Color Adjust
level: 2
layout: slim-table
---

### Forced Color Adjust

可能是对视障患者有用的。。。

| Class                    | Properties                 |
| ------------------------ | -------------------------- |
| forced-color-adjust-auto | forced-color-adjust: auto; |
| forced-color-adjust-none | forced-color-adjust: none; |
