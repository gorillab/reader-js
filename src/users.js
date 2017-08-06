import qs from 'qs';

import { $get } from './base';

const PATH = 'user';

const getUser = async () => {
  try {
    const res = await $get(PATH);

    return res;
  } catch (error) {
    throw error;
  }
};

const getSubscriptions = async (queryParams) => {
  const search = queryParams && typeof queryParams === 'object' ? qs.stringify(queryParams, { addQueryPrefix: true }) : '';

  try {
    const res = await $get(`${PATH}/subscriptions${search}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const getSaved = async (queryParams) => {
  const search = queryParams && typeof queryParams === 'object' ? qs.stringify(queryParams, { addQueryPrefix: true }) : '';

  try {
    const res = await $get(`${PATH}/saved${search}`);

    return res;
  } catch (error) {
    throw error;
  }
};

const getForYou = async (queryParams) => {
  const search = queryParams && typeof queryParams === 'object' ? qs.stringify(queryParams, { addQueryPrefix: true }) : '';

  try {
    const res = await $get(`${PATH}/for-you${search}`);

    return res;
  } catch (error) {
    throw error;
  }
};

export {
  getUser,
  getSubscriptions,
  getSaved,
  getForYou,
};
