import { createSlice } from '@reduxjs/toolkit';
import {
  dailyRateOperation,
  dailyRateUserOperation,
} from './dailyRate-operations';

const initialState = {
  id: '',
  dailyRate: null,
  summaries: [],
  notAllowedProducts: [],
  isLoading: false,
  error: null,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: {
    [dailyRateOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [dailyRateOperation.fulfilled]: (state, { payload }) => {
      state.dailyRate = payload.dailyRate;
      state.notAllowedProducts = payload.notAllowedProducts;
      state.isLoading = false;
      state.error = null;
    },
    [dailyRateOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [dailyRateUserOperation.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [dailyRateUserOperation.fulfilled]: (state, { payload }) => {
      return { ...payload, isLoading: false, error: null };
    },
    [dailyRateUserOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default dailyRateSlice.reducer;
