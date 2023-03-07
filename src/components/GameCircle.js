import React from 'react'
import './Game.css'



function GameCircle({id, children,className, onCircleClick}) {


  return (
    
    <div className={`gameCircle ${className}`} onClick={() => onCircleClick(id)} >
    
        {children}
    </div>
  )
}

export default GameCircle