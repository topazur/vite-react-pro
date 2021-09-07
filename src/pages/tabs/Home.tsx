import React from 'react'
import logo from '@/assets/images/logo.svg'
import { SvgIcon } from '@/components'

function Home() {
  return (
    <div className="home-page h-min-full">
      <div style={{ backgroundColor: '#282c34' }}>
        <img style={{ width: '50%' }} src={logo} className="App-spin" alt="logo" />
      </div>
      <SvgIcon style={{ width: '50px', height: '50px' }} name="song" />
    </div>
  )
}

export default Home
