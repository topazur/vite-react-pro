module.exports = {
  // 开启 eslint 支持：❌ 不存在此属性
  // eslintIntegration: true,

  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  // 字符串是否使用单引号，默认为false，使用双引号
  singleQuote: true,
  // 行尾是否使用分号，默认为true
  semi: false,
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: 'all',
  // 大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
  endOfLine: 'lf',

  // object's key is quoted only when necessary
  quoteProps: 'as-needed',
  // use double quotes instead of single quotes in jsx
  jsxSingleQuote: false,
  // jsx的结束标记需要包装
  jsxBracketSameLine: false,
  // 箭头函数参数需要括号，即使只有一个参数
  arrowParens: 'always',
  // 格式化文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // no need to write the beginning @prettier of the file
  requirePragma: false,
  // No need to automatically insert @prettier at the beginning of the file
  insertPragma: false,
  // 使用默认的中断条件
  proseWrap: 'preserve',
  // 格式引用嵌入的代码
  embeddedLanguageFormatting: 'auto',

  // decide whether to break the html according to the display style
  htmlWhitespaceSensitivity: 'css',
  // vue files script and style tags indentation
  vueIndentScriptAndStyle: false,

  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'typescript' },
    },
  ],
}
