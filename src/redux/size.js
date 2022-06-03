import { createSlice } from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
    name: "sizeid",
    initialState: {
        value: '',
    },
    reducers: {
        set_sizeid: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_sizeid } = sizeSlice.actions;
export default sizeSlice.reducer;