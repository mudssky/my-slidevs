/* eslint-disable @typescript-eslint/no-inferrable-types */
// 作用域问题
// 使用上一个文件定义的变量会报错，因为默认使用的是全局作用域
// const a = 123

// 可以用一个自启动函数创建隔离的作用域
;(function () {
  // eslint-disable-next-line
  const a = 123
})()

// 模块化语法，只要有export的文件，即使{}里面没有导出的值，也会被当作一个模块，变量不会和其他文件产生冲突
const a: number = 123
console.log(a)

export {}
