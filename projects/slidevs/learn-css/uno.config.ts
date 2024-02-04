// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['collapse', { visibility: 'collapse' }],
    ['list-outside', { 'list-style-position': 'outside' }],
    ['list-inside', { 'list-style-position': 'inside' }],
    // 配置背景图片,发现unocss和tailwind的预设并不完全兼容，unocss的解析器不支持解析引号的样式
    // 所以  bg-[url(/assets/dust-mountain.avif)] bg-cover 要这样使用
  ],
})
