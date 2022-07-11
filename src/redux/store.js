 import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productid';
import categoryReducer from './category';
import linkReducer from './imglink';
import detailReducer from './detail_data';
import swatchReducer from './swatchid';
import counterReducer from './counter'
import sizeReducer from './size';
import currencyReducer from './currency';
import modalReducer from './modal';

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