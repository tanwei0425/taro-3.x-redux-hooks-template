/*
 * @Descripttion:
 * @Author: tanwei
 * @Date: 2020-08-09 16:15:34
 * @LastEditors: tanwei
 * @LastEditTime: 2020-11-26 16:41:34
 * @FilePath: /open-platform/src/stores/index.ts
 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '@/stores/reducers';

const middlewares = [thunk];
console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
process.env.NODE_ENV === "development" && middlewares.push(logger);

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export default store;
