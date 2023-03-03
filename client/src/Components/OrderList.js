import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrders } from "../JS/Actions/order";

import OrderCard from "./OrderCrad/OrderCard";


const OrderList = () => {
  const listProducts = useSelector(
    (state) => state.productReducer.listOrders
  );
  const dispatch = useDispatch();
  const load = useSelector((state) => state.orderReducer.load);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div className="alignthem">
    
      {load ? (
        <h2>loading...</h2>
      ) : (
        listProducts.map((el) => <OrderCard product={el} key={el._id} />)
      )}
    </div>
  );
};

export default OrderList;