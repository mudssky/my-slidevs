---
title: 主进程
level: 1
---

## 主进程

每个 Electron 应用都有一个单一的主进程，作为应用程序的入口点。 主进程在 Node.js 环境中运行，这意味着它具有 require 模块和使用所有 Node.js API 的能力。

主进程可以根据需要创建渲染进程  
当一个 BrowserWindow 实例被销毁时，与其相应的渲染器进程也会被终止。

```js
// main.js
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 1500 })
win.loadURL('https://github.com')

const contents = win.webContents
console.log(contents)
```
---
title: 应用程序生命周期
level: 1
---

## 应用程序生命周期
app 的常用生命周期钩子如下：

```js
const { app } = require('electron')
// 当 Electron 完成初始化时触发
app.on('ready', () => {  
  app.quit()  
})

```

- will-finish-launching 在应用完成基本启动进程之后触发。  
- ready 当 electron 完成初始化后触发。  
- window-all-closed 所有窗口都关闭的时候触发，在 windows 和 linux 里，所有窗口都退出的时候通常是应用退出的时候。  
- before-quit 退出应用之前的时候触发。  
- will-quit 即将退出应用的时候触发。  
- quit 应用退出的时候触发。  


---
title: 渲染进程
level: 1
---

## 渲染进程（Renderer）

每个 Electron 应用都会为每个打开的 BrowserWindow ( 与每个网页嵌入 ) 生成一个单独的渲染器进程。 洽如其名，渲染器负责 渲染 网页内容。 所以实际上，运行于渲染器进程中的代码是须遵照网页标准的 (至少就目前使用的 Chromium 而言是如此) 。


简单来说渲染进程，里面执行的代码和我们在浏览器的网页几乎一致，只是额外提供了一些Electron的API。

比如可有剪切板相关的API

> 为了方便开发，可以用完整的 Node.js 环境生成渲染器进程。 在历史上，这是默认的，但由于安全原因，这一功能已被禁用。



---
title: preload预加载脚本
level: 1
---

## 预加载脚本Preload

预加载（preload）脚本包含了那些执行于渲染器进程中，且先于网页内容开始加载的代码 。 这些脚本虽运行于渲染器的环境中，却因能访问 Node.js API 而拥有了更多的权限。

预加载脚本可以在 BrowserWindow 构造方法中的 webPreferences 选项里被附加到主进程。


```js
const { BrowserWindow } = require('electron')
// ...
const win = new BrowserWindow({
  webPreferences: {
    preload: 'path/to/preload.js'
  }
})

```

因为预加载脚本与浏览器共享同一个全局 Window 接口，并且可以访问 Node.js API，所以它通过在全局 window 中暴露任意 API 来增强渲染器，以便你的网页内容使用。

虽然预加载脚本与其所附着的渲染器在共享着一个全局 window 对象，但您并不能从中直接附加任何变动到 window 之上，因为 contextIsolation 是默认的(可以关闭，但是不推荐)。

上下文隔离（Context Isolation）意味着预加载脚本与渲染器的主要运行环境是隔离开来的，以避免泄漏任何具特权的 API 到您的网页内容代码中。


---
title: contextBridge
level: 1
---

## contextBridge

可以使用 contextBridge 暴露部分api到渲染进程的window对象上
```js
// preload.js
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
  desktop: true
})
```
之后我们可以在window上访问暴露的api


```js
// renderer.js
console.log(window.myAPI)
// => { desktop: true }

```

此功能对两个主要目的來說非常有用：

- 通过暴露 ipcRenderer 帮手模块于渲染器中，您可以使用 进程间通讯 ( inter-process communication, IPC ) 来从渲染器触发主进程任务 ( 反之亦然 ) 。
- 如果您正在为远程 URL 上托管的现有 web 应用开发 Electron 封裝，则您可在渲染器的 window 全局变量上添加自定义的属性，好在 web 客户端用上仅适用于桌面应用的设计逻辑 。