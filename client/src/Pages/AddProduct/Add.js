
import React, { useState } from 'react'
import{ Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../JS/Actions/product';


const Add = () => {
const[newProduct, setNewProduct]= useState({
  
    name:"",
    description:"",
   

  });
const dispatch =useDispatch();
const handlechange =(e) =>{
  setNewProduct({...newProduct,[e.target.name]: e.target.value});
};
const add = () => {
  dispatch(addProduct(newProduct));
}






  return (
    <div>
        <h1>Add product</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={newProduct.name}
        onChange={handlechange} />
        <Form.Label>description</Form.Label>
        <Form.Control type="description" placeholder="Enter description" name="description" value={newProduct.description} onChange={handlechange}/>
     

     </Form.Group>
     <Link to ='/Product'><Button variant="primary" type="submit" onClick={()=> add()}>
        Submit
      </Button>
      </Link> 
    </Form>
    </div>
  )
}

export default Add