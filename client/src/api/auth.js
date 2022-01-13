import { axios } from '.';

export default {
  async signIn(email, password) {
    try {
      const response = await axios.post(`auth/login`, { email, password });
      return {
        user: response.data,
      };
    } catch (e) {
      throw new Error(e);
    }
  },

  async signUp(formValues) {
    console.log({ formValues });
    try {
      await axios.post(`auth/signup`, formValues);
    } catch (e) {
      throw new Error(e);
    }
  },
};
