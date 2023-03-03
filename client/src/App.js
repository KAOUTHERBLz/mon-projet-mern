import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css';

import Aboutus from './Pages/Aboutus'
import Error from './Pages/Error'
import NavBar from './Components/NavBar';
import Login from './Pages/Login/Login';


import Register from './Pages/Register/Register';

import Home from './Pages/Home/Home';

import Product from './Pages/Product/Product';

import { current } from './JS/Actions/user';
import { useDispatch } from 'react-redux';
import Order from './Pages/Order/Order';
import Profile from './Pages/ProfileAdmin/Profile';


import Edit from './Pages/Edit';
import AddProduct from './Pages/AddProduct/Add';



function App() {
  
    const dispatch = useDispatch();
    useEffect(() => {
      if (localStorage.getItem("token")) {
        dispatch(current());
      }
    }, [dispatch]);
  return (
    <div className="App">
    <NavBar />
      <h1>JUNK FOOD</h1>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/Aboutus" element= {<Aboutus/>} />
        <Route path="/Login" element= {<Login/>} />
        <Route path="/Register" element= {<Register/>} />
              
        <Route path="/Product" element= {<Product/>} />
        <Route path="/Profile" element= {<Profile/>} />
        <Route path="/Order" element= {<Order/>} />

          
        <Route path='/add' element={<AddProduct/>}/>
   
        <Route path='/edit/:_id' element={<Edit/>}/>
       
     
        <Route path="/*" element= {< Error/>} />
        </Routes>
     
    

    </div>
  );
}

export default App;
