import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import Catnav from '../components/Catnav'
import Life_events from './Life_events'


const Categories = () => {
  return (
    <div className='font-serif'>
      <Navbar />
      <div className='flex'>
        <SideNav />
        <div className='ms-80'>
          <Catnav/>
          <h1 className='mt-70 ms-140 text-5xl text-gray-300'>Pick out your category...</h1>
        </div>
      </div>

    </div>
  )
}

export default Categories