 import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/productid';
import categoryReducer from '../redux/category';
import linkReducer from '../redux/imglink';
import detailReducer from '../redux/detail_data';
import swatchReducer from '../redux/swatchid';
import counterReducer from '../redux/counter'
import sizeReducer from '../redux/size';
import currencyReducer from '../redux/currency';
import modalReducer from '../redux/modal';

const store = configureStore({
    reducer: {
     category: categoryReducer,
      productid: productReducer,
      imglink: linkReducer,
      detailes: detailReducer,
      swatchid: swatchReducer,
      counter: counterReducer,
      sizeid: sizeReducer,
      currencyid: currencyReducer,
      modal: modalReducer,
      
    },
  });

  export default store