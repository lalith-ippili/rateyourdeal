import React, { useState } from 'react'
import Navbar from '../../../../Components/Navbar/Navbar';
import './Sellingform.css'

const Sellingform = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [Check,SetCheck]=useState(false)
    const [Data,SetData]=useState({
      name:"",
      number:"",
      address:"",
      product:"",
      price:""
    })

    let changehandler = (e) => {
      SetData({ ...Data, [e.target.name]: e.target.value })

  }
  let uplodehandle=(e)=>{
    e.preventDefault();
    console.log(Data)
    SetCheck(!Check)
    console.log(Check)
    
  }
  
  return (
    <>
   <div className='Selling-form-navbar-div'>
   <Navbar />
   </div>
      <div className='selleruplodeform-total-div'>
        
        <form className='selleruplodeform-form-tag'>
          {Check?  <div>
            <div className='Checked-products-list'>
              <h1>Your Name : {Data.name}</h1>
              <h1>Your Number : {Data.number}</h1>
              <h1>Your Adderess : {Data.address}</h1>
              <h1>Your Product Name : {Data.product}</h1>
              <h1>Your Price 1 KG : {Data.price}</h1>
              <h1 id='Checked-products-para'>Successfully Uplode Your Product Please Check Your Details</h1>
            </div>
           </div>: <div className='selleruplodeform-form-inner-div'>
          <h1 className='selleruplodeform-head'>Fill The Form</h1>
          <input type='text' placeholder='Enter Your Name :' className='selleruplodeform-input-tag' name='name'onChange={changehandler} value={Data.name} required/>
          <input type='text' placeholder='Enter Your Ph.Number :' className='selleruplodeform-input-tag' name='number' onChange={changehandler} value={Data.number} required/>
          <input type='text' placeholder='Enter Your Adderess :' className='selleruplodeform-input-tag' name='address' onChange={changehandler} value={Data.address} required/>
          <input type='text' placeholder='Enter Your Product Name :' className='selleruplodeform-input-tag' name='product' onChange={changehandler} value={Data.product} required />
          <input type='text' placeholder='Enter Your Price for kg :' className='selleruplodeform-input-tag'name='price' onChange={changehandler} value={Data.price} required/>
          <div className="dataloginform-browser-photo1">
            <div className='selleruplodeform-uplode-image-div'>
              <h4 className='selleruplodeform-uplode-image-head'>Uplode Product Image</h4>
              <div className='selleruplodeform-uplode-image-file'>
                <input type="file" onChange={handleChange} />
              </div>
              <img src={file} className='selleruplodeform-uplode-image' />
            </div>
          </div>
          </div>
        }
         
          <div>
            {Check? <button type='submit' className='selleruplodeform-submit-button' onClick={uplodehandle}>Back</button>: <button type='submit' className='selleruplodeform-submit-button' onClick={uplodehandle}>Uplode</button>}
         
           
          </div>
        </form>

      </div>
    </>
  )
}

export default Sellingform
