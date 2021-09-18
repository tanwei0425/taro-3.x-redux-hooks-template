/*
 * @Descripttion:
 * @Author: tanwei
 * @Date: 2020-08-09 13:11:53
 * @LastEditors: tanwei
 * @LastEditTime: 2021-03-13 11:48:54
 * @FilePath: /open-platform/src/stores/reducers/commonReducer.ts
 */
import { DEMO } from '@/stores/actionTypes';

export const initialState = {
  /**
   * 菜单展开收缩
   * collapsed:true 收缩
   * */
  demoData: 1,

};

function common(state = initialState, actions) {
  switch (actions.type) {
    case DEMO:
      return {
        ...state,
        demoData: state.demoData + actions.demoData,
      };
    default:
      return state;
  }
}
export default common;
