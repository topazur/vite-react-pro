import { PluginOption, ConfigEnv } from 'vite'

import reactRefresh from '@vitejs/plugin-react-refresh'
import compression from 'vite-plugin-compression'
import legacy from './legacy'
import svgBuilder from './svg-builder'
import mockServer from './mock-server'
import visualizer from './visualizer'

/**
 * Array of vite plugins to use.
 */
const plugins = ({ mode, command }: ConfigEnv): (PluginOption | PluginOption[])[] => [
  // 热更新插件
  reactRefresh(),
  /**
   * Use gzip or brotli to compress resources.
   * 因为 `vite-plugin-compress` 不支持 gzip，compression插件是在此基础上修改的
   */
  compression({ algorithm: 'brotliCompress' }),
  // 此插件为不支持原生 ESM 的传统浏览器提供支持
  legacy(),
  // svg雪碧图
  svgBuilder(),
  // mock插件: 真实在浏览器里存在 请求记录
  mockServer({ mode, command }),
  // 可视化文件磁盘占用分析
  visualizer(),
]

export default plugins

/* RollupPlugin 接口
interface Plugin extends RollupPlugin {
  enforce?: 'pre' | 'post'
  apply?: 'serve' | 'build'
  config?: (config: UserConfig, env: ConfigEnv) => UserConfig | null | void
  configResolved?: (config: ResolvedConfig) => void
  configureServer?: ServerHook
  transformIndexHtml?: IndexHtmlTransform
  handleHotUpdate?(ctx: HmrContext): Array<ModuleNode> | void | Promise<Array<ModuleNode> | void>
  resolveId?(
    this: PluginContext,
    source: string,
    importer: string | undefined,
    options: { custom?: CustomPluginOptions },
    ssr?: boolean,
  ): Promise<ResolveIdResult> | ResolveIdResult
  load?(this: PluginContext, id: string, ssr?: boolean): Promise<LoadResult> | LoadResult
  transform?(
    this: TransformPluginContext,
    code: string,
    id: string,
    ssr?: boolean,
  ): Promise<TransformResult> | TransformResult
}
*/
