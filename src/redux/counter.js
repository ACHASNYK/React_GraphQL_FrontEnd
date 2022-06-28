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
const {actions, reducer} = counterSlice;  
// categorySlice.actions 

export const { increment_count, decrement_count } = actions;
export default reducer;