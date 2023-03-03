import React, { useState } from 'react'
import { Button ,Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  Link } from 'react-router-dom';
import { register } from '../../JS/Actions/user';



import "./Register.css";
const Register = () => {
  
  const [user, setUser] = useState

  
  ({
    name:"",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    
  };

  const handleUser = () => {
    dispatch(register(user));
  
  };

  return (
    
    
      

<form class="input-form">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" placeholder='Enter name' name="name" value={user.name}  onChange={handleChange}/>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" class="form-control" placeholder='Enter email' name="email"   value={user.email}
        onChange={handleChange}/>
          <Form.Label>password</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
<Link to="/Product">
        <Button variant="primary" type="submit" onClick={handleUser}>
          Login
        </Button>
      </Link>
    </div></form>
  )
}

export default Register
