import React, { useState } from 'react';
import './BackGroundDetails.css';
import { useLocation } from 'react-router-dom';
import BuyingProducts from './BuyingProducts';
import Sidebar from './Sidebar';
import BuyingNavbar from './BuyingNavbar';
import Sellingform from '../Selling/Sellingform';

const BackGroundDetails = ({ image1, image2 }) => {
 
  const location = useLocation();
 
 var data1=location.state

 
 if (!data1) {
  return <div>Loading...</div>; // You can replace this with your loading indicator or any other logic
}
  
  const locationsarr = [
    {
      id: 1,
      img12:`${data1}`,
      img:`${data1}`,
      location: "Srikakulam",
      farmername: "A",
      phonenumber: "1234",
      price: "1 kg = $20"
    },
    {
      id: 2,
      img12:`${data1}`,
      img:`${data1}`,
      location: "Vizanaram",
      farmername: "B",
      phonenumber: "3456",
      price: "1 kg = $10"
    },
    {
      id: 3,
      img12:`${data1}`,
      img:`${data1}`,
      location: "Vizag",
      farmername: "C",
      phonenumber: "89000",
      price: "1 kg = $30"
    },
    {
      id: 4,
      img12:`${data1}`,
      img:`${data1}`,
      location: "Krishna",
      farmername: "s",
      phonenumber: "34354656",
      price: "1 kg = $15"
    },
    {
      id: 5,
      img12:`${data1}`,
      img:`${data1}`,
      location: "EastGodawari",
      farmername: "k",
      phonenumber: "89005667",
      price: "1 kg = $65"
    },
    {
      id: 6,
      img12:`${data1}`,
      img:`${data1}`,
      location: "Kadapa",
      farmername: "g",
      phonenumber: "354657",
      price: "1 kg = $13"
    }
  ];

  return (
    <>
   <div>
    <BuyingNavbar/>
  
   </div>
    <div className='Background-details-total-div'>

      <div>
         <Sidebar/>
      </div>
      <div className='Background-details-cards-div'>
        {locationsarr.map((each) => (
          <div key={each.id} className='Background-details-single-div'>
            <img src={each.img} className='Background-details-images' alt='Location' />
            <div className='Background-details-content'>
              <p>Place: {each.location}</p>
              <p>Farmer Name: {each.farmername}</p>
              <p>Phone No: {each.phonenumber}</p>
              <p>Price: {each.price}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='Background-details-below-cards-div1 Background-details-positions'>
        {locationsarr.map((each) => (
          <div key={each.id} className='Background-details-single-div1'>
            <img src={each.img12} className='Background-details-images' alt='Location' />
            <div className='Background-details-content1'>
              <p>Place: {each.location}</p>
              <p>Farmer Name: {each.farmername}</p>
              <p>Phone No: {each.phonenumber}</p>
              <p>Price: {each.price}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
    </>
  );
};

export default BackGroundDetails;
