import React from 'react'
import GameCircle from './GameCircle'
import './Game.css'

function GameBoard() {

  const circleClick = (id) => {
    console.log('Circle ' + id + ' was clicked')
  }

   
  return (
    <div className='gameBoard'>
        <GameCircle id={1} onCircleClick={circleClick} />
        <GameCircle id={2} onCircleClick={circleClick}  />
        <GameCircle id={3} onCircleClick={circleClick} />
        <GameCircle id={4} onCircleClick={circleClick}  />
        <GameCircle id={5} onCircleClick={circleClick}/>
        <GameCircle id={6} onCircleClick={circleClick}  />
        <GameCircle id={7} onCircleClick={circleClick} />
        <GameCircle id={8} onCircleClick={circleClick}  />
        <GameCircle id={9} onCircleClick={circleClick} />
        <GameCircle id={10} onCircleClick={circleClick}  />
        <GameCircle id={11} onCircleClick={circleClick} />
        <GameCircle id={12} onCircleClick={circleClick}  />
        <GameCircle id={13} onCircleClick={circleClick}/>
        <GameCircle id={14} onCircleClick={circleClick} />
        <GameCircle id={15} onCircleClick={circleClick} />
        <GameCircle id={16} onCircleClick={circleClick} />
    </div>
  )
   
   
}

export default GameBoard