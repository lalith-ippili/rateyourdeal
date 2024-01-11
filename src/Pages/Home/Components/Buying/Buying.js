import React from 'react'
import Navbar from '../../../../Components/Navbar/Navbar'
import './Buying.css'
import BuyingProducts from './BuyingProducts'
import BuyingNavbar from './BuyingNavbar'
import BackGroundDetails from './BackGroundDetails'
import Sidebar from './Sidebar'



const Buying = () => {











  return (
    <>
      <div>

        <div className='BuyingNavbar-div'>
          <BuyingNavbar />
        </div>

        <div className='Buying-below-total-page'>
          <div className='buying-side-bar'>
            <Sidebar />
          </div>

          <div className='Buying-products'>
            <BuyingProducts />
          </div>

        </div>

      </div>



    </>
  )
}

export default Buying
