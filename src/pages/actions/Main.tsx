import React, { useState, useEffect } from 'react'
// 从 React Router 5.1.0开始，新增了 useHistory 钩子
// import { useHistory } from 'react-router-dom'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import { TabBar } from 'antd-mobile'
import {
  HomeOutlined,
  MessageOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons'

/**
 * @param {props?.route?.routes} [{"path":"/"}, ... ,{"path":"*"}]
 */
function Main(props: RouteConfigComponentProps) {
  const tabs = Object.freeze([
    {
      key: '/home',
      title: '首页',
      icon: <HomeOutlined />,
      badge: '',
    },
    {
      key: '/todo',
      title: '我的待办',
      icon: <UnorderedListOutlined />,
      badge: '5',
    },
    {
      key: '/message',
      title: '我的消息',
      icon: <MessageOutlined />,
      badge: '99+',
    },
    {
      key: '/profile',
      title: '个人中心',
      icon: <UserOutlined />,
    },
  ])
  const aTabVisible = tabs.map((item) => item.key)

  const [activeKey, setActiveKey] = useState<string>('')
  const handleTabChange = (key: string) => {
    setActiveKey(key)
    props.history.push(key)
  }
  useEffect(() => {
    const { pathname } = props.location
    if (activeKey !== pathname) {
      setActiveKey(pathname)
    }

    return () => {
      // cleanup
    }
  }, [props.location.pathname])

  return (
    <>
      {renderRoutes(props?.route?.routes)}

      {aTabVisible.indexOf(activeKey) > -1 && (
        <TabBar
          style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff' }}
          activeKey={activeKey}
          onChange={handleTabChange}
        >
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      )}
    </>
  )
}

export default Main

/*
NOTICE: Root组件为了渲染Main， Main为了执行renderRoutes生成Switch路由组 && 添加底部 TabBar
function Root(props: RouteConfigComponentProps) {
  // * {props?.route?.routes} `{routes: Array(5), component: ƒ}`
  return <Main {...props} />
}
export default Root
*/
