import React from "react";
import { Button, Card } from "react-bootstrap";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./ProductCard.css";
import { deleteProduct} from "../../JS/Actions/product";

  const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
 

    
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product._id));
    window.location.reload();
  }
     
 
  ;
  
  return (
    <div>
      <Card style={{ width: "17rem" }} className="j17">
        <Card.Body>
          
          <div>
           
          </div>
          <Card.Text>{product.name}</Card.Text>
          <img src="https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" alt="dispo" className="dispoarticle" />
          <Card.Text>{product.price}</Card.Text>
        
          
          <Card.Text>{product.description}</Card.Text>

          
          <Button
            className="btnproduct"
            variant="light"
            href="tel:+216-78443500"
          >
            {" "}
            <span className="v44">Appelez pour commander </span>
             
          </Button>
          <div
            className="button5"
            onClick={() => navigate(`/addProduct/${product._id}`)}
          >
            {" "}
           
            Passer une commande <img
              src="https://thumbs.dreamstime.com/b/icon-store-cart-icon-store-cart-vector-illustration-isolated-white-background-112426610.jpg"
              className="cart"
              alt="img"
              
            />{" "}
          </div>
         
            <Button variant="danger" onClick={handleDelete}>
              <DeleteOutlineIcon>Supprimer produit</DeleteOutlineIcon>
            </Button>

            
       


        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;