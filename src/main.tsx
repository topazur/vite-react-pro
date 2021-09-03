import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'

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
