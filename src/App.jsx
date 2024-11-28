import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen  w-screen overflow-x-hidden'>
      <Hero/>
      <About/>
      <NavBar/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>

    </main>
  )
}

export default App