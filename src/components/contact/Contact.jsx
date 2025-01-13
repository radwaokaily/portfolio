import React from 'react'
import "./contact.css"
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzzozor");
  
  return (
    <section className="contact-us d-flex">
      <h3 className='d-flex'>
        <span className='icon-mail'></span>
        Contact me
      </h3>
      <p>Contact me for more information</p>
      <div className="contact-us-form d-flex">
    <div className="form">
      <form method='POST' action='https://formspree.io/f/xyzzozor' onSubmit={handleSubmit} className=''>
        <div className="email d-flex">

      <label htmlFor="email">Email Address</label>
      <input  type="email" name="email" id="email" />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>
        <div className="textarea d-flex">
          <label htmlFor="message">Your Message</label>
      <textarea  name="message" id="message"></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
      
      <button  type="submit" disabled={state.submitting}>Submit</button>
      </form>
      <div className='succeeded-message'>
        {state.succeeded && <h2>Thanks for contact me</h2>}
      </div>
    </div>
      <div className="animation-form"></div>
      </div>
    </section>
  )
}

export default Contact