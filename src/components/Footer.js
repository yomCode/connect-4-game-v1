import React from 'react'
import './Game.css'

function Footer({onNewGameClick}) {
  return (
    <div className='panel footer'>
        <button onClick={onNewGameClick}>New Game</button>
    </div>
  )
}

export default Footer