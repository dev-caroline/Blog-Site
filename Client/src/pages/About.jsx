import React from 'react'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='font-serif'>
      <Navbar />
      <div className='flex'>
        <SideNav />
        <div className='ms-80'>
          <h1 className='text-4xl font-bold ms-120 mt-20'>🦋 About Safe Space 🦋</h1>
          <div className='my-10 px-30 text-xl'>
            <h1 className='mt-3 font-bold text-2xl'>Welcome to Safe Space</h1>
            <p>Hello Reader, </p>
            <span>My Name is <span className='text-orange-500 underline'>Ajiboye Caroline Adetomiwa</span>. I'm a Full Stack Web developer, The creator of Safe Space (blogsite) and also the CEO of Tommie Closette . I love to write contents about: <br /> 💡<span className='text-blue-600'>Glow Up Tips . </span> <br /> 🕊️<span className='text-green-600'>Christianity Growth . </span> <br /> 💻<span className='text-yellow-500'>Tech Skills . </span> <br />
              That was why i created my blogsite - Safe Space as a little corner of the internet where thoughts, stories, and ideas can live without judgment. It is a text-based blogsite and also an active project to learn more and build my web development skill.  </span>

            <h1 className='mt-5 font-bold'>Why I Started This Blog</h1>
            <span>Sometimes life moves too fast, and we don’t get the chance to slow down and reflect. This blog is my way of pressing pause — sharing lessons from my tech journey, personal growth moments, and the little things that inspire me.</span>

            <h1 className='mt-5 font-bold'> What you'll find here</h1>
            <li>"Honest reflections about life and creativity"</li>
            <li>"Tech tips, coding experiments, and lessons learned"</li>
            <li>"Stories and thoughts worth sharing"</li>
            <li>"Random sparks of inspiration"</li>

            <h1 className='mt-5 font-bold'>A little about me</h1>
            <span>When I’m not coding or writing, you’ll probably find me sipping tea, exploring new ideas, or binging late-night podcasts. I believe that small acts of kindness can change the world, and that learning never stops.</span>


            <h1 className='mt-5 font-black'> This is Your Safe Space Too</h1>
            <span>
              Whether you’re here for the tech tips, the stories, or just a moment of calm — I’m glad you’re here. Take your time, read a little, and maybe even say hi through the
              <Link to='/contact'>
                <span className='text-blue-500 underline'> contact page</span>
              </Link>
            </span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About