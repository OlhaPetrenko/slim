import { createAsyncThunk } from '@reduxjs/toolkit';
import { dailyRate, dailyUser } from '../../shared/api/daily-rate-api';

export const dailyRateOperation = createAsyncThunk(
  'daily/rate',
  async (data, { rejectWithValue }) => {
    try {
      const result = await dailyRate(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dailyRateUserOperation = createAsyncThunk(
  'daily/rate/user',
  async (data, { rejectWithValue, getState }) => {
    const value = getState();
    const userId = value.user.userInfo.id;

    const userData = {
      id: userId,
      user: data,
    };
    try {
      const result = await dailyUser(userData);

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
