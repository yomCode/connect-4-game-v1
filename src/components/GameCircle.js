import React from 'react'

const onClick = (id) => {
    alert('clicked ' + id)
    console.log(id)
}

function GameCircle({id, children, backgroundcolor}) {
  return (
    
    <div style={{backgroundColor: backgroundcolor, width: 100, height: 100, margin: 20, borderRadius: '50%'}} onClick={() => onClick(id)} >
    
        {children}
    </div>
  )
}

export default GameCircle