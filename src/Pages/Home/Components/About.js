import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './About.css'

const About = ({heading}) => {
    return (
        <>
            <h1 className='About-head'>{heading} </h1>
            <div className='about-total-div'>
                <img src='https://img.freepik.com/premium-photo/hands-holding-big-basket-with-different-fresh-farm-vegetables_80090-2200.jpg?w=996' className='About-image' />
                <div className='about-content'>
                    <h2>BUY AND SELL SIMPLE YOUR PRODUCTS...</h2>
                    <p><span className='About-span'><i className="fas fa-arrow-right"></i>   </span> Every Farmer sell his own farming products simply and own price...</p>

                    <p><span className='About-span'><i className="fas fa-arrow-right"></i> </span> Every Person buy food products from farmers.In low cost and quality products...</p>
                </div>
            </div>
        </>
    )
}

export default About
