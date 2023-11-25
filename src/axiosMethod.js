import axios from 'axios';

 const API_URL = "https://react-test.aventusinformatics.com/api";

const axiosApi = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `token ${token}`;
  }
  return config;
});

export default axiosApi;
