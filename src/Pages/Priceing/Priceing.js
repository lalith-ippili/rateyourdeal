import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import Footer from '../../Components/Footer/Footer'
import Sidebar from '../Home/Components/Buying/Sidebar'
import Table from 'react-bootstrap/Table';

import './Priceing.css'



const Priceing = () => {


  // sidebar start

  const LocationData = [
    {
      uniqueNo: 1,
      imageUrl: 'https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg?w=1060&t=st=1664378038~exp=1664378638~hmac=f4d15fb1cb9b8cbf94a6c883d587562c43360f5a2b45f099319ae74a3ac9ae6e',
      name: 'Srikakulam'
      

    },

    {
      uniqueNo: 2,
      imageUrl: 'https://img.freepik.com/free-photo/full-length-portrait-bearded-man-shirt-pointing-away_171337-15725.jpg?w=740&t=st=1664378103~exp=1664378703~hmac=07463d5fda66a40d59e6e4cfa15611c1a3693061df923e5855b0c9c98afea801',
      name: 'Vijayanagram'


    },
    {
      uniqueNo: 3,
      imageUrl: 'https://img.freepik.com/premium-photo/thinking-black-african-american-indian-black-man-with-serious-expression-looking-posing-isolated-yellow-background_255757-8960.jpg?w=1060',
      name: 'Vizag'


    },
    {
      uniqueNo: 4,
      imageUrl: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19391.jpg?w=740&t=st=1664457108~exp=1664457708~hmac=fafffa68a98e5bacaa28bfdef2f11fa74024377b6c82410f2ba1d8dfaf2bba39',
      name: 'East Godavari'


    },
    {
      uniqueNo: 5,
      imageUrl: 'https://img.freepik.com/premium-photo/thinking-black-african-american-indian-black-man-with-serious-expression-looking-posing-isolated-yellow-background_255757-8960.jpg?w=1060',
      name: 'West Godavari'

    },
    {
      uniqueNo: 6,
      imageUrl: 'https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?w=1060&t=st=1664456915~exp=1664457515~hmac=e97dd61d8acae6dd1c7b847c5ad355ef76fdcebdefce59afb2c17cf7eb741c4e',
      name: 'Nellore'

    },
    {
      uniqueNo: 7,
      imageUrl: 'https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg?w=1060&t=st=1664378038~exp=1664378638~hmac=f4d15fb1cb9b8cbf94a6c883d587562c43360f5a2b45f099319ae74a3ac9ae6e',
      name: 'Prakasam'


    },
    {
      uniqueNo: 8,
      imageUrl: 'https://img.freepik.com/free-photo/indian-man-black-suit-by-window-modern-building_496169-2868.jpg?w=1060&t=st=1664457017~exp=1664457617~hmac=bee7e031d0ff3860357bd62077a9eaefd39a9ceaf18a99982c8b59b33cc84a07',
      name: 'Chittoor'


    },
    {
      uniqueNo: 9,
      imageUrl: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19391.jpg?w=740&t=st=1664457108~exp=1664457708~hmac=fafffa68a98e5bacaa28bfdef2f11fa74024377b6c82410f2ba1d8dfaf2bba39',
      name: 'Guntur'


    },
    {
      uniqueNo: 10,
      imageUrl: 'https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?w=1060&t=st=1664456915~exp=1664457515~hmac=e97dd61d8acae6dd1c7b847c5ad355ef76fdcebdefce59afb2c17cf7eb741c4e',
      name: 'Krishna'


    },
    {
      uniqueNo: 11,
      imageUrl: 'https://img.freepik.com/premium-photo/thinking-black-african-american-indian-black-man-with-serious-expression-looking-posing-isolated-yellow-background_255757-8960.jpg?w=1060',
      name: 'YSR Kadapa'

    },

    {
      uniqueNo: 12,
      imageUrl: 'https://img.freepik.com/free-photo/indian-man-black-suit-by-window-modern-building_496169-2868.jpg?w=1060&t=st=1664457017~exp=1664457617~hmac=bee7e031d0ff3860357bd62077a9eaefd39a9ceaf18a99982c8b59b33cc84a07',
      name: 'Kurnool'


    }

  ]

  const [search, setSearch] = useState('');
  const[place,setplace]=useState("Srikakulam")

  const Changehandler = (e) => {
    setSearch(e.target.value);
  }
 
  const searchresult = LocationData.filter(eachuser => (eachuser.name.toLowerCase()).includes(search.toLowerCase()))


console.log(place)
  //side bar end

 
  return (
    <>
      <div>
        <div className='Price-details-navbar-div'>
          <Navbar />
        </div>

        <div className='Price-details-total-div'>
          <div className='Price-details-Sidebar'>
            <>
            <div className='Search-total-div'>
                <div className='Searchbar-div'>
                  <h1 className='Searchbar-head'>Search</h1>
                  <input type='search' name='name' placeholder='Search..' value={search} onChange={Changehandler} className='Searchbarinput' />
                </div>

                <div className='Disticnames-total'>
                  {searchresult.map((each) => {
                    return (<>
                      <div key={each.id} className='Disticnames1'>
                        {/* <img src={each.imageUrl} className='Area-image'/> */}
                        <h1 className='Disticnames' onClick={()=>{
                          setplace(each.name)
                        }} >{each.name}</h1>
                      </div>
                    </>)
                  })}
                </div>
              </div>
            </>
          </div>
          <div className='only-prices-div'>
            <div className='tables-div-pricees'>
              <h1 className='only-prices-div-main-head'> {place} </h1>
              <div>
                <Table responsive="sm" className='Srikakulam-table' border={1}>
                  <caption className='table-caption-head'>Vegetables : </caption>
                  <thead>

                    <tr>
                      <th>Weight</th>
                      <th>Potato</th>
                      <th>LadyFinger</th>
                      <th>Tamoto</th>
                      <th>Onions</th>
                      <th>Carrots</th>
                      <th>Cauliflower</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 KG</td>
                      <td>20</td>
                      <td>40</td>
                      <td>10</td>
                      <td>30</td>
                      <td>80</td>
                      <td>25</td>
                    </tr>

                  </tbody>

                </Table>
                <Table responsive="sm" className='Srikakulam-table' border={1}>
                  <caption className='table-caption-head'>Rice & Dal : </caption>
                  <thead>

                    <tr>
                      <th>Weight</th>
                      <th>Basmati Rice.</th>
                      <th>Brown Lentils</th>
                      <th>Brown Rice</th>
                      <th>Red Lentils</th>
                     <th>Beluga Lentils</th>
                      <th>French Green Lentils</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 KG</td>
                      <td>50</td>
                      <td>100</td>
                      <td>30</td>
                      <td>49</td>
                      <td>79</td>
                      <td>20</td>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
            {/* <div>
              <h1 className='only-prices-div-main-head'>Vijayanagram</h1>
              <div>
                <Table responsive="sm" className='Srikakulam-table' border={1}>
                  <caption className='table-caption-head'>Vegetables : </caption>
                  <thead>

                    <tr>
                      <th>Wight</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 KG</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>

                  </tbody>
                </Table>
                <Table responsive="sm" className='Srikakulam-table' border={1}>
                  <caption className='table-caption-head'>Rice & Dal : </caption>
                  <thead>

                    <tr>
                      <th>Wight</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 KG</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
            <div>
              <h1 className='only-prices-div-main-head'>Vijayanagram</h1>
              <div>
                <Table responsive="sm" className='Srikakulam-table' border={1}>
                  <caption className='table-caption-head'>Vegetables : </caption>
                  <thead>

                    <tr>
                      <th>Wight</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 KG</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>

                  </tbody>
                </Table>
                <Table responsive="sm" className='Srikakulam-table' border={1}>
                  <caption className='table-caption-head'>Rice & Dal : </caption>
                  <thead>

                    <tr>
                      <th>Wight</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 KG</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div> */}
          </div>

        </div>
        <div>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default Priceing
