import Axios from 'axios';
import authApi from './auth';
import membersApi from './members';

export const API_URL = 'http://localhost:3000/api/';

export const axios = Axios.create({
  baseURL: API_URL,
});

const Api = {
  auth: authApi,
  members: membersApi,
};

export default Api;
