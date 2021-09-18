/*
 * @Descripttion:
 * @Author: tanwei
 * @Date: 2020-08-09 13:05:19
 * @LastEditors: tanwei
 * @LastEditTime: 2020-11-24 16:33:21
 * @FilePath: /open-platform/src/redux/actions/commonAction.ts
 */
import { DEMO } from '@/stores/actionTypes';

export const updateDemoData = (demoData) => ({
  type: DEMO,
  demoData,
});


