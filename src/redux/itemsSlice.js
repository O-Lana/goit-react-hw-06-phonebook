import { createSlice } from '@reduxjs/toolkit';

//   {
//     contacts: {
//       items: [],
//       filter: ''
//     }
//   }
  
  export const itemsSlice = createSlice({
    name: 'items',
    initialState: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    reducers: {
        addContact(state, action) {
            state.push(action.payload)
        },
        deleteContact(state, action) {
            state.contacts.items.filter(item => item.id !== action.payload);
            
        }
    }
  });

  
  export const {addContact, deleteContact} = itemsSlice.actions;

//   removeTodo(state, action) {
//     state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
// }