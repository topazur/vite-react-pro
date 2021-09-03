import path from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'

/**
 * @title svg雪碧图插件
 * process.cwd() 方法返回 Node.js 进程的当前工作目录
 */
export default (Dirs?: string[]) => {
  return viteSvgIcons({
    /* Specify the icon folder to be cached */
    iconDirs: Dirs ? Dirs : [path.resolve(process.cwd(), 'src/icons')],

    /* Specify symbolId format */
    symbolId: 'icon-[dir]-[name]',

    /* svg compression configuration, can be an [objectOptions](https://github.com/svg/svgo) */
    // svgoOptions: boolean｜SvgoOptions
  })
}
