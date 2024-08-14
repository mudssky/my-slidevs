/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './site/**/*.{js,ts,vue}',
    './projects/**/*.{js,ts,vue}',
    // 排除node_modules目录,避免性能问题
    '!./**/node_modules/**/*',
  ],
  theme: {
    extend: {},
  },
  // corePlugins: {
  //   preflight: false,
  // },
}
