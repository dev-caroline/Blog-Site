import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Glow_up_tips from './pages/Glow_up_tips'
import Tech_posts from './pages/Tech_posts'
import Life_events from './pages/Life_events'
import Christian_journey from './pages/Christian_journey'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/glow_up_tips' element={<Glow_up_tips />} />
        <Route path='/categories/tech_posts' element={<Tech_posts />} />
        <Route path='/categories/life_events' element={<Life_events />} />
        <Route path='/categories/christian_journey' element={<Christian_journey />} />
      </Routes>
    </>
  )
}

export default App