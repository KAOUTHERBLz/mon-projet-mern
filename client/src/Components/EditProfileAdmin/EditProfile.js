import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import {  useMatch, useNavigate } from 'react-router-dom';
import { updateAdminPassword } from '../../../../controllers/admin';


import './EditProfile.css'

const EditProfile = () => {

    const adminToGet = useSelector(state => state.adminReducer.admin)

    const match = useMatch("/edit/:id")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [newAdmin, setNewAdmin] = useState({})
  
    const handleChange = (e) => {
      setNewAdmin( {...newAdmin,[e.target.name] : e.target.value})   }
    const admin = useSelector((state)=> state.adminReducer.admin)  
    const handleEdit = () => {
      dispatch(updateAdminPassword(match.params.id ,newAdmin))
      navigate(`/profile/${admin._id}`)
    }
    
    return (
         <Form onSubmit={handleEdit }>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='forms'> password</Form.Label>
    <div>
    <Form.Control type="password" placeholder={`${adminToGet.password}`} name='' onChange={handleChange} value={newAdmin.password}   /> 
    </div>
  </Form.Group>
<div className='MAJ'>
<Button variant="secondary" onClick={()=>navigate(`/profile/${adminToGet._id}`)}><span >Annuler</span></Button>
  <Button onClick={handleEdit} className='editbtn'variant="light"  type="submit"><span className='boutontext'  >Mise à jour →</span></Button>
  </div>
</Form>
     
      
    );
}

export default EditProfile