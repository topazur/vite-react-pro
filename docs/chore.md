## 一、vite + react

### 1.1 vite 模板创建

```bash
## NPM

# npm 6.x
$ npm init @vitejs/app my-app --template react-ts
# npm 7+, 需要额外的双横线：
$ npm init @vitejs/app my-app -- --template react-ts
# @vitejs/create-app is deprecated
$ npm init vite-app <project-name>

## YARN

$ ❎ yarn create @vitejs/app [project] --template react-ts
# @vitejs/create-app is deprecated, use yarn create vite instead
$ ✅ yarn create vite [project] --template react-ts

## add react18
$ yarn add react@alpha react-dom@alpha
```

### 1.2 eslint for [alloy](https://www.npmjs.com/package/eslint-config-alloy)

```bash
# 安装react+ts配置需要的依赖
$ yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-alloy babel-eslint eslint-plugin-prettier prettier -D

# [Rules配置 中文](https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN)

# 由此博文了解到这个eslint规范：
# [Vite + React + Typescript 最佳实践](https://github.com/lichenbuliren/fe-project-base)
# [对应仓库]https://segmentfault.com/a/1190000039875183)
```

### 1.3 husky

> https://commitlint.js.org/#/guides-local-setup

```bash
$ yarn add husky -D
# [.git 文件不在当前项目的根目录下,需对prepare做出调整](https://typicode.github.io/husky/#/?id=custom-directory)
$ yarn husky install -> #npm set-script prepare "husky install"; 再执行生成.husky文件夹
$ yarn add @commitlint/cli @commitlint/config-conventional commitizen lint-staged -D
$ npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
$ npx commitlint --from HEAD~1 --to HEAD --verbose #test
$ npx husky add .husky/pre-commit 'npx lint-staged'

# .lintstagedrc.js
# [React 项目中引入 Husky 6.x 和 Lint-staged](https://www.jianshu.com/p/a7cea983e7a2)
```

### 1.4 svg 雪碧图

```bash
# Usage: https://github.com/anncwb/vite-plugin-svg-icons
$ yarn add vite-plugin-svg-icons -D

# 博客参考(addRoute、env、css预处理、alias、svg抽离plugins写法): https://blog.csdn.net/weixin_43368335/article/details/113868053
```

### 1.5 mock 插件

```bash
# Usage: https://github.com/anncwb/vite-plugin-mock
$ yarn add mockjs vite-plugin-mock -D

# [curl](http://www.ruanyifeng.com/blog/2019/09/curl-reference.html)
```

### px2rem

```bash
# Usage: https://juejin.cn/post/6901943749916491783
$ yarn add autoprefixer postcss-plugin-px2rem -D
$ yarn add amfe-flexible
```

### pdf 预览

> https://zhuanlan.zhihu.com/p/129007002

### patch-package

> 通过 `patch-package` 记录 `node_modules` 更改记录，生成 `patches `目录，然后通过项目的 `post-install` 脚本在团队中同步这个更改。

- [react-virtualized 中导入未定义变量 bpfrpt_proptype_WindowScroller](https://juejin.cn/post/7005731645911203877)
- [patch-package 博客 1](https://blog.csdn.net/ghosind/article/details/83692873)
- [patch-package 博客 2](https://blog.csdn.net/qq_23334071/article/details/114736831)

```bash
# 1. 安装
$ yarn add patch-package postinstall-postinstall

# 2. 修改 node_modules 代码后执行（先修改再执行此命令，才能比较出修改的内容生成patch文件）：
$ yarn patch-package react-virtualized

# 3. package.json 中 scripts 增加：
{
  "postinstall": "patch-package"
}
```
