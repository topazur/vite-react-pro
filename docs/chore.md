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
