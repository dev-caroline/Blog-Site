import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'

const Contact = () => {
  return (
    <div className='font-serif'>
        <Navbar/>
        <div className='flex'>
        <SideNav/>
        <div className=' ps-50'>
            <div className='ms-30'>
                <h1 className='text-5xl border p-3 mt-20 ms-120'>
                    Contact
                </h1>
                <p className='mt-10'>Feel free to contact us through:</p>
                <div>
                    <p>Email: ajiboyecaroline95@gmail.com</p>
                    <p>Phone Number: 09138125642</p>
                    <p>LinkedIn Username: </p>
                    <p>Facebook Username: </p>
                    <p>Instagram Username: </p>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Contact