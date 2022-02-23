import axios from 'axios';

axios.defaults.baseURL = 'https://621665297428a1d2a3668a05.mockapi.io';

export const addContactApi = contact => {
  return axios
    .post('/contacts', contact)
    .then(({ data }) => data)
    .catch(err => err);
};

export const getContactsApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(err => err);
};

export const deleteContactApi = id => {
  return axios
    .delete(`/contacts/${id}`)
    .then(() => id)
    .catch(err => err);
};
