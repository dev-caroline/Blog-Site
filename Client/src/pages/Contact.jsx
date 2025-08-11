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
            <div className='ms-60 container'>
                <h1 className='text-4xl border p-3 mt-20 lg:ms-120 text-center'>CONTACT US</h1>
                <div>
                <p className='mt-10 text-2xl underline '>Feel free to contact us through:-</p>
                    <p>Email: ajiboyecaroline95@gmail.com</p>
                    <p>Phone Number: 09138125642</p>
                    <p>LinkedIn Username: </p>
                    <p>Facebook Username: </p>
                    <p>Instagram Username: </p>
                </div>
                <h1 className='text-4xl border p-3 mt-20 lg:ms-120 text-center'>OR</h1>
                <div className=' mt-19 '>
                    <p>Drop your Message here:</p> <br />
                    <textarea name="" id="" className='w-200 border-3'></textarea> <br />
                    <button className='p-1 border-2 border-orange-500 font-bold bg-amber-200'> Send <i class="fa-solid fa-paper-plane"></i> </button>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Contact