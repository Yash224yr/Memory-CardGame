import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cardcontext } from './Memory' 

function Start() {


  return (
    <div className='start'>
        <button > <Link to="card" >Let's Start</Link> </button>
    </div>
  )
}

export default Start