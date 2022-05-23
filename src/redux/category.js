import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: 'all',
    },
    reducers: {
        set_category: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_category } = categorySlice.actions;
export default categorySlice.reducer;