import qs from 'qs';

import { $get, $put, $delete } from './base';

const PATH = 'sources';

const getSources = async (queryParams) => {
  const search = queryParams && typeof queryParams === 'object' ? qs.stringify(queryParams, { addQueryPrefix: true }) : '';

  try {
    const res = await $get(`${PATH}${search}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const getSource = async (id) => {
  try {
    const res = await $get(`${PATH}/${id}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const subscribe = async (id) => {
  try {
    const res = await $put(`${PATH}/${id}/subscription`);

    return res;
  } catch (error) {
    throw error;
  }
};

const unsubscribe = async (id) => {
  try {
    const res = await $delete(`${PATH}/${id}/subscription`);

    return res;
  } catch (error) {
    throw error;
  }
};

export {
  getSources,
  getSource,
  subscribe,
  unsubscribe,
};
