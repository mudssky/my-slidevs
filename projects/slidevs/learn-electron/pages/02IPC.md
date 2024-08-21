---
title: 进程间通信
---
## 进程间通信

IPC（Inter-Process Communication），也就是进程间通信.
是主进程和渲染进程通信的主要方法。

## Renderer->Main 单向
要将单向 IPC 消息从渲染器进程发送到主进程，您可以使用 ipcRenderer.send API 发送消息，然后使用 ipcMain.on API 接收。

这里我们通过preload暴露一些进程通信的方法

```js
// preload.js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title)
})
```

此时，您将能够在渲染器进程中使用 window.electronAPI.setTitle() 函数。