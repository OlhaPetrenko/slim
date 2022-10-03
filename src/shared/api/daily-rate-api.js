import { instance } from './auth-api';

export const dailyRate = async data => {
  const { data: result } = await instance.post('/daily-rate', data);

  return result;
};

export const dailyUser = async ({ id, user }) => {
  const { data: result } = await instance.post(`/daily-rate/${id}`, user);

  return result;
};
