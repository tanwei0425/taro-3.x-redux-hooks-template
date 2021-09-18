/*
 * @Descripttion:
 * @Author: tanwei
 * @Date: 2021-01-30 15:18:17
 * @LastEditors: tanwei
 * @LastEditTime: 2021-03-08 15:21:20
 * @FilePath: /open-platform/src/config/axios.ts
 */
import { axios } from 'taro-axios';
import apiUrl from '@/config/apiEnv.js'

const axiosConfig = () => {
  axios.interceptors.request.use(
    (config) => {
      config.baseURL = apiUrl;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // axios响应拦截器
  axios.interceptors.response.use(
    (response) => {
      const { data } = response;
      // const { data, headers } = response;
      return data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default axiosConfig;
