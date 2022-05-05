import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducer: {
        // addValue(state, action) {
        //    state = action.payload;
        // }
        addValue(state, action) {
        //    return action.payload;
           return (state = action.payload);
        }
    }
});  

export const {addValue} = filterSlice.actions;


// const changeFilter = e => {
    //   setFilter(e.currentTarget.value);
    // };