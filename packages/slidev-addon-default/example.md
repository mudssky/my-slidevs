---
addons:
  - ./
---

# slidev-addon-default

my custom addon

---
title: slim-table
level: 2
layout: slim-table
---

## slim-table

slim-table 使用示例

| Class                  | Properties                    |
| ---------------------- | ----------------------------- |
| mix-blend-normal       | mix-blend-mode: normal;       |
| mix-blend-multiply     | mix-blend-mode: multiply;     |
| mix-blend-screen       | mix-blend-mode: screen;       |
| mix-blend-overlay      | mix-blend-mode: overlay;      |
| mix-blend-darken       | mix-blend-mode: darken;       |
| mix-blend-lighten      | mix-blend-mode: lighten;      |
| mix-blend-color-dodge  | mix-blend-mode: color-dodge;  |
| mix-blend-color-burn   | mix-blend-mode: color-burn;   |
| mix-blend-hard-light   | mix-blend-mode: hard-light;   |
| mix-blend-soft-light   | mix-blend-mode: soft-light;   |
| mix-blend-difference   | mix-blend-mode: difference;   |
| mix-blend-exclusion    | mix-blend-mode: exclusion;    |
| mix-blend-hue          | mix-blend-mode: hue;          |
| mix-blend-saturation   | mix-blend-mode: saturation;   |
| mix-blend-color        | mix-blend-mode: color;        |
| mix-blend-luminosity   | mix-blend-mode: luminosity;   |
| mix-blend-plus-lighter | mix-blend-mode: plus-lighter; |

---

# Slidev Theme Starter

Presentation slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---

layout: image-right
image: '<https://source.unsplash.com/collection/94734566/1920x1080>'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---

layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
