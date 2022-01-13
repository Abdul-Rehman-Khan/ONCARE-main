import { axios } from '.';

export default {
  async getAll() {
    const response = await axios.get(`users`);
    return response.data;
  },
};
