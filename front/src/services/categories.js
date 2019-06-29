import axios from 'axios'
import { base_url } from './base_url';

axios.defaults.headers = {
    'Content-Type': 'application/json'
  }
  
  
  
  export const getCategories = () => {
    return axios
      .get(`${base_url}/category/getAll`)
      .then(res => res.data)
      .catch(error => {
        throw error.response.data
      })
  }
  