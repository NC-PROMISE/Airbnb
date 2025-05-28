import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div  className='text-center text-5xl mt-10'>
        <div>404 Not Found!</div>
        <Link to="/"><p className='bg-black text-white w-100 m-auto mt-20 rounded-4xl py-10'>Return To Home</p></Link>
    </div>

  )
}

export default Notfound