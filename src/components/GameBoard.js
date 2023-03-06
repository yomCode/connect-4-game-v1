import React from 'react'
import GameCircle from './GameCircle'

function GameBoard() {

    const style = {display: 'grid', 
                    gridTemplateColumns: '1fr 1fr 1fr 1fr', 
                    gridTemplateRows: '1 fr 1fr 1fr 1fr', 
                    padding: 20, 
                    width: 500,
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    marginLeft: '-250px',
                }
  return (
    <div style={style}>
        <GameCircle id={1} backgroundcolor='red' />
        <GameCircle id={2} backgroundcolor='blue' />
        <GameCircle id={3} backgroundcolor='red' />
        <GameCircle id={4} backgroundcolor='blue' />
        <GameCircle id={5} backgroundcolor='red'/>
        <GameCircle id={6} backgroundcolor='blue' />
        <GameCircle id={7} backgroundcolor='red' />
        <GameCircle id={8} backgroundcolor='blue' />
        <GameCircle id={9} backgroundcolor='red' />
        <GameCircle id={10} backgroundcolor='blue' />
        <GameCircle id={11} backgroundcolor='red' />
        <GameCircle id={12} backgroundcolor='blue' />
        <GameCircle id={13} backgroundcolor='red'/>
        <GameCircle id={14} backgroundcolor='blue' />
        <GameCircle id={15} backgroundcolor='red' />
        <GameCircle id={16} backgroundcolor='blue' />
    </div>
  )
   
   
}

export default GameBoard