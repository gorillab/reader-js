import API_URL from './config';
import { $post } from './base';

const PATH = 'auth';

const LOGIN_BY_FACEBOOK_URL = `${API_URL}/${PATH}/facebook`;

const logout = async () => {
  try {
    const res = await $post(`${PATH}/logout`);

    return res;
  } catch (error) {
    throw error;
  }
};

export {
  LOGIN_BY_FACEBOOK_URL,
  logout,
};
