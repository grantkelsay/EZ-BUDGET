import React from 'react'
import Nav from '../Components/Nav'
import Tool from '../Components/Tool'

const HomePage = () => {
  return (
    <div className='overflow-x-hidden bg-[#303c43] min-h-screen min-w-screen'>
      <div>
        <Nav />
        <Tool />
      </div>
    </div>
  )
}

export default HomePage