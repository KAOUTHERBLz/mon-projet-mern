import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { addOrder } from "../../JS/Actions/order";
import { getProduct } from "../../JS/Actions/product";
import { Form } from "react-bootstrap";
import cart from "./cart.png";
import "./AddOrder.css";

const AddOrder = () => {
  const match = useMatch("/addorder/:id");

  const productToGet = useSelector(
    (state) => state.productReducer.productToGet
  );
  const [newOrder, setNewOrder] = useState({
    productname: `${productToGet.name}`,
    email: "",
    adresse: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    dispatch(getProduct(match.params.id));
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(addOrder(newOrder, match.params.id));
    navigate("/");
  };

  return (
    <div>
      <h1>
        <p className="normed">PASSER UNE COMMANDE</p>
      </h1>

      <div className="commande-container">
        <div className="orderCard">
          <img
            src={`${productToGet}`}
            width="30%"
            alt="product"
          />

          <p className="forms"> Produit : {productToGet.name} </p>
          <div className="inputs">
            <div className="input-order">
              <p className="forms">E-mail :</p>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={newOrder.email}
              />
            </div>
            <div className="input-order">
              <p className="forms">Numéro de téléphone:</p>
              <Form.Control
                type="number"
                name="phone"
                onChange={handleChange}
                value={newOrder.phone}
              />
            </div>
            <div className="input-order">
              <p className="forms">Adresse:</p>
              <Form.Control
                type="text"
                name="adresse"
                onChange={handleChange}
                value={newOrder.adresse}
              />
            </div>

            <div className="btn66">
              <hr />
              <div
                class="button5"
                onClick={isAuth ? handleOrder : navigate("/login")}
              >
                Commander <img src={cart} className="cart" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;