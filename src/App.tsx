import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@/pages/router'

function App() {
  /* renderRoutes(routes)会把routers作为props传入到Root根组件中 */
  return (
    <Router>
      <div className="vite-page w-full pt-50">{renderRoutes(routes)}</div>
    </Router>
  )
}

export default App
