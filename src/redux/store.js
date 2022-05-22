 import { configureStore } from "@reduxjs/toolkit";
 import categoryReducer from '../redux/category'
 const store = configureStore({
    reducer: {
      category: categoryReducer,
    },
  });

  export default store