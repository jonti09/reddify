import axios from 'axios';

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
