import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "productid",
    initialState: {
        value: '',
    },
    reducers: {
        set_productid: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_productid } = productSlice.actions;
export default productSlice.reducer;