import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import { registration, login, logout, refresh } from 'shared/api/auth-api';
import { userInfoOperation } from 'redux/user/user-operations';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await registration(data);
      Notiflix.Notify.success(`Welcome to site, ${result.username}`);
      console.log(result);
      return result;
    } catch (error) {
      const statusErr = error.response.status;

      if (statusErr === 400) {
        Notiflix.Notify.failure('Bad request. try again later');
      }
      if (statusErr === 409) {
        Notiflix.Report.failure(
          'Error',
          `${error.response.data.message}`,
          'Okay'
        );
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const result = await login(data);
      Notiflix.Notify.success(`Welcome back, ${result.user.username}`);
      dispatch(userInfoOperation(result.accessToken));
      dispatch(userInfoOperation(result.accessToken));
      return result;
    } catch (error) {
      const statusErr = error.response.status;

      if (statusErr === 400) {
        Notiflix.Notify.failure('Bad request. try again later');
      }
      if (statusErr === 403) {
        Notiflix.Notify.failure(`${error.response.data.message}`);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logout();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState, dispatch }) => {
    const value = getState();

    const refreshToken = value.auth.refreshToken;
    const sid = value.auth.sid;
    const data = { refreshToken, seasonid: { sid } };

    if (!sid) {
      return rejectWithValue(`token is invalid`);
    }
    try {
      const result = await refresh(data);
      dispatch(userInfoOperation(result.newAccessToken));
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
