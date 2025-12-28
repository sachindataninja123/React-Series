import {ADDTOCART , INCREMENT} from "../Constants/ProductConstant" 

export const addToCart = (details) => {
  return {
    type: ADDTOCART,
    payload: details,
  };
};

 export const increment = () => {
  return {
    type: INCREMENT,
  };
};

