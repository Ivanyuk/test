import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export const getProperties = () => {
  return axios.get(`${API_URL}/properties/`);
}

export const deleteProperty = (id) => {
  return axios.delete(`${API_URL}/properties/${id}`);
}

export const postProperty = (data) => {
  return axios.post(`${API_URL}/properties/`, data);
}