module.exports = {
  default: true,
  // slidev 里面报错，所以关掉
  'heading-increment': false,
  // MD003- 标题样式, 因为slidevs中的---包裹的内容会被认为是标题
  // 直接把标题校验全关了 "MD003"
  'heading-style': false,
  //   MD004 统一无序列表的格式，最内层使用- ，顺序依次为- + *
  'ul-style': true,
  //   MD009 尾部空格只能是0或2个，两个表示换行
  'no-trailing-spaces': true,

  //  MD010 空格代替tab
  'no-hard-tabs': true,
  //   禁止多个连续空行
  'no-multiple-blanks': true,
  //   行宽限制,默认是80
  'line-length': false,
  MD013: false,
  // 标题# 后面应该只有一个空格
  'no-multiple-space-atx': true,
  // MD022   标题需要被空行包围
  'blanks-around-headings': false,
  // MD024/no-duplicate-heading: Multiple headings with the same content
  'no-duplicate-heading': false,
  // MD025 - Multiple top-level headings in the same document,顶级标题只能有一个，也会检查frontmatter中的内容
  // 因为slidev中这个每页幻灯片那个不属于forntmatter，但是也会被检查，所以这个取消
  'single-h1': false,
  //   有序列表需要按照顺序
  'ol-prefix': true,
  // 隔离的代码块需要被空行包围
  'blanks-around-fences': true,
  // MD033/no-inline-html,html还是有用的，所以关掉这个
  // MD034
  'no-bare-urls': false,
  'no-inline-html': false,
  // MD81 不能用强调符号作为标题，这是为了语义,但是太烦了，还是关掉
  'no-emphasis-as-heading': false,
  MD036: false,
  //   第一行需要是最高级别标题
  'first-line-heading': false,
  MD041: false,
  //   文件需要以一个新的换行符结尾
  //   Files should end with a single newline character
  'single-trailing-newline': true,
  //   代码块需要指定语言，如果不需要高亮，可以指定为text，过于繁琐，所以关掉
  'fenced-code-language': false,
}
