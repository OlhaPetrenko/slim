import { instance, setToken } from './auth-api';

export const productSearch = async data => {
  setToken(data.token);

  const { data: result } = await instance.get(
    `/product?search=${data.product}`
  );

  return result;
};
