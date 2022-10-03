import { instance } from './auth-api';

export const dayProductPost = async data => {
  const { data: result } = await instance.post('/day', data);
  return result;
};

export async function dayProductDelete(data, accessToken) {
  const formData = {
    dayId: data.dayId,
    eatenProductId: data.eatenProductId,
  };
  const serverData = await fetch('https://slimmom-backend.goit.global/day', {
    method: 'DELETE',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  });
  return serverData;
}

export const dayProductInfo = async date => {
  const { data: result } = await instance.post('/day/info', date);

  return result;
};
