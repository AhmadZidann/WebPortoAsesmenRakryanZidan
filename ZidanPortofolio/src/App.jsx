import React from 'react'
import Navbar from './components/navbar'
import Hero from './section/hero'
import Service from './section/service'
import Project from './section/project'
import './index.css'
import Contact from './section/contact'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
