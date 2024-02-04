// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['collapse', { visibility: 'collapse' }],
    ['list-outside', { 'list-style-position': 'outside' }],
    ['list-inside', { 'list-style-position': 'inside' }],
    // 配置背景图片,发现unocss和tailwind的预设并不完全兼容，unocss的解析器不支持解析引号的样式
    // 所以  bg-[url(/assets/dust-mountain.avif)] bg-cover 要这样使用
    // 还发现一个问题，就是预设更新的不及时，现在tailwind 3.4新出的设置子元素样式的unocss这个预设
    // 还没跟进
  ],
})
