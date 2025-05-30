// import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown() {
  return (
    <div className='z-50 absolute -left-40 -bottom-90'>
        <div className=' w-60 grid  space-y-4 py-5 bg-white shadow-lg rounded-md mx-10  '>
           <button className='px-5 text-left font-bold hover:bg-gray-200 hover:rounded-md hover:py-1 '>Messages</button>
           <button className='hover:bg-gray-200 hover:rounded-md hover:py-1 px-5 text-left font-bold'>Trips</button>
           <button className='hover:bg-gray-200 hover:rounded-md hover:py-1 px-5 text-left font-bold'>Wishlist</button>
           <hr className='border-gray-400'/> 
           <button className='hover:bg-gray-200 hover:rounded-md hover:py-1 px-5 text-left'>Manage listings</button>
           <button className='hover:bg-gray-200 hover:rounded-md hover:py-1 px-5 text-left'>Account</button>
           <hr className='border-gray-400'/> 
           <button className='hover:bg-gray-200 hover:rounded-md hover:py-1 px-5 text-left'>Help centre</button>
           <Link to="/login">
           <button className='hover:bg-gray-200 hover:w-full hover:rounded-md hover:py-1 px-5 text-left'>Log out</button> 
           </Link>
        </div>
           
    </div>
  )
}

export default Dropdown