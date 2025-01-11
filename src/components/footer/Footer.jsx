import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className='d-flex'>
      <div className="links">
        <ul className='d-flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <p>@ 2025 All rights reserved</p>

    </footer>
  )
}

export default Footer