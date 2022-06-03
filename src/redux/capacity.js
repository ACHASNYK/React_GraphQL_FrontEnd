import { createSlice } from "@reduxjs/toolkit";

export const capacitySlice = createSlice({
    name: "capacityid",
    initialState: {
        value: '',
    },
    reducers: {
        set_capacityid: (state, action) => {
            state.value = action.payload;
        },
    },
});
  
// categorySlice.actions 

export const { set_capacityid } = capacitySlice.actions;
export default capacitySlice.reducer;