import { createSlice } from '@reduxjs/toolkit';
import { productOperation } from './product-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [productOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [productOperation.fulfilled]: (state, { payload }) => {
      state.items = [...payload];
    },
    [productOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default productSlice.reducer;
