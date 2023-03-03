import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap"
import {Link, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { getProduct } from '../JS/Actions/product'


const Edit = () => {
  const {_id} = useParams();
  const [newProduct, setNewProduct]= useState({
    name: "",
  
    email: "",
    phone: ""
  });
  const productToGet = useSelector (state => state.productReducer.productToGet)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name] : e.target.value});
  };
  useEffect(() => {
    dispatch(getProduct(`${_id}`));
    
  }, )
  
  const edit = () => {
    dispatch (getProduct(_id, newProduct));
  };
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
            type="text" 
            placeholder={`${productToGet.name}`} 
            name='name' 
            value={newProduct.name} 
            onChange ={handleChange} 

        />
      
        <Form.Label>description </Form.Label>
        <Form.Control 
            type="description"
            placeholder= {`${productToGet.description}`}
            name='description' 
            value={newProduct.description} 
            onChange ={handleChange} />
              
      </Form.Group>
      <Link to={'/product'}>
      <Button 
        variant="primary" 
        type="submit"
        onClick={edit}
        >
        Submit
      </Button>
      </Link>
    </Form>
    </div>
  )
}

export default Edit