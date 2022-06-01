import { createSlice } from "@reduxjs/toolkit";

export const pricesSlice = createSlice({
    name: "prices",
    initialState: {
        value: [],
    },
    reducers: {
        set_prices: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_prices } = pricesSlice.actions;
export default pricesSlice.reducer;