/* eslint-disable no-param-reassign */
import axios from 'axios';

axios.interceptors.request.use((config) => {
  if (window.localStorage.getItem('token')) {
    config.headers.Authorization = window.localStorage.getItem('token');
  }
  return config;
}, (error) => {
  console.log('error1', error);
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 403) {
    window.localStorage.removeItem('token');
  }
  return Promise.reject(error);
});

// 配置token
// axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token')

export default function handleService(url, data, method = 'GET') {
  if (method === 'GET') {
    return axios({
      url,
      params: data,
      method
    });
  }
  return axios({
    url,
    data,
    method
  });
}
