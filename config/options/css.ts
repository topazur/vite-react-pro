import { CSSOptions } from 'vite'

/**
 * CSS related options (preprocessors and CSS modules)
 */
const css: CSSOptions = {
  /**
   * @title 指定传递给CSS预处理器的选项，例如：
   */
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

  /**
   * @title 配置`css modules`的行为，选项将被传递给`postcss-modules`
   */
  modules: {},

  /**
   * @type string | (postcss.ProcessOptions & { plugins?: postcss.Plugin[] })
   * @description 内联的PostCss配置（格式同postcss.config.js），或者一个（默认基于项目根目录的）自定义的PostCss配置路径。
   * @description 其路径搜索是通过`postcss-load-config`实现的
   * @notice 如果提供来该内联配置，vite将不会搜索其他PostCss配置源
   */
  // postcss: '', # 配置项在 `postcss.config.js` ，此处配置会造成覆盖
}

export default css
