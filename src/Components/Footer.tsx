import React from 'react'
import icon from '../assets/chevron-down.svg' 
import icon1 from '../assets/Vector (1).svg'
import icon2 from '../assets/Frame.svg'
import icon3 from '../assets/Facebook.svg' 
import icon4 from '../assets/Twitter.svg' 
import icon5 from '../assets/Instagram.svg' 



function Footer() {
  return (
    <div className=' bg-gray-100 py-9'>
        <div className='mx-15'>
            <p className='font-semibold text-[23px] '>Inspiration for future getaways</p>
            <div className='flex text-gray-500 gap-6 mt-5'>
                <p className='font-bold pb-5 hover:text-black hover:border-b-2'>Popular</p>
                <p className='font-bold pb-5 hover:text-black hover:border-b-2'>Historic</p>
                <p className='font-bold pb-5 hover:text-black hover:border-b-2'>Coastal</p>
                <p className='font-bold pb-5 hover:text-black hover:border-b-2'>Islands </p>
                <p className='font-bold pb-5 hover:text-black hover:border-b-2'>Lakes</p>
                <p className='font-bold pb-5 hover:text-black hover:border-b-2'>Unique stays</p>
                <p className='font-bold pb-5 hover:text-black hover:border-b-2'>Categories</p>
                <p className='font-bold pb-5 hover:text-black hover:border-b-2'>Things to do</p>
                 
            </div>
        </div>
        <hr className=' border-gray-400 shadow-md mx-15'/>

        <div className='mx-15 mb-15'>
          <div className='flex gap-20 mt-10 mb-10'>

             <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Holiday rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Flat rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Villa rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Flat rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Cottage rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Flat rentals</p>
             </div>

        </div>

        

        <div className='flex gap-20  mb-10'>

             <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Cottage rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Holiday rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Holiday rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Flat rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Holiday rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Villa rentals</p>
             </div>
             

            </div>
            <div className='flex gap-20  mb-10'>

             <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Holiday rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Flat rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Holiday rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Holiday rentals</p>
             </div>
              <div className=' w-30'>
              <p className='font-semibold '>Aberfeldy</p>
              <p className='text-gray-500'>Holiday rentals</p>
             </div>

              <div className=' w-29 flex'>
              <p className='font-semibold m-auto'>show more</p>
              <img src={icon} className='w-5 m-auto ' alt="" />
              
             </div>

        </div>
        </div>
        <hr className=' border-gray-400 shadow-md mb-10 '/>
        <div className='mx-15 mb-15 flex gap-45'>
           <div className='space-y-3  w-50'>
            <p className='font-bold '>Support</p>
            <p>Help centre</p>
            <p>AirCover</p>
            <p>Anti-discrimination</p>
            <p>Disability support</p>
            <p>Cancellation options </p>
            <p>Report neighbourhood concern</p>
           </div>
           <div className='space-y-3  w-50'>
            <p className='font-bold '>Hosting</p>
            <p>Airbnb your home</p>
            <p>AirCover for hosts</p>
            <p>Hosting resources</p>
            <p>Community forum</p>
            <p>Hosting responsibly</p>
            
           </div>
           <div className='space-y-3  w-50'>
            <p className='font-bold '>Airbnb</p>
            <p>Newsroom</p>
            <p>New features</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Gift cards</p>
            <p>Airbnb.org emergency stays</p>
           </div>
        </div>

        <hr className=' border-gray-400 shadow-md '/>
        <button className='bg-black text-white flex gap-2 m-auto px-5 py-3 rounded-full relative -top-6 '>Show map <img src={icon1} alt="" /></button>
        <div  className='flex gap-60 mx-15'>
          <div><p>© 2023 Airbnb, Inc. | Privacy | Terms | Sitemap | UK Modern Slavery Act | Company details</p></div>
          <p className='font-bold flex gap-3'><img src={icon2} alt="" />
            English (GB) | £ GBP <img src={icon3} alt="" />
            <img src={icon4} alt="" />
            <img src={icon5} alt="" />
          </p>
        </div>
    </div>
  )
}

export default Footer