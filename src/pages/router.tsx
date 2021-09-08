import React from 'react'
import { Redirect } from 'react-router-dom'
import { RouteConfigComponentProps, RouteConfig } from 'react-router-config'

import {
  // Root,
  Main,
  HowError,
  // TabBar
  Home,
  Todo,
  Message,
  Profile,
  // profiles
  Pwd,
  PDF,
} from '@/pages'

/**
 * @title 配置路由映射的关系数组 `yarn add react-router-config`
 * @description 若希望将所有的路由配置放到一个地方进行集中管理，这个时候可以使用react-router-config来完成。
 * @URI NOTICE: [原理](https://www.jianshu.com/p/5ef6f8493c74)
 */
const routes: RouteConfig[] = [
  {
    path: '/',
    render: (props: RouteConfigComponentProps) => <Main {...props} />,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to="/home" />,
      },
      {
        path: '/home',
        component: Home,
        exact: true,
      },
      {
        path: '/todo',
        component: Todo,
      },
      {
        path: '/message',
        component: Message,
      },
      {
        path: '/profile',
        render: (props: RouteConfigComponentProps) => <Main {...props} />,
        routes: [
          {
            path: '/profile',
            exact: true,
            component: Profile,
          },
          {
            path: '/profile/pwd',
            component: Pwd,
          },
        ],
      },
      {
        path: '/pdf',
        render: (props: RouteConfigComponentProps) => <Main {...props} />,
        routes: [
          {
            path: '/pdf',
            exact: true,
            component: PDF,
          },
        ],
      },
      {
        path: '*',
        restricted: false,
        render: (props: RouteConfigComponentProps) => <HowError status="empty" {...props} />,
      },
    ],
  },
]

export default routes
