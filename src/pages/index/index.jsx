/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtDivider } from 'taro-ui'
import { useSelector, useDispatch } from 'react-redux';
import { useBoolean, useRequest } from 'ahooks';
import { encode } from 'js-base64';
import { updateDemoData } from '@/stores/actions/commonAction';
import commonRequest from '@/services/common';
import './index.less'

const Index = () => {
  const { demoData } = useSelector((state) => state.common)
  const dispatch = useDispatch();
  const [state, { toggle }] = useBoolean(true);
  const click = () => dispatch(updateDemoData(1));
  const { run, data, loading } = useRequest(commonRequest.getCaptcha, { manual: true });
  return (
    <View className='index'>
      <Text>{demoData}</Text>
      <AtButton onClick={click} type='primary'>测试redux</AtButton>
      <AtDivider content='功能分割线' fontColor='#ed3f14' lineColor='#ed3f14' />
      {state && <Text>文字</Text>}
      <AtButton onClick={() => toggle()} type='primary'>{state ? '隐藏文字' : '显示文字'}</AtButton>
      <AtDivider content='功能分割线' fontColor='#ff9900' lineColor='#ff9900' />
      {data?.data?.captcha && <Image src={`data:image/svg+xml;base64,${encode(data?.data?.captcha)}`} />}
      <AtButton loading={loading} onClick={() => run({ uuid: 'ceshi' })} type='primary'>axios获取验证码</AtButton>
    </View>
  )
}
export default Index
