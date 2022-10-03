import { createSlice } from '@reduxjs/toolkit';
import { userInfoOperation } from './user-operations';

const initialState = {
  userInfo: {},
  isLoading: false,
  isLogin: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: state => {
      state.userInfo = {};
      state.isLoading = false;
      state.isLogin = false;
      state.error = null;
    },
  },
  extraReducers: {
    [userInfoOperation.pending]: state => {
      state.isLoading = true;

      state.error = null;
    },
    [userInfoOperation.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.isLogin = true;
      state.isLoading = false;
    },
    [userInfoOperation.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
