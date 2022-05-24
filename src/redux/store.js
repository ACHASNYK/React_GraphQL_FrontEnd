 import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/productid';
import categoryReducer from '../redux/category';
import linkReducer from '../redux/imglink'

const store = configureStore({
    reducer: {
     category: categoryReducer,
    productid: productReducer,
     imglink: linkReducer
    },
  });

  export default store