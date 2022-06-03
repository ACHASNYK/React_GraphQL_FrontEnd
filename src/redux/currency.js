import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: "currencyid",
    initialState: {
        value: '0',
    },
    reducers: {
        set_currencyid: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_currencyid } = currencySlice.actions;
export default currencySlice.reducer;