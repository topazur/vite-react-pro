import { CSSOptions } from 'vite'

/**
 * CSS related options (preprocessors and CSS modules)
 */
const css: CSSOptions = {
  preprocessorOptions: {
    // less: {
    //   // 支持内联 JavaScript
    //   javascriptEnabled: true,
    //   // 重写 less 变量，定制样式
    //   modifyVars: {
    //     'primary-color': 'red',
    //   },
    //   // 自动导入全局样式
    //   // additionalData: "@import '@/styles/base.scss';",
    // },
  },
}

export default css
