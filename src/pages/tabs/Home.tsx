import React from 'react'
import logo from '@/assets/images/logo.svg'

function Home() {
  return (
    <div className="home-page h-min-full" style={{ backgroundColor: '#282c34' }}>
      <img src={logo} className="App-spin" alt="logo" />
    </div>
  )
}

export default Home
