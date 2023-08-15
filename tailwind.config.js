/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './site/**/*.{js,ts,vue}',
    './projects/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  // corePlugins: {
  //   preflight: false,
  // },
}
