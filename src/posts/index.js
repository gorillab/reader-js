import API_URL from '../config';

export const getPosts = async (params) => {
  const response = await fetch(`${API_URL}/posts?sort=${params.sort}&limit=${params.limit}&page=${params.page}`);
  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
};
export const unposts = async () => {

};
