import axios from 'axios'
import { base_url } from './base_url';

axios.defaults.headers = {
    'Content-Type': 'application/json'
  }
  
  
  
  export const getAllProducts = (owner) => {
    return axios
      .post(`${base_url}/product/getAllProduct`,owner)
      .then(res => res.data)
      .catch(error => {
        throw error.response.data
      })
  }

  export const getMyProducts = (id) => {
    return axios
      .post(`${base_url}/product/getProductByUser/`,{id:id})
      .then(res => res.data.product)
      .catch(error => {
        throw error.response
      })
  }

  export const swipProducts = (id) => {
    return axios
      .post(`${base_url}/product/getProductSwipe`,id)
      .then(res => res.data)
      .catch(error => {
        throw error.response.data
      })
  }

  export const getByCategory = (id,owner) => {
    return axios
      .post(`${base_url}/product/getProductsByCategory/${id}`,owner)
      .then(res => res.data)
      .catch(error => {
        throw error.response.data
      })
  }
  
  
  export const addProduct = (data) => {
    const formData = new FormData()
    if (data.image) {
      for (let image of data.image) {
        formData.append('image', image)
      }
      delete data.image
    }

    for (let key in data) {
      formData.append(key, data[key])
    }
    return axios
      .post(`${base_url}/product/addProduct`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      )
      .then(res => res.data)
      .catch(error => {
        throw error.response.data

      })
  }