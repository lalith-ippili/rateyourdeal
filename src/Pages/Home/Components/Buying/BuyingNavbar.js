import React, { useState } from 'react'
import './BuyingNavbar.css'
import BuyingProducts from './BuyingProducts'
import { Link } from 'react-router-dom'

const BuyingNavbar = () => {




const [Psearch,PsetSearch]=useState("")
const ChangeProductHandler=(e)=>{
  PsetSearch(e.target.value);
}
console.log(Psearch)

  return (
   <>
   <div className='Buyproductsblock'>
   <BuyingProducts Psearch={Psearch}/>
   </div>
   <div className='Buyingnamvbar-total-div'>
    <div>
        <h1>Logo</h1>
    </div>
    <div>

         <input type='search' name='name' placeholder='Search..'  className='Searchbarinput1' value={Psearch} onChange={ChangeProductHandler} />
    </div>
    <div className='buyingnavbar-content'>
        <Link to={"/rateyourdeal"}><h1>Home</h1></Link>
        <h1>Cart</h1>
        <Link to={"/Login"}><h1>Home</h1></Link>
    </div>
   </div>
   </>
  )
}

export default BuyingNavbar
