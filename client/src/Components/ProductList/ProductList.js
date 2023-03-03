import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from "../../JS/Actions/product"
import ProductCard from "../ProductCard/ProductCard";


const ProductList = () => {
  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  const dispatch = useDispatch();
  const load = useSelector((state) => state.productReducer.load);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="alignthem">
    
      {load ? (
        <h2>loading...</h2>
      ) : (
        listProducts.map((el) => <ProductCard product={el} key={el._id} />)
      )}
    </div>
  );
};

export default ProductList;