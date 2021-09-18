/*
 * @Descripttion:
 * @Author: tanwei
 * @Date: 2020-12-27 16:57:17
 * @LastEditors: tanwei
 * @LastEditTime: 2021-02-28 18:09:54
 * @FilePath: /open-platform/src/components/AxiosRequestProvider.tsx
 */
import { UseRequestProvider } from 'ahooks';
import { axios } from 'taro-axios';
// import { message } from 'antd';
import axiosConfig from '@/config/axios';

axiosConfig();

const AxiosRequestProvider = ({ children }) => {
  return (
    <UseRequestProvider
      value={{
        // debounce 模式与 throttle 模式 run 返回值为 Promise<null>
        // debounceInterval: 500,
        requestMethod: (param) => {
          param.method = param?.method ? param?.method : 'get';
          if (param?.method === 'get' || param?.method === 'delete') {
            param.params = param?.data;
            delete param.data;
          }
          return axios(param);
        },
        onError: (error, params) => {
          console.log(error, 'error');
          console.log(params, 'params');
          // message.error('网络链接失败，请检查网络或联系管理员！');
        },
      }}
    >
      {children}
    </UseRequestProvider>
  );
};

export default AxiosRequestProvider;
