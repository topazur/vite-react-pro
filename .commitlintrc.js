/**
 * 配置文件名格式支持以下示例
 * commitlint.config.js .commitlintrc .js .commitlintrc.json .commitlintrc.yml commitlint package.json
 */

// 作用：检测 commit msg 是否符合 Angular 规范
// [commitlint官网教程](https://commitlint.js.org/#/guides-local-setup)
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 修改此插件的规则rules
  rules: {
    // 'type-enum': [
    //   2,
    //   'always',
    //   ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
    // ],
    // 'subject-full-stop': [0, 'never'],
    // 'subject-case': [0, 'never'],
  },
}

/**
 * husky 可以让我们向项目中方便替代git hooks。
 * [husky 6](https://blog.csdn.net/qq_21567385/article/details/116429214)
 * [husky 文档](https://typicode.github.io/husky/#/?id=manual)
 *
 * `npm set-script prepare "husky install"` && `npm run prepare`
 * prepare的执行时机: `安装依赖时，也就是 yarn 和 yarn add ** 时。` 和 `发布前，也就是 yarn publish 前。`
 * [prepare 和 prepublish / prepublishOnly 的区别](https://docs.npmjs.com/cli/v7/using-npm/scripts#prepare-and-prepublish)
 */

/**
 * lint-staged 仅针对提交的文件格式规范检测
 * [eslint零warn参数配置](https://blog.csdn.net/huzhenv5/article/details/107823096)
 * 参数`--max-warnings 0` 默认情况下ESLint的校验，只有error才触发退出码，即无论你代码中有多少个警告，都是不会触发退出的,通过这个配置，我们可以设置ESLint触发退出的warn的个数，我们将这个值设置为0，那么只要暂存区的代码有warn就会触发退出了
 */
