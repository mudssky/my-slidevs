// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      include: [/\.vue$/, /\.md$/],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      include: [/\.vue$/, /\.md$/],
      resolvers: [ElementPlusResolver()],
    }),
  ],

  ssr: { noExternal: ['element-plus'] },
})
