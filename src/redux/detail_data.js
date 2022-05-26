import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "detailes",
    initialState: {
        value: {},
    },
    reducers: {
        set_detailes: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_detailes } = categorySlice.actions;
export default categorySlice.reducer;