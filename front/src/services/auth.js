import axios from 'axios'
import { base_url } from './base_url';

axios.defaults.headers = {
  'Content-Type': 'application/json'
}



export const login = auth => {
 
  return axios
    .post(`${base_url}/auth/login`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
}

export const register = auth => {
  return axios
    .post(`${base_url}/auth/register`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
}

export const editProfile = (id,data) => {
  let formData = new FormData();

  Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
  });
  return axios
    .patch(`${base_url}/auth/${id}/edit`, formData)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data
    })
}