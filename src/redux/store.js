import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { itemsSlice } from './itemsSlice';
import { filterSlice } from './filterSlice';
// import { createAction, createReducer } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   items: itemsSlice.reducer,
//   filter: filterSlice.reducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: {
      contacts: combineReducers({
        items: itemsSlice.reducer,
        filter: filterSlice.reducer,
      }),
  }
});

//?const store = configureStore({
  // reducer: {
    // toHaveDescription.todosReducer,
  // },
// })