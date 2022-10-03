import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInfo } from '../../shared/api/user-api';

export const userInfoOperation = createAsyncThunk(
  'user/get',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userInfo(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
