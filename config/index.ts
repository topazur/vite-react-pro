// import path from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'

import plugins from './plugins'
import variables from './options/variables'
import resolve from './options/resolve'
import server from './options/server'
import css from './options/css'
import json from './options/json'
import build from './options/build'
import optimizeDeps from './options/optimizeDeps'

const getConfig = ({ mode, command }: ConfigEnv): UserConfigExport => ({
  ...variables,
  resolve,
  server,
  css,
  json,
  build,
  optimizeDeps,
  plugins: plugins({ mode, command }),
})

export default getConfig
