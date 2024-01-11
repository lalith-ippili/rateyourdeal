import React, { useState } from 'react'
import './BuyingProducts.css'
import BuyingNavbar from './BuyingNavbar'
import BackGroundDetails from './BackGroundDetails'
import { Link } from 'react-router-dom'

const BuyingProducts = () => {
  const Vegetablearr = [
    {
      id: 1,
      img1: "https://cdn.pixabay.com/photo/2018/08/08/16/17/potatoes-3592527_1280.jpg",
      name: "Potato",
      img2: "https://cdn.pixabay.com/photo/2013/03/02/01/25/rice-89014_1280.jpg",
      name2: "Basmati Rice."
    },
    {
      id: 2,
      img1: "https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_1280.jpg",
      name: "Tomata",
      img2: "https://cdn.pixabay.com/photo/2020/04/28/17/00/lens-5105412_1280.jpg",
      name2: "Brown Lentils"
    },
    {
      id: 3,
      img1: "https://cdn.pixabay.com/photo/2020/09/10/22/05/okra-5561569_1280.jpg",
      name: "Lady Finger",
      img2: "https://cdn.pixabay.com/photo/2014/04/05/11/39/rice-316532_1280.jpg",
      name2: "Brown Rice"
    },
    {
      id: 4,
      img1: "https://cdn.pixabay.com/photo/2014/10/22/21/53/red-onions-vegetables-499066_1280.jpg",
      name: "Onions",
      img2: "https://cdn.pixabay.com/photo/2013/03/02/01/25/rice-89014_1280.jpg",
      name2: "Basmati Rice."
    },
    {
      id: 5,
      img1: "https://cdn.pixabay.com/photo/2015/03/14/14/00/carrots-673184_1280.jpg",
      name: "Carrots",
      img2: "https://media.istockphoto.com/id/1322613316/photo/rice-in-wooden-bowl-on-rice-and-rice-ears-background-natural-food-high-in-protein.jpg?s=2048x2048&w=is&k=20&c=E_w0B_VIzf7KbO5RsPcLhlCCHAnnZqQ0dYhTPL89IAc=",
      name2: "Jasmine Rice"
    },
    {
      id: 6,
      img1: "https://cdn.pixabay.com/photo/2016/09/04/17/28/cauliflower-1644626_1280.jpg",
      name: "cauliflower",
      img2: "https://cdn.pixabay.com/photo/2015/02/08/13/05/lentils-628468_1280.jpg",
      name2: "Red Lentils"
    },
    {
      id: 7,
      img1: "https://cdn.pixabay.com/photo/2016/09/19/23/13/cucumber-1681504_1280.jpg",
      name: "cucumbers",
      img2: "https://cdn.pixabay.com/photo/2014/10/08/03/49/rice-478822_1280.jpg",
      name2: "Black Rice"
    },
    {
      id: 8,
      img1: "https://cdn.pixabay.com/photo/2014/10/22/21/53/red-onions-vegetables-499066_1280.jpg",
      name: "Onions",
      img2: "https://cdn.pixabay.com/photo/2013/03/02/01/25/rice-89014_1280.jpg",
      name2: "Basmati Rice."
    },
    {
      id: 9,
      img1: "https://cdn.pixabay.com/photo/2018/10/03/22/08/kohl-3722517_1280.jpg",
      name: "cabbages",
      img2: "https://cdn.pixabay.com/photo/2017/09/08/14/02/lentils-2728850_1280.jpg",
      name2: "French Green Lentils"
    },
    {
      id: 10,
      img1: "https://cdn.pixabay.com/photo/2016/07/23/17/10/radish-1537141_1280.jpg",
      name: "radishes",
      img2: "https://cdn.pixabay.com/photo/2020/04/28/17/00/lens-5105412_1280.jpg",
      name2: "Brown Lentils"
    },
    {
      id: 11,
      img1: "https://cdn.pixabay.com/photo/2014/10/22/21/54/bell-peppers-499068_1280.jpg",
      name: "bell peppers",
      img2: "https://cdn.pixabay.com/photo/2019/01/05/14/03/lens-3915098_1280.jpg",
      name2: "Beluga Lentils"
    },

  ]
  // console.log(ProductSearch)

  const [VImage, VSetImage] = useState({
    img1:""
  });

  const [RImage, RSetImage] = useState({
    img2:""
  });



  const VSetImagehandle = (each) => {
    VSetImage(each.img1)


  }
  const RSetImagehandle = (each) => {
    RSetImage(each.img2)
   
    

  }
  const [img122,setimg123]=useState("")
  console.log(img122)
 


  return (

    <>
        <div >

        <div className='BuyingProducts-total-div'>
          <h1 className='c'>Vegetables</h1>
          <div className=''>
            <div className='Vegetable-cards'>


              {Vegetablearr.map((each) => {
                return (
                  <>
                    <div className='Vegetable-single-card' key={each.id}>
                      <img src={each.img1} alt='vegetable-images' className='vegetable-images' />
                      <h4>{each.name}</h4>
                      <Link to={`/:${each.name}`} state={each.img1}><button className='Buying-product-button' onClick={()=>setimg123(each.img1)}>ViewMore</button></Link> 
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className='BuyingProducts-totai-div'>
          <h1 className='c'>Rices & Dals</h1>
          <div className=''>
            <div className='Vegetable-cards'>
              {Vegetablearr.map((each) => {
                return (
                  <>
                    <div className='Vegetable-single-card' key={each.id}>
                      <img src={each.img2} alt='vegetable-images' className='vegetable-images' />
                      <h4>{each.name2}</h4>
                     <Link to={`/:${each.name2}`} state={each.img2}><button className='Buying-product-button'>ViewMore</button></Link> 
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default BuyingProducts
