 import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/productid';
import categoryReducer from '../redux/category';
import linkReducer from '../redux/imglink';
import detailReducer from '../redux/detail_data';
import swatchReducer from '../redux/swatchid';
import capacityReducer from '../redux/capacity';
import sizeReducer from '../redux/size';
import currencyReducer from '../redux/currency';

const store = configureStore({
    reducer: {
     category: categoryReducer,
      productid: productReducer,
      imglink: linkReducer,
      detailes: detailReducer,
      swatchid: swatchReducer,
      capacityid: capacityReducer,
      sizeid: sizeReducer,
      currencyid: currencyReducer,
    },
  });

  export default store