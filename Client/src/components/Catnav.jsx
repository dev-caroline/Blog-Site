import React from 'react'
import { Link } from 'react-router-dom'


const Catnav = () => {
    return (
        <div>
            <nav className='flex mt-10 gap-80 ms-30'>
                <Link to='/categories/life_events'>
                    <p className='border-b-2'>Life Events</p>
                </Link>
                <Link to='/categories/christian_journey'>
                    <p className='border-b-2'>Christian Journey</p>
                </Link>
                <Link to='/categories/glow_up_tips'>
                    <p className='border-b-2'>Glow up tips </p>
                </Link>
                <Link to='/categories/tech_posts'>
                    <p className='border-b-2'>Tech posts</p>
                </Link>
            </nav>
        </div>
    )
}

export default Catnav