import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <section className="contact-us d-flex">
      <h3 className='d-flex'>
        <span className='icon-mail'></span>
        Contact me
      </h3>
      <p>Contact me for more information</p>
      <div className="contact-us-form d-flex">

      <form action="" className=''>
        <div className="email d-flex">

      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="email" />
        </div>
        <div className="textarea d-flex">
          <label htmlFor="message">Your Message</label>
      <textarea name="message" id="message"></textarea>
        </div>
      
      <button>Submit</button>
      </form>
      <div className="animation-form"></div>
      </div>
    </section>
  )
}

export default Contact