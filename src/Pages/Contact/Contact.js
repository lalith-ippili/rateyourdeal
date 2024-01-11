import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import Footer from '../../Components/Footer/Footer'

import './Contact.css'
import Contactform from './Component/Contactform'



const Contact = () => {
  return (
    <>
    <div>
    <Navbar />
    </div>
    <div>
<Contactform/>
</div>
<div className='contact-form-futter-section'>
    <Footer />
    </div>
  </>
  )
}

export default Contact
