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
