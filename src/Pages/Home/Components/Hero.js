import React from 'react'
import './Hero.css'
import video from '../../../Assets/spacevedio.mp4'
import video1 from '../../../Assets/vegetablevideo.mp4'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='hero-total-section' id='Home'>
            {/* <video src={video} autoPlay loop muted className='hero-video'></video> */}
             <video src={video1} autoPlay loop muted className='hero-video'></video>
            
            <div className='hero-content'>
                <h1>Eat Healthy Food</h1>
                <p>Give And Take Each Other...</p>
                <div className='hero-buttons'>
                    <Link to='/Login' state={true} className='Try-now-button'>Sell</Link>
                    <Link to='/Login' state={false} className='Try-now-button'>Buy</Link>
                </div>
            </div>

        </div>
    )
}

export default Hero
