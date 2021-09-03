// import path from 'path'
import { BuildOptions } from 'vite'

/**
 * Build specific options
 */
const build: BuildOptions = {
  // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
  minify: 'terser',
  /* 是否产出maifest.json */
  manifest: false,
  /* 是否产出soucemap.json */
  sourcemap: false,
  /* 产出目录 */
  outDir: 'dist',
  // assetsDir: 'static/img/',
  /* 🔨 vite在打包中会计算包的大小，但是只是计算不做处理，会延长打包时间，所以可在build中再添加一个配置项关闭打包计算 */
  brotliSize: false,
  rollupOptions: {
    /* 🔨 多入口？？？ */
    // input: {
    //   main: path.resolve(process.cwd(), 'index.html'),
    //   nested: path.resolve(process.cwd(), 'index.html'),
    // },
    /* 🔨 输出文件路径自定义 */
    output: {
      chunkFileNames: 'static/js/[name]-[hash].js',
      entryFileNames: 'static/js/[name]-[hash].js',
      assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
    },
  },
  /* 🔨 生产环境移除 console */
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  },
}

export default build
