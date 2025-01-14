import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className='d-flex'>
      <div className="links">
        <ul className='d-flex'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <p>@ 2025 All rights reserved</p>

    </footer>
  )
}

export default Footer