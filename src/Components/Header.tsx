import React, { useState } from 'react'
import icon1 from '../assets/Frame1.svg'
import icon2 from '../assets/Vector-2.svg'
import icon3 from '../assets/Vector-3.svg'
import icon4 from '../assets/Icon-12.svg'
import icon5 from '../assets/Profile photo.svg'
import Dropdown from './Dropdown'

function Header() {
   const [showDropdown, setshowDropdown] = useState(false);


  return (
    <header className='flex mt-5 relative'>
        <div className=' relative -right-10 ' >
        <img src={icon1} alt="icon" className=''/>
    </div>
    
    <div className='flex gap-4 border border-2 border-gray-200 w-90 px-2 py-2  m-auto rounded-full relative -left-20 shadow-md'>
        <span>Anywhere</span>
        <span >|</span>
        <span>Any week</span>
        <span>|</span>
        <span>Add guests</span>
        <button className='bg-red-400 rounded-full w-7 h-7 ' >
            <img src={icon2} alt="" className='m-auto' />
        </button>
    </div>
    <div className=' w-45 flex gap-3 relative -left-20'>
        <p>Airbnb your home </p>
        <img src={icon3} alt=" " className='h-8 w-5' />
    </div>
      <div className='border flex gap-2 rounded-full px-2 relative -left-20 h-9 border-gray-200 shadow-md  relative'>
           <button className=''> <img src={icon4} alt="" className='w-5'
           onClick={() => setshowDropdown(!showDropdown)}
           /></button>
           {showDropdown && <Dropdown />}
            <img src={icon5} alt=""className='w-9' />
        </div>
    </header>
  )
}

export default Header