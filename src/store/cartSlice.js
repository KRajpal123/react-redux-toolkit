import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  //This function is used to create a Redux slice, which is a collection of reducer functions and action creators.
  name: "cart", //a name to the slice
  initialState, // represents the initial state of the Redux slice.
  reducers: {
    //This property is an object that contains one or more reducer functions
    add(state, action) {
      // a reducer function & more like this
      // state represents the current state of the slice
      // action: This is an object that carries information about the action being dispatched, including the data payload
      state.push(action.payload);
    },
    deleteProduct(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// return two things 1. action ~ otherwords funtions from slice
// 2. reducer that will gives the state
export const { add,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer; // it gives an reducer property automatically. it is basically returns the reducer
