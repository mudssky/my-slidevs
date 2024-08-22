
---
title: 开发环境搭建
level: 1
---

## 开发环境搭建

目前主要有两个脚手架

[electron-vite](https://cn.electron-vite.org/)
这是国人开发的开源项目，对electron 命令进行了包装。
有vue和react的模板

```shell
pnpm create @quick-start/electron
```

[electron forge](https://www.electronforge.io/)

这个是electron官方的项目，默认用的是npm和yarn，里面有vite的模板。。。

```shell
npm init electron-app@latest my-app -- --template=vite-typescript
```

总的来说，我更倾向于electron-vite,使用体验好很多。
后续主要使用这个脚手架。  

electron-vite包装了很多东西，对于初学者来说，简化了很多配置。。。

---

比如把多个vite打包配置，整合到一个文件里了
```
├──main
│  ├──...
│  └──vite.config.js
├──preload
│  ├──...
│  └──vite.config.js
└──renderer
   ├──...
   └──vite.config.js
```

```
├──src/
│  ├──main
│  ├──preload
│  └──renderer
├──electron.vite.config.js
└──package.json
```


