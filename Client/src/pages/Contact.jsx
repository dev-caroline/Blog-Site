import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'

const Contact = () => {
  return (
    <div className='font-serif'>
        <Navbar/>
        <div className='flex'>
        <SideNav/>
        <div className='mx-auto ps-50'>
            <div>
                <h1 className='text-center text-5xl border p-3'>
                    Contact
                </h1>
                <div>
                    
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Contact