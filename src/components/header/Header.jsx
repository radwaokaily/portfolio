import React, { useEffect, useState } from 'react'
import './header.css'
const Header = () => {
  const [showModal,setShowModal]=useState(false)
    const [them, setThem] = useState(localStorage.getItem("mood") ?? "dark");
  useEffect(()=>{
    if(them==="light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
    else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  },[them])
  return (
    <header className='d-flex' id='home'>
      <button onClick={()=>{
        setShowModal(true)
      }} className='menu icon-menu'>

      </button>
      <div className='name'>Radwa</div>
      <nav>
        <ul className='d-flex' >
        <li><a href="#home">Home</a></li>
          <li><a href="#hero">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>
      <button onClick={()=>{
        setThem("light")
        //send value to local storage
        localStorage.setItem("mood",them==="light"?"dark":"light")
        setThem(localStorage.getItem("mood"))
      }}>
        <span className={them==="light"? "icon-moon-o":"icon-sun"}></span>
      </button>
      {showModal && 
      (<div className="fixed">
        <ul className='modal' >
          <li><button className='icon-remove' onClick={()=>{setShowModal(false)}}></button></li>
        <li><a onClick={() => setShowModal(false)} href="#home">Home</a></li>
            <li className=''><a onClick={() => setShowModal(false)} href="#about">About</a></li>
            <li><a onClick={() => setShowModal(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setShowModal(false)} href="#contact">Contact</a></li>
          </ul>
        </div>)}
    </header>
  )
}

export default Header