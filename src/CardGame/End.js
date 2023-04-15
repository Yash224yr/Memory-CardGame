import React, { useContext } from 'react'
import { cardcontext } from './Memory'

function End() {
    const {moves, setmoves} = useContext(cardcontext)
  return (
    <div className='end'>
        <h1>Game Finished</h1>
        <p>Moves Taken : {moves}</p>
    </div>
  )
}

export default End