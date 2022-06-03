import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        value: false,
    },
    reducers: {
        set_modal: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_modal } = modalSlice.actions;
export default modalSlice.reducer;