module.exports = {
  root: true,
  env: {
    // Your environments (which contains several predefined global variables)
    browser: true,
    node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 在遇到全局需要使用的 “ 未定义 ”变量（如微信小程序的wx）时，使用 `// eslint-disable-line no-undef`  显然不合理，所以我们应该在全局配置入手，可以在配置文件中的global下进行全局忽略变量
    // Your global variables (setting to false means it"s not allowed to be reassigned)
    //
    JSX: true,
    React: true,
    pdfjsWorker: true,
  },
  settings: {
    // Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration.
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    /* ecmaVersion和sourceType忽略了，因main.tsx中类型断言报错: `Parsing error: Unexpected token, expected ","` */
    // ecmaVersion: 6, // It's not necessary
    // sourceType: 'module', // It's not necessary

    parser: 'babel-eslint',
  },
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'no-console': 1,
    'no-debugger': 1,
    'no-alert': 1, // 禁止使用 alert
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'none',
      },
    ],

    /* *************************************** */
    // [下列rule为config-alloy配置参考](https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN)
    /* *************************************** */

    // 函数的参数禁止超过 3 个
    'max-params': ['error', 3],
    // 有默认值的参数必须放在函数参数的末尾
    'default-param-last': 2,
    // 禁止对函数的参数重新赋值
    'no-param-reassign': 2,
    // 回调函数必须使用箭头函数
    'prefer-arrow-callback': 1,
    // parseInt 必须传入第二个参数
    radix: 1,
    // 禁止在 return, throw, break 或 continue 之后还有代码
    'no-unreachable': 2,

    // 必须使用 if (foo === 5) 而不是 if (5 === foo)
    yoda: ['error', 'never'],
    // switch 语句必须有 default
    'default-case': 2,
    // for in 内部必须有 hasOwnProperty
    'guard-for-in': 2,
    // 禁止将自己赋值给自己
    'no-self-assign': 2,
    // 禁止将自己与自己比较
    'no-self-compare': 2,

    // 禁止重复导入模块
    'no-duplicate-imports': 2,
    // 创建 Symbol 时必须传入参数
    'symbol-description': 2,
    // 禁止使用 new 来生成 Symbol #Symbol('foo')
    'no-new-symbol': 2,
    // 禁止使用 new 来生成 String, Number 或 Boolean #String(val)
    'no-new-wrappers': 2,
    // 禁止在数组中出现连续的逗号 #[1, 2, , 3]
    'no-sparse-arrays': 2,
    // 禁止在普通字符串中出现模版字符串里的变量形式 #'Hello ${bar}'
    'no-template-curly-in-string': 2,

    // 禁止出现空代码块，允许 catch 为空代码块
    // 'no-empty': ['error', { allowEmptyCatch: true }],
    // 禁止使用没必要的 {} 作为代码块
    // 'no-lone-blocks': 2,
    // 注释的斜线或 * 后必须有空格
    'spaced-comment': ['error', 'always'],
    // 禁止注释中出现 TODO 和 FIXME
    'no-warning-comments': 1,
  },
}
