import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import Footer from '../../Components/Footer/Footer'

import './Login1.css'
import { Link, useLocation } from 'react-router-dom'

const Login1 = () => {
  const [change, setchange] = useState(true)


  const Registerbutton = () => {
    if (change === true) {
      setchange(false)
    }

  }
  const Loginbutton = () => {
    setchange(true)

  }
  const location1=useLocation()
  var data2=location1.state
 const [button1,setbutton1]=useState(data2)
 console.log(button1)
  return (
    <>
      <div className='Login-total-div'>
        <div>
          <Navbar />
        </div>
        <div className='Login-section-div'>


          <>
            {change ?
              <div className='Login-div-'>
                <div>
                  <img src='https://i.pinimg.com/564x/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.jpg' className='Login-div-image' />
                </div>
                <div className="login-total-div">
                  <form className='login-form-tag' >
                    <h4 className='Loginhead'>Login</h4>

                    <div className="login-text_area">
                      <input type="text" placeholder='Enter Your Email' className='login-text_input' required/>
                    </div>
                    <div className="login-text_area">
                      <input
                        type="password"
                        placeholder='Enter Your Password '
                        className='login-text_input'
                        required
                      />
                    </div>
                    <Link to={button1?"/Sellingform":"/Buying"}> <button type="submit" className="Login-submit-button">Submit</button></Link>

                  </form>


                  <div className='Login-below-text'>
                    <h3 className='Login-below-text'>You Don't have Account Please ? <span className='RegisterButton' onClick={Registerbutton}>Register </span> </h3>
                  </div>
                </div></div> :

              <div className='Login-div-'>
                <div>
                  <div>
                    <img src='https://i.pinimg.com/564x/36/f0/e7/36f0e76abd4a79445d4914b5d9c72bf3.jpg' className='rigister-div-image' />
                  </div>
                </div>
                <div className="register-total-div">

                  <form className='register-form-tag' >
                    <h4 className='Loginhead'>Register</h4>
                    <div className="login-text_area">
                      <input
                        type="text"
                        placeholder='Enter Your Name '
                        className='login-text_input'
                        required
                      />
                    </div>
                    <div className="login-text_area">
                      <input
                        type="email"
                        placeholder='Enter Your Email '
                        className='login-text_input'
                        required
                      />
                    </div>
                    <div className="login-text_area">
                      <input
                        type="password"
                        placeholder='Enter Your Password '
                        className='login-text_input'
                        required
                      />
                    </div>
                    <div className="login-text_area">
                      <input
                        type="password"
                        placeholder='Enter Your C.Password  '
                        className='login-text_input'
                        required
                      />
                    </div>
                    <Link to={'/Buying'}> <button type="submit" className="Login-submit-button">Submit</button></Link>

                  </form>


                  <div className='Login-below-text'>
                    <h3 className='Login-below-text'>Already Account ? <span className='RegisterButton' onClick={Loginbutton}>Login </span> </h3>
                  </div>
                </div>
              </div>}


          </>

        </div>
        {/* <div>
      <Footer />
      </div> */}
      </div>
    </>
  )
}

export default Login1
