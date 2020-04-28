import axios from 'axios';
import { load, save as setCookie } from 'react-cookies';
import { redditConfig } from './config';

const cookieName = 'reddify_token';

const getCookie = () => {
  return load(cookieName);
};

export const queryCookie = (key) => {
  const cookie = getCookie();
  return cookie && cookie[key];
};

const getProfile = async (token) => {
  const { data } = await axios({
    url: 'https://oauth.reddit.com/api/v1/me',
    method: 'GET',
    headers: { Authorization: `${token}` },
  });

  return data;
};

const refreshToken = async () => {
  if (!queryCookie('refresh_token')) {
    return;
  }
  const requestData = new FormData();
  requestData.append('grant_type', 'refresh_token');
  requestData.append('refresh_token', queryCookie('refresh_token'));
  requestData.append('duration', 'permanent');

  const { data } = await axios({
    method: 'POST',
    url: 'https://www.reddit.com/api/v1/access_token',
    headers: {
      Authorization: 'Basic ' + btoa(redditConfig['CLIENT_ID'] + ':' + redditConfig['CLIENT_SECRET']),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: requestData,
  });

  const cookieData = getCookie();
  setCookie(cookieName, {
    ...cookieData,
    ...data,
  });
};

const makeQuery = (params) => {
  let queryParams = '?';
  if (params && Object.keys(params)) {
    Object.keys(params).forEach((key) => {
      queryParams = `${queryParams}${key}=${params[key]}&`;
    });
  }

  return queryParams;
};

export const searchReddit = async (queryParams) => {
  const { data } = await axios({
    method: 'GET',
    url: `https://www.reddit.com/search.json${makeQuery(queryParams)}`,
  });

  return data;
};

export const redditOAuth = () => {
  const { CLIENT_ID, RESPONSE_TYPE, STATE, REDIRECT_URI, SCOPE, DURATION } = redditConfig;
  const URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${STATE}&duration=${DURATION}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

  window.location.replace(URL);
};

export const getToken = async (code) => {
  const requestData = new FormData();
  requestData.append('grant_type', 'authorization_code');
  requestData.append('code', code);
  requestData.append('redirect_uri', redditConfig['REDIRECT_URI']);

  const { data } = await axios({
    method: 'POST',
    url: 'https://www.reddit.com/api/v1/access_token',
    headers: {
      Authorization: 'Basic ' + btoa(redditConfig['CLIENT_ID'] + ':' + redditConfig['CLIENT_SECRET']),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: requestData,
  });

  const profile = await getProfile(`${data['token_type']} ${data['access_token']}`);
  setCookie(cookieName, {
    ...data,
    ...{
      name: profile['name'],
    },
  });
  refreshToken();
  window.location.replace('/');
};

export const getSavedPosts = async () => {
  const { data } = await axios({
    url: `https://oauth.reddit.com/user/${queryCookie('name')}/saved`,
    method: 'GET',
    headers: { Authorization: `${queryCookie('token_type')} ${queryCookie('access_token')}` },
  });

  console.log(data);
  return data
};
