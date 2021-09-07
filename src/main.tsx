import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'

// 使用 lib-flexible 动态设置 REM 基准值（html 标签的字体大小）
import 'amfe-flexible'
// 自定义全局样式
import '@/assets/styles/app.less'
// global 用于加载一些 antd-mobile 的全局性逻辑和样式
import 'antd-mobile/es/global'

/**
 * 两种方式注册雪碧图: 使用官方文档推荐的
 * 所有svg的symbolId集合: import ids from 'virtual:svg-icons-names';
 */
import 'virtual:svg-icons-register'
// import 'vite-plugin-svg-icons/register';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
