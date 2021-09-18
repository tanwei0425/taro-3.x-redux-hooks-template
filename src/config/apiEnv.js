/* eslint-disable import/no-mutable-exports */

let apiUrl = 'https://api.hellotanwei.cn'
let servicesPath = '/admin';

if (process.env.NODE_ENV === 'production') {
  apiUrl = 'https://api.hellotanwei.cn'
}
export {
  apiUrl as default,
  servicesPath
}
