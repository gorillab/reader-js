import API_URL from '../config';

export const loginByFacebook = async () => {
  const response = await fetch(`${API_URL}/auth/facebook`);

  return response;
};

export const loginByFacebookCallback = async () => {
  const response = await fetch(`${API_URL}/auth/facebook/callback`);

  return response;
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
  });

  return response;
};
