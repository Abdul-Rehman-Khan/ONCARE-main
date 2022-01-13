import authApi from './auth';
import Axios from 'axios';

export const API_URL = 'http://localhost:3000/api/';

export const axios = Axios.create({
  baseURL: API_URL,
});

const Api = {
  auth: authApi,
  // TODO
  // members: membersApi,
};

export default Api;
