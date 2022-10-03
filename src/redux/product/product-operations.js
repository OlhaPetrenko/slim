import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import { productSearch } from '../../shared/api/product-api';

export const productOperation = createAsyncThunk(
  'product-search',
  async (data, { rejectWithValue, getState }) => {
    const value = getState();

    const accToken = value.auth.accessToken;
    const objData = {
      product: data,
      token: accToken,
    };
    try {
      const result = await productSearch(objData);
      return result;
    } catch (error) {
      const statusErr = error.response.status;

      if (statusErr === 400) {
        Notiflix.Notify.failure(`${error.response.data.message}`);
      }
      if (statusErr === 404) {
        Notiflix.Notify.failure(`${error.response.data.message}`);
      }
      return rejectWithValue(error.message);
    }
  }
);
