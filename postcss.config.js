module.exports = {
  plugins: [
    /* NOTICE: 需配置browserslist才生效；则会根据设置浏览器版本生成兼容性前缀 */
    require('autoprefixer'),
    require('postcss-plugin-px2rem')({
      /* 换算基数 */
      rootValue: 37.5,
      /* 允许REM单位增长到的十进制数字 */
      // unitPrecision: 5,
      /* （布尔值）允许在媒体查询中转换px */
      mediaQuery: false,
      /* 设置要替换的最小像素值(若为2，则2px仍会被转rem)。 默认 0 */
      minPixelValue: 0,
      /* 要忽略并保留为px的选择器 */
      // selectorBlackList: [/^ig$/],
      /* 默认值是一个空数组，这意味着禁用白名单并启用所有属性 */
      // propWhiteList: [],
      /* 黑名单 - 不换算的属性 */
      // propBlackList: ['font-size', 'border'],
      /* 利用正则表达式排除某些文件夹 （默认false，表示不排除任何文件） */
      // exclude: /(node_module)/,
      // exclude: /(node_modules[\\/]element-ui)|(pages[\\/]index)/i,
    }),
  ],
}
