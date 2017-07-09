import API_URL from '../config';

export const loginByFacebook = () => {
  location.href = `${API_URL}/auth/facebook`;
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
  });

  return response;
};
