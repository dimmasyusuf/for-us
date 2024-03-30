import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:8000';

type ICart = {
  id: number;
  name: string;
  price: number;
};

export const createCart = createAsyncThunk(
  'cart/createCart',
  async (event: ICart) => {
    try {
      const response = await axios.post(`${URL}/carts`, event);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getAllCarts = createAsyncThunk('cart/getAllCarts', async () => {
  try {
    const response = await axios.get(`${URL}/carts`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
    carts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCarts.fulfilled, (state, action) => {
        state.carts = action.payload;
        state.loading = false;
      })
      .addCase(getAllCarts.rejected, (state) => {
        state.loading = false;
        state.carts = [];
      })
      .addCase(createCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(createCart.rejected, (state) => {
        state.loading = false;
        state.cart = {};
      });
  },
});

export default cartSlice.reducer;
