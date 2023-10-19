import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productAPI = "https://fakestoreapi.com/products";

const initialState = {
  data: [],
  status:""
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending,(state,action) => {
        state.status = "Loading"
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "idle"
    })
    .addCase(getProducts.rejected,(state,action) => {
        state.status = "error"
    })
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// async way
export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await axios.get(productAPI);
  const result = await response.data;
  return result;
});

// normal way
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     await axios
//       .get(productAPI)
//       .then((res) => dispatch(fetchProducts(res.data)));
//   };
// }
