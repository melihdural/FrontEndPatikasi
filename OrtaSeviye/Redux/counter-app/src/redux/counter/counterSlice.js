import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        user: "Test"
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        handleSubmit: (state, action) => {
            state.user = action.payload;
        }
    },
});

export const {increment, decrement, handleSubmit} = counterSlice.actions;
export default counterSlice.reducer;