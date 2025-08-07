import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'

const Blog = () => {
  return (
    <div className='font-serif'>
        <Navbar/>
        <div className='flex'>
        <SideNav/>
        <div className='ms-80'>

        </div>
        </div>
        
    </div>
  )
}

export default Blog