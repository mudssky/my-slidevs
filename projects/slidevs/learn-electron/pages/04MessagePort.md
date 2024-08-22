---
title: MessagePort
layout: scroll
---

## MessagePort

MessagePort可以实现渲染进程之间的通信。

> 本身是Web标准API ， 可以用于跨iframe通信，和Workers通信等。

在主进程中创建MessagePort

```js
import { BrowserWindow, app, MessageChannelMain } from 'electron';

app.whenReady().then(async () => {
  // 创建窗口
  const mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      contextIsolation: false,
      preload: 'preloadMain.js'
    }
  })

  const secondaryWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      contextIsolation: false,
      preload: 'preloadSecondary.js'
    }
  })

  // 建立通道
  const { port1, port2 } = new MessageChannelMain()

  // webContents准备就绪后，使用postMessage向每个webContents发送一个端口。
  mainWindow.once('ready-to-show', () => {
    mainWindow.webContents.postMessage('port', null, [port1])
  })

  secondaryWindow.once('ready-to-show', () => {
    secondaryWindow.webContents.postMessage('port', null, [port2])
  })
})

```

之后，渲染进程间可以通过MessagePort进行通信。

```js
// mainWindow
port1.onmessage = (event) => {
  console.log('received result:', event.data)
};
port1.postMessage('我是渲染进程一发送的消息');

// secondaryWindow
port2.onmessage = (event) => {
  console.log('received result:', event.data)
};
port2.postMessage('我是渲染进程二发送的消息');

```

context isolation开启后

```js
const { BrowserWindow, app, MessageChannelMain } = require('electron')
const path = require('node:path')

app.whenReady().then(async () => {
  // Create a BrowserWindow with contextIsolation enabled.
  const bw = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  bw.loadURL('index.html')

  // We'll be sending one end of this channel to the main world of the
  // context-isolated page.
  const { port1, port2 } = new MessageChannelMain()

// 允许在另一端还没有注册监听器的情况下就通过通道向其发送消息 消息将排队等待，直到有一个监听器注册为止。
  port2.postMessage({ test: 21 })

  // 我们也可以接收来自渲染器主进程的消息。
  port2.on('message', (event) => {
    console.log('from renderer main world:', event.data)
  })
  port2.start()
  // 预加载脚本将接收此 IPC 消息并将端口
  // 传输到主进程。
  bw.webContents.postMessage('main-world-port', null, [port1])
})
```
之后，在preload中通过IPC获取port
```js
const { ipcRenderer } = require('electron')

// 在发送端口之前，我们需要等待主窗口准备好接收消息 我们在预加载时创建此 promise ，以此保证
// 在触发 load 事件之前注册 onload 侦听器。
const windowLoaded = new Promise(resolve => {
  window.onload = resolve
})

ipcRenderer.on('main-world-port', async (event) => {
  await windowLoaded
  // 我们使用 window.postMessage 将端口
  // 发送到主进程
  window.postMessage('main-world-port', '*', event.ports)
})
```

```html
<script>
window.onmessage = (event) => {
  // event.source === window 意味着消息来自预加载脚本
  // 而不是来自iframe或其他来源
  if (event.source === window && event.data === 'main-world-port') {
    const [ port ] = event.ports
    // 一旦我们有了这个端口，我们就可以直接与主进程通信
    port.onmessage = (event) => {
      console.log('from main process:', event.data)
      port.postMessage(event.data.test * 2)
    }
  }
}
</script>
```