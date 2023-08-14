/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './site/**/*.{js,ts,vue}',
    './project/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  // corePlugins: {
  //   preflight: false,
  // },
}
