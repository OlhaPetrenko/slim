import { createSlice } from '@reduxjs/toolkit';

import {
  registerUser,
  logInUser,
  logoutUser,
  refreshUser,
} from './auth-operation';

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: '',
  sid: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
      state.isLoading = false;
      state.isLogin = false;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = payload;
    },
    [logInUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logInUser.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.user = { ...state.user, ...payload.user };
      state.userId = payload.user.id;
      state.isLoading = false;
      state.isLogin = true;
    },
    [logInUser.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = payload;
    },
    [logoutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.sid = '';
      state.user = initialState.user;
      state.userId = '';
      state.isLoading = false;
      state.isLogin = false;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = payload;
    },
    [refreshUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.newAccessToken;
      state.refreshToken = payload.newRefreshToken;
      state.sid = payload.sid;
    },
    [refreshUser.rejected]: (state, { payload }) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
