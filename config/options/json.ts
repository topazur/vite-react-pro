import { JsonOptions } from 'vite'

/**
 * CSS related options (preprocessors and CSS modules)
 */
const json: JsonOptions = {
  /**
   * @title 是否支持从`.json`文件中进行按名导入
   * @default {boolean} true
   */
  namedExports: true,

  /**
   * @title 若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...") 会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候
   * @default {boolean} false
   * @notice 开启此项，则会禁用按名导入
   */
  stringify: false,
}

export default json
