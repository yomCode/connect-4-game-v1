import React, { useState } from 'react'
import GameCircle from './GameCircle'
import './Game.css'

const NO_PLAYER = 0
const PLAYER_1 = 1;
const PLAYER_2 = 2;


function GameBoard() {

  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  console.log(gameBoard)
  const circleClick = (id) => {
   debugger;
    // console.log('Circle ' + id + ' was clicked')
    gameBoard[id] = currentPlayer;
    setGameBoard(gameBoard);
    console.log(gameBoard)

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  }

  const renderCircle = (id) => {
    return <GameCircle id={id} className={`player_${gameBoard[id]}`} onCircleClick={circleClick} />

  }
 

   
  return (


    <div className='gameBoard'>
        {renderCircle(0)}
        {renderCircle(1)}
        {renderCircle(2)}
        {renderCircle(3)}
        {renderCircle(4)}
        {renderCircle(5)}
        {renderCircle(6)}
        {renderCircle(7)}
        {renderCircle(8)}
        {renderCircle(9)}
        {renderCircle(10)}
        {renderCircle(11)}
        {renderCircle(12)}
        {renderCircle(13)}
        {renderCircle(14)}
        {renderCircle(15)}
    </div>
  )
   
   
}

export default GameBoard