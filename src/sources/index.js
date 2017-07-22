import API_URL from '../config';

export const getSources = async () => {
  const response = await fetch(`${API_URL}/sources`);
  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};
export const un = async () => {

};
