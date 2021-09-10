import React, { useEffect, useRef } from 'react'
import NPlayer from '@nplayer/react'

/**
 * @url https://nplayer.js.org/docs/ecosystem/react
 */
export default function () {
  const player = useRef(null)

  useEffect(() => {
    console.log(player.current)
  }, [])

  return (
    <div className="11111111">
      <NPlayer
        ref={player}
        className=" "
        style={{}}
        options={{ src: 'https://v-cdn.zjol.com.cn/280443.mp4' }}
      />
    </div>
  )
}
