import React, { useEffect, useState } from 'react'
import GameCircle from './GameCircle'
import './Game.css'
import Header from './Header'
import Footer from './Footer'
import { isWinner, isDraw, ComputerMove } from '../helper';
import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN, NO_CIRCLE, NO_PLAYER, PLAYER_1, PLAYER_2 } from '../../src/Constant'





function GameBoard() {

  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);

  console.log(gameBoard)

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLE; i++) {
      circles.push(renderCircle(i))
    }
    return circles;
  }

  useEffect(() => {
    initGame();
  }, [])

  const initGame = () => {
    console.log('initGame')
    setGameBoard(Array(16).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
    setWinPlayer(NO_PLAYER);
    setGameState(GAME_STATE_PLAYING);
  }

  const suggestMove = () => {
   
    circleClick(ComputerMove(gameBoard));
  }


  const circleClick = (id) => {
    if(gameBoard[id] !== NO_PLAYER || gameState !== GAME_STATE_PLAYING){
      return;
    }
    if(isWinner(gameBoard, id, currentPlayer)){
      setGameState(GAME_STATE_WIN)
      setWinPlayer(currentPlayer);
    }

    if(isDraw(gameBoard, id, currentPlayer)){
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(NO_PLAYER);
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
      <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
      <div className='gameBoard'>
        {initBoard()}
      </div>
      <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} />
    </>
  )
   
   
}

export default GameBoard