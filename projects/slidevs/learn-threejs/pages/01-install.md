---
title: 安装
---

### 安装

```shell
pnpm add three
pnpm add @types/three -D
```

如果在html中使用threejs

```html
<script type="importmap">
{
  "imports": {
    "three": "https://esm.sh/three@0.174.0/build/three.module.js"
  }
}
</script>
<script type="module">
// 这里写threejs的代码
</script>
```
