import React, { useState } from 'react'
import GameCircle from './GameCircle'
import './Game.css'
import Header from './Header'
import Footer from './Footer'
import { isWinner } from '../helper';

const NO_CIRCLE = 16
const NO_PLAYER = 0
const PLAYER_1 = 1;
const PLAYER_2 = 2;


function GameBoard() {

  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  console.log(gameBoard)

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLE; i++) {
      circles.push(renderCircle(i))
    }
    return circles;
  }

  const circleClick = (id) => {
    if(isWinner(gameBoard, id, currentPlayer)){
      console.log('game over');
    }
    setGameBoard(prev=> {
      return prev.map((circle, index)=>{
        if(index === id){
          return currentPlayer
        }
        return circle
      })
    })

    console.log(gameBoard)

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    console.log(currentPlayer)
  }

  const renderCircle = (id) => {
    return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClick={circleClick} />

  }
 

   
  return (
    <>
      <Header player={currentPlayer} />
      <div className='gameBoard'>
        {initBoard()}
      </div>
      <Footer />
    </>
  )
   
   
}

export default GameBoard