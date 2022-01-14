import { axios } from '.';

export default {
  async getAllMembers() {
    const response = await axios.get(`users`);
    return response.data;
  },

  async getMemberById(memberId) {
    const response = await axios.get(`/users/:${memberId}`);
    return response.data;
  },

  async updateMember(memberId, values) {
    const response = await axios.put(`/users/${memberId}`, values);
    return response.data;
  },

  async deleteMember(memberId) {
    const response = await axios.delete(`/users/${memberId}`);
    return response.data;
  },
};
