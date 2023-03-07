import React from 'react'
import './Game.css'



function GameCircle({id, children, onCircleClick}) {


  return (
    
    <div className={`gameCircle ${id%2 === 0 ? 'odd' : 'even'}`} onClick={() => onCircleClick(id)} >
    
        {children}
    </div>
  )
}

export default GameCircle