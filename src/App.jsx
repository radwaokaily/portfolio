import { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Hero from './components/hero/Hero'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <main className='container bg-secondary-color'>
      <Header/>
      <Hero/>
      <div className='dvider'/>
      <Main/>
      <div className='dvider'/>
      <Contact/>
      <div className='dvider'/>
      <Footer/>
    </main>
  )
}

export default App
