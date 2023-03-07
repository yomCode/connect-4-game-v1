import React from 'react'
import './Game.css'
import { GAME_STATE_PLAYING } from '../Constant'

function Footer({onNewGameClick, onSuggestClick, gameState}) {

    const renderButton = () => {
        if(gameState !== GAME_STATE_PLAYING){
            return <button onClick={onNewGameClick}>New Game</button>
        }
        return <button onClick={onSuggestClick}>Suggest</button>
    }
  return (
    <div className='panel footer'>
      {renderButton()}
    </div>
  )
}

export default Footer