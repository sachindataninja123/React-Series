import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { productReducer } from "../redux/reducer/productReducer";

const Products = () => {
//   const products = useSelector((state) => state.products);
  
const products = useSelector(state => state. productReducer.products)


  return (
     <div className="text-white ">
    {JSON.stringify(products)}
    </div>
    )
};

export default Products;
