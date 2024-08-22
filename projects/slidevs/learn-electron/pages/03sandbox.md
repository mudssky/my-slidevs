---
title: 进程沙盒化
---

## 进程沙盒化

Chromium的一个关键安全特性是，进程可以在沙盒中执行。 沙盒通过限制对大多数系统资源的访问来减少恶意代码可能造成的伤害 — 沙盒化的进程只能自由使用CPU周期和内存。 为了执行需要额外权限的操作，沙盒处的进程通过专用通信渠道将任务下放给更大权限的进程。

在Chromium中，沙盒化应用于主进程以外的大多数进程。 其中包括渲染器进程，以及功能性进程，如音频服务、GPU 服务和网络服务。


## Electron 中的沙盒行为

简单来说 renderer进程沙盒化后表现和常规浏览器一样。没有nodejs环境，只能通过IPC委派任务给主进程的方式，来执行
需要权限的任务。  


preload脚本仍可使用一部分以 Polyfill 形式实现的 Node.js API

---


沙盒默认是开启的，但是也可以配置
```js
app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      sandbox: false
    }
  })
  win.loadURL('https://google.com')
})
```

你也可以调用 `app.enableSandbox` API 来强制沙盒化所有渲染器。 注意，此 API 必须在应用的 ready 事件之前调用。
```js
app.enableSandbox()
app.whenReady().then(() => }
  // 因为调用了app.enableSandbox()，所以任何sandbox:false的调用都会被覆盖。
  const win = new BrowserWindow()
  win.loadURL('https://google.com')
})
```
---


## nodeIntegration
renderer中开始这个配置后，沙盒也会被禁用，这个允许渲染器使用node环境。

```js
app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadURL('https://google.com')
})
```


