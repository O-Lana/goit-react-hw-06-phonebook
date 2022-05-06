import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducer: {
        filterContacts(state, action) {
            return (state = action.payload);
        },
    }
});  

export const {filterContacts} = filterSlice.actions;

export const getFilterValue = state => state.contacts.filter;
