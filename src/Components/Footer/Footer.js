import React from 'react'
import { Link } from 'react-router-dom'
import insta from '../../Assets/instagram.svg'
import facebook from '../../Assets/facebook.svg'
import twitter from '../../Assets/square-twitter.svg'
import './Footer.css'

const Footer = () => {
    const imagesarr=[insta,facebook,twitter]
    return (
        <>
            <footer className='footer-total-div'>
               
            <div className='futter-logo-div'>
            <img src='https://i.pinimg.com/736x/3e/15/92/3e15927908d138e06a18bf3e0e82cddf.jpg' className='Navbar-logo-image'/>
            </div>
                <div className='Footer-links-total-div'>
                    <h1>Useful Links</h1>
                    <div className='fotter-links'>
                        <div > 
                             <Link to="/rateyourdeal">Home</Link>
                             <div className='fotter-below-links'>
                             <h5> . Home</h5>
                             <h5> . About</h5>
                             <h5> . Services</h5>
                             <h5> . Avaliable Products</h5>
                             <h5> . Faq's</h5>
                             </div>
                            
                        </div>
                  
                    <div>
                    <Link to="/Training">Login</Link>
                    <div className='fotter-below-links'>
                             <h5> . Login</h5>
                             <h5> . Register</h5>
                            
                             </div>
                    </div>
                   <div>
                   <Link to="/Priceing">Price</Link>
                   <div className='fotter-below-links'>
                             <h5> . Price</h5>
                             <h5> . Areas</h5>
                             <h5> . Products</h5>
                             <h5> . Categorys</h5>
                           
                             </div>
                   </div>
                   <div>
                   <Link to="/Contact">Contact</Link>
                   <div className='fotter-below-links'>
                             <h5> . Contact</h5>
                             <h5> . Eamil</h5>
                            
                             </div>
                   </div>
                  
                    </div>
                </div>

                <div className='Social-media-images-div'>
             {imagesarr.map((each)=>{
                return(
                <img src={each} className='social-media-each-image'/>)})}
                </div>
            </footer>
        </>
    )
}

export default Footer
