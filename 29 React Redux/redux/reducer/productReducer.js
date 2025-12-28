const initialState = {
  products: [],
  count: [],
};

export const productReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    // console.log("Add to cart reducer", action.payload);
    return {
      products: [...state.products, action.payload],
    };
  } else if (action.type === "INCREMENT") {
    
    return {
      ...state,
      count: [state.count + 1],
    };
  } else {
    return state;
  }
};
