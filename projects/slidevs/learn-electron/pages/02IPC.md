---
title: 进程间通信
---
## 进程间通信

IPC（Inter-Process Communication），也就是进程间通信.
是主进程和渲染进程通信的主要方法。

## 1.Renderer->Main 单向
要将单向 IPC 消息从渲染器进程发送到主进程，您可以使用 `ipcRenderer.send` API 发送消息，然后使用 `ipcMain.on` API 接收。

这里我们通过preload暴露一些进程通信的方法

```js
// preload.js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title)
})
```

此时，您将能够在渲染器进程中使用 `window.electronAPI.setTitle()` 函数。

---

## 2.Renderer->Main 双向

双向 IPC 的一个常见应用是从渲染器进程代码调用主进程模块并等待结果。 这可以通过将 [`ipcRenderer.invoke`](https://www.electronjs.org/zh/docs/latest/api/ipc-renderer#ipcrendererinvokechannel-args) 与 [`ipcMain.handle`](https://www.electronjs.org/zh/docs/latest/api/ipc-main#ipcmainhandlechannel-listener) 搭配使用来完成。

```js
// preload
const { contextBridge, ipcRenderer } = require('electron/renderer')
contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile')
})
```

```js
// main
async function handleFileOpen () {
  const { canceled, filePaths } = await dialog.showOpenDialog()
  if (!canceled) {
    return filePaths[0]
  }
}
app.whenReady().then(() => {
  ipcMain.handle('dialog:openFile', handleFileOpen)
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
```

---

## 3.Main->Renderer 

将消息从主进程发送到渲染器进程时，需要指定是哪一个渲染器接收消息。 消息需要通过其 [`WebContents`](https://www.electronjs.org/zh/docs/latest/api/web-contents) 实例发送到渲染器进程。 此 WebContents 实例包含一个 [`send`](https://www.electronjs.org/zh/docs/latest/api/web-contents#contentssendchannel-args) 方法，其使用方式与 `ipcRenderer.send` 相同。

https://www.electronjs.org/zh/docs/latest/tutorial/ipc#%E6%A8%A1%E5%BC%8F-3%E4%B8%BB%E8%BF%9B%E7%A8%8B%E5%88%B0%E6%B8%B2%E6%9F%93%E5%99%A8%E8%BF%9B%E7%A8%8B


---

## 4.Renderer->Renderer 

没有直接的方法可以使用 `ipcMain` 和 `ipcRenderer` 模块在 Electron 中的渲染器进程之间发送消息。 为此，您有两种选择：

- 将主进程作为渲染器之间的消息代理。 这需要将消息从一个渲染器发送到主进程，然后主进程将消息转发到另一个渲染器。
- 从主进程将一个 [MessagePort](https://www.electronjs.org/zh/docs/latest/tutorial/message-ports) 传递到两个渲染器。 这将允许在初始设置后渲染器之间直接进行通信。


## 对象序列化

Electron 的 IPC 实现使用 HTML 标准的 [结构化克隆算法](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) 来序列化进程之间传递的对象，这意味着只有某些类型的对象可以通过 IPC 通道传递。

特别是 DOM 对象（例如 `Element`，`Location` 和 `DOMMatrix`），Node.js 中由 C++ 类支持的对象（例如 `process.env`，`Stream` 的一些成员）和 Electron 中由 C++ 类支持的对象（例如 `WebContents`、`BrowserWindow` 和 `WebFrame`）无法使用结构化克隆序列化。