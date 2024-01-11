
import './App.css';
import Contact from './Pages/Contact/Contact';
import BackGroundDetails from './Pages/Home/Components/Buying/BackGroundDetails';
import Buying from './Pages/Home/Components/Buying/Buying';
import Selling from './Pages/Home/Components/Selling/Selling';
import Sellingform from './Pages/Home/Components/Selling/Sellingform';
import Home from './Pages/Home/Home';
import Login1 from './Pages/Login/Login1';
import Priceing from './Pages/Priceing/Priceing';


import {BrowserRouter as Router , Routes , Route, useParams} from 'react-router-dom'


function App() {
  const {data}=useParams()
  
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/rateyourdeal' element={ <Home/>} />
          <Route path='/Login' element={<Login1/>} />
          <Route path='/Priceing' element={  <Priceing/> } />
          <Route path='/Contact' element={  <Contact/>} />
          <Route path='/Sellingform' element={ <Sellingform/>} />
          <Route path='/Buying' element={ <Buying/>} />
          <Route path='/Selling' element={ <Selling/>} />
          <Route path={`/:${data}`} element={  <BackGroundDetails/>} />
         

        </Routes>
      </Router>
 
 

 
    </div>
  );
}

export default App;
