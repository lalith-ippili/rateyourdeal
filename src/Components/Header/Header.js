import React from 'react'
import './Header.css'

const Header = ({heading}) => {
  return (
    <>
    <section className='header-total-div'>
      <h1 className='header-total-div-head'>{heading}</h1>
      <p className='header-paragraph'>Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit</p>
    </section>
    </>
  )
}

export default Header
