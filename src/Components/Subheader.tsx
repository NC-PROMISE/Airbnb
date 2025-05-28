import React from 'react'
import img1 from '../assets/Icon.svg'
import img2 from '../assets/Icon-1.svg'
import img3 from '../assets/Icon-2.svg'
import img4 from '../assets/Icon-3.svg'
import img5 from '../assets/Icon-4.svg'
import img6 from '../assets/Icon-5.svg'
import img7 from '../assets/Icon-6.svg'
import img8 from '../assets/Icon-7.svg'
import img9 from '../assets/Icon-8.svg'
import img10 from '../assets/Icon-9.svg'
import img11 from '../assets/Icon-10.svg'
import img12 from '../assets/Icon-11.svg'
import img13 from '../assets/Vector.svg'
import img14 from '../assets/Vector-1.svg'



function Subheader() {
  return (
    <div>
        <div className='flex flex-row gap-10 px-10 '>
            <button className='  mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img1} alt="" />
                <p className='text-[12px]'>Amazing views</p></button>

                <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img2} alt="" />
                <p className='text-[12px]'>Cabins</p></button>

                <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img3} alt="" />
                <p className='text-[12px]'>Beachfront</p></button>

                <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img4} alt="" />
                <p className='text-[12px]'>Skiing</p></button>

                <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img5} alt="" />
                <p className='text-[12px]'>Grand pianos</p></button>

                <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img6} alt="" />
                <p className='text-[12px]'>Mansions</p></button>

                <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img7} alt="" />
                <p className='text-[12px]'>OMG!</p></button>

                <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img8} alt="" />
                <p className='text-[12px]'>Amazing pools</p></button>

                <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img9} alt="" />
                <p className='text-[12px]'>Luxe</p></button>

                  <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img10} alt="" />
                <p className='text-[12px]'>Boats</p></button>

                  <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img11} alt="" />
                <p className='text-[12px]'>Lakefront</p></button>

                  <button className=' mt-5 filter brightness-0 invert grayscale contrast-1 hover:filter-none hover:border-b-2 ' >
                <img className=' w-8 m-auto ' src={img12} alt="" />
                <p className='text-[12px]'>Teehouses</p></button>
                <div className=' border px-[-0.08px] py-[-0.08px]  m-auto rounded-full  '><img className='p-3 m-auto' src={img13} alt="" /></div>
                <div className='flex border gap-2 m-auto px-2 py-3 rounded-md '><img className=' w-3' src={img14} alt="" /><p >Filters</p></div>
        </div>
    </div>
  )
}

export default Subheader