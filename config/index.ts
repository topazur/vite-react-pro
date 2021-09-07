// import path from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'

import plugins from './plugins'
import variables from './options/variables'
import resolve from './options/resolve'
import server from './options/server'
import css from './options/css'
import build from './options/build'

const getConfig = ({ mode, command }: ConfigEnv): UserConfigExport => ({
  ...variables,
  resolve,
  server,
  css,
  build,
  plugins: plugins({ mode, command }),
})

export default getConfig
