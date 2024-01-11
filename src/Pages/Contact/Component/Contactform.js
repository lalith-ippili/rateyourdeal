import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import './Contactform.css'

const Contactform = () => {
  const [mail, setmail] = useState(true)
  const mailhandle = () => {
    setmail(!mail)
  }
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_5480hjn', 'template_j2aeu6e', form.current, 'jBPvk-UY_SIr7f86P')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  };
  return (
    <>
      <div className='Contactform-total-div'>
        <div className='Contactform-form-div'>
          <div>
            <img src='https://i.pinimg.com/564x/38/70/20/3870200bc28490733d4cbd74bf0421ce.jpg' className='Contact-form-side-image' />
          </div>
          <form ref={form} className='Contact-form-formtag' onSubmit={sendEmail}>
            {mail ? <div className='Contact-form-formtag'>
              <h1>Contact Us</h1>
              <div>
                <input type='text' placeholder='Enter Your Name' className='Contact-input-tag' name='user_name' />
              </div>
              <div>
                <input type='email' placeholder='Enter Your Email' className='Contact-input-tag' name='user_email' />
              </div>
              <div>
                <input type='password' placeholder='Enter Your Password' className='Contact-input-tag' name='user_password' />
              </div>
              <div>
                <input type='text' placeholder='Enter Your Subject' className='Contact-input-tag'
                  name='message' />
              </div>
              <div className='Contact-forn-submit-button'>
                <input type='submit' className='Contact-forn-submit-button' value="Submit" />
              </div>
              <div >
                <h3 className='contact-form-below-text'>Send Mail Directly ? <span onClick={mailhandle} className='contact-form-spam-tag'>Click </span> </h3>
              </div>
            </div> : <div className='contact-form-mail-div'>
              <div>
                <h1>Contact Us</h1>
              </div>
              <h4 className='contact-form-h4-head'> SEND EMAIL CLICK BELOW BUTTON</h4>
              <p><a href="mailto:rateyourdeal@gamil.com" className='contact-form-mail-button'>Click Me</a></p>
              <div>
                <h3 className='contact-form-below-text'>Send Total Details ? <span onClick={mailhandle} className='contact-form-spam-tag'>Click</span> </h3>
              </div>
            </div>}
          </form>
        </div>
      </div>
    </>

  )
}

export default Contactform