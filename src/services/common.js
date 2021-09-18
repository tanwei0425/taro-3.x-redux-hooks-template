import { servicesPath } from '@/config/apiEnv';

const getCaptcha = (data) => ({
  url: `${servicesPath}/v1/captcha`,
  method: 'get',
  data,
});
export default {
  getCaptcha,
};
