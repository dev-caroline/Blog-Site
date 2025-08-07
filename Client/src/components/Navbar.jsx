import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className='flex justify-between p-6 bg-orange-500 text-white font-bold' style={{ position: 'sticky', top: 0, width: '100%'}}>
            <div className=''>Safe Space</div>
            <div className='flex gap-5 lg:gap-20 justify-end'>
                <Link to='/'>
                    <p className=''>Home</p>
                </Link>

                <Link to='/blog'>
                    <p className=''>Blog</p>
                </Link> 

                <Link to='/about'>
                    <p className=''>About</p>
                </Link> 
                
                <Link to='/categories'>
                    <p className=''>Categories</p>
                </Link> 

                <Link to='/contact'>
                    <p className=''>Contact</p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar