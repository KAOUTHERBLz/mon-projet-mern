import React from 'react'
import {Container, Nav, Navbar,}from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../JS/Actions/user';



const NavBar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  
  
  const dispatch = useDispatch();
  return (
    <div>
              <Navbar bg="dark" variant="dark">
        <Container>
            <img src='https://th.bing.com/th/id/OIP.HsaeWsJvXe5zWb23Xd5xCQHaIk?w=163&h=188&c=7&r=0&o=5&pid=1.7' alt='logo' width="8%" />
          <Navbar.Brand href="/">home</Navbar.Brand>
          <Nav className="me-auto">
           
            {isAuth ? (
              <Nav.Link href="/">
                <button onClick={() => dispatch(logout())}>logout</button>
                <Nav.Link href="/Product">Product</Nav.Link>
                <Nav.Link href="/Profile">Profile</Nav.Link>
                 <Nav.Link href="/add">Add</Nav.Link>
              
            
              
               
              <div>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/Register">Register</Nav.Link>
                <Nav.Link href="/Order">Order</Nav.Link>
              </div>
            
             
                
                
                </Nav.Link>
                ) : (
              <div>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/Register">Register</Nav.Link>
                <Nav.Link href="/Aboutus">Aboutus</Nav.Link>
                
             
              </div>
             
              
            )}
          
          
            
          
            
        
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default NavBar;
