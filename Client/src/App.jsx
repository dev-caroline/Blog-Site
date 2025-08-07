import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Categories from './pages/Categories'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
        <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path='/about' element= {<About/>}/>
            <Route path='/blog' element= {<Blog/>}/>
            <Route path='/categories' element= {<Categories/>}/>
            <Route path='/contact' element= {<Contact/>}/>
        </Routes>
    </>
  )
}

export default App