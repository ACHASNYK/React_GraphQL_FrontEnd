import { createSlice } from "@reduxjs/toolkit";

export const imglinkSlice = createSlice({
    name: "imglink",
    initialState: {
        value: '',
    },
    reducers: {
        set_imglink: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_imglink } = imglinkSlice.actions;
export default imglinkSlice.reducer;