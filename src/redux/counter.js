import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment_count: (state) => {
            state.value  +=1;
        },

        decrement_count: (state) => {
            state.value -=1;
        }
    },
});
  
// categorySlice.actions 

export const { increment_count, decrement_count } = counterSlice.actions;
export default counterSlice.reducer;