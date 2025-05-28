import React from 'react'
import facebook from '../assets/logins/Facebook.svg'
import google from '../assets/logins/Google.svg'
import apple from '../assets/logins/Apple.svg'
import mail from '../assets/logins/mail.svg'
import close from '../assets/logins/Close button.svg'
import { Link } from 'react-router-dom'


function Login() {
  return (
   <div className=' w-150 m-auto mt-5 py-5 rounded-md shadow-lg'>
    <div className=' px-5 flex gap-45 my-5'>
         <img src={close} alt="" />
         <p className='font-bold'>Log in or sign up</p>
    </div>
    <hr className='w-full border-gray-400 shadow-md'/>
    <div className='px-5 my-5'>
       <p className='mb-7 text-[22px] font-semibold'>Welcome to Airbnb</p>
       <input className='border pl-5 w-full mb-5 py-3 rounded-md  ' type="email" placeholder='Email'/><br />
        <Link to="/">
            <button className='font-bold bg-gradient-to-r from-[#fe375b] to-[#db0a65] w-full py-3 rounded-md text-white'>Continue</button>
        </Link>
    </div>
    <div className='flex justify-center px-5 my-4'>
      <div className='flex-1 border-gray-200 border relative -bottom-3 h-px'></div>
      <span className='px-3'>or</span>
      <div className='flex-1 border-gray-200 border h-px relative -bottom-3'></div> 
    </div>
    <div className='flex gap-45 border mx-5 px-5 py-2 rounded-md shadow mb-5'>
      <img src={facebook} alt="" />
      <p className='font-bold'>Continue with Facebook</p>
    </div>
    <div className='flex gap-45 border mx-5 px-5 py-2 rounded-md shadow mb-5'>
      <img src={google} alt="" />
      <p className='font-bold'>Continue with Google</p>
    </div>
    <div className='flex gap-45 border mx-5 px-5 py-2 rounded-md shadow mb-5'>
      <img src={apple} alt="" />
      <p className='font-bold'>Continue with Apple</p>
    </div>
    <Link to="/loginph">
    <div className='flex gap-45 border mx-5 px-5 py-2 rounded-md shadow mb-5'>
      <img src={mail} alt="" />
      <p className='font-bold'>Continue with Phone</p>
    </div>
    </Link>
   </div>
  )
}

export default Login