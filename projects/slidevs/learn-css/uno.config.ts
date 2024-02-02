// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['collapse', { visibility: 'collapse' }],
    ['list-outside', { 'list-style-position': 'outside' }],
    ['list-inside', { 'list-style-position': 'inside' }],
  ],
})
