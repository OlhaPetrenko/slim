import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../auth/auth-slice';
import dailyRateReducer from '../dailyRate/dailyRate-slice';
import dayReducer from '../day/day-slice';
import productReducer from '../product/product-slice';
import userReducer from '../user/user.slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['sid', 'accessToken', 'refreshToken'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  dailyRate: dailyRateReducer,
  day: dayReducer,
  product: productReducer,
  user: userReducer,
});
