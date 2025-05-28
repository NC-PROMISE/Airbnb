import React from 'react'
import Header from './Components/Header'
import Subheader from './Components/Subheader'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Dropdown from './Components/Dropdown'

function App() {
  return (
    <div>
      <Header />
      <hr className='mt-4 h-px border-gray-300 shadow-md'/>
      <Subheader />
      <Body />
      <Footer />
      

      

    </div>
  )
}

export default App