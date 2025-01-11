import React, { useState } from 'react'
import './header.css'
const Header = () => {
  const [showModal,setShowModal]=useState(false)
  return (
    <header className='d-flex' >
      <button onClick={()=>{
        setShowModal(true)
      }} className='menu icon-menu'></button>
      <div className='name'>Radwa</div>
      <nav>
        <ul className='d-flex' >
          <li className=''><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>

      </nav>
      <button>
        <span className='icon-moon-o'></span>
      </button>
      {showModal && 
      (<div className="fixed">
        <ul className='modal' >
          <li><button className='icon-remove' onClick={()=>{setShowModal(false)}}></button></li>
            <li className=''><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>)}
    </header>
  )
}

export default Header