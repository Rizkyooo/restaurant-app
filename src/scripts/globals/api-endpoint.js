import Config from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${Config.BASE_URL}/list`,
  DETAIL_RESTAURANT: (id) => `${Config.BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${Config.BASE_URL}/search?q=${query}`,
  REVIEW: `${Config.BASE_URL}/review`,
};

export default API_ENDPOINT;
