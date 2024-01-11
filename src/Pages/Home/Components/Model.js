import React from 'react'
import './Model.css'
import { FaTimes, } from 'react-icons/fa'

const Model = ({ HandleClick }) => {
  return (
    <>
      <div className='Overlay'>
        <div className='model'>
          <div className='model-worng-button'>
            <FaTimes style={{ color: "white" }} size={35} onClick={HandleClick} />
          </div>
          <iframe width="660" height="415" src="https://www.youtube.com/embed/llEX9oS0m2A?si=6ffhxAwYAnvgRakD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Model
