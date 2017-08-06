import qs from 'qs';

import { $get, $put, $delete } from './base';

const PATH = 'posts';

const getPosts = async (queryParams) => {
  const search = queryParams && typeof queryParams === 'object' ? qs.stringify(queryParams, { addQueryPrefix: true }) : '';

  try {
    const res = await $get(`${PATH}${search}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const getPost = async (id) => {
  try {
    const res = await $get(`${PATH}/${id}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const createAction = async (action, id) => {
  try {
    const res = await $put(`${PATH}/${id}/${action}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const viewPost = async (id) => {
  const res = await createAction('view', id);

  return res;
};

const sharePost = async (id) => {
  const res = await createAction('share', id);

  return res;
};

const savePost = async (id) => {
  const res = await createAction('save', id);

  return res;
};

const deleteAction = async (action, id) => {
  try {
    const res = await $delete(`${PATH}/${id}/${action}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const unSavePost = async (id) => {
  const res = await deleteAction('save', id);

  return res;
};

export {
  getPosts,
  getPost,
  viewPost,
  sharePost,
  savePost,
  unSavePost,
};
