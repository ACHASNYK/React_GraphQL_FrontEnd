 import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/productid';
import categoryReducer from '../redux/category';
import linkReducer from '../redux/imglink'
import detailReducer from '../redux/detail_data'

const store = configureStore({
    reducer: {
     category: categoryReducer,
      productid: productReducer,
      imglink: linkReducer,
     detailes: detailReducer,
    },
  });

  export default store