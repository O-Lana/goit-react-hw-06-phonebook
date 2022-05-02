import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { itemsSlice } from './itemsSlice';
// import { createAction, createReducer } from '@reduxjs/toolkit';



export const store = configureStore({
  reducer: {
      contacts: combineReducers({
        items: itemsSlice.reducer,
        // filter: filterReducer,
      }),
  }
});



// export const add = createAction('items/add');
// export const remove = createAction('items/remove');

// const itemsReducer = createReducer([], {
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });

// const filterReducer = createReducer('', {})



// contacts: combineReducers({ contactsSlice.reducer, filterSlice.reducer})

// export const store = configureStore({
//   reducer: {
//     contacts: combineReducers({
//       items: contactsSlice.reducer,
//       filter: filterSlice.reducer,
//     }),
//   },
// });