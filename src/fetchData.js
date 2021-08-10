import axios from 'axios'

// 回调函数
export const fetchData = (fn) => {
  axios.get('https://e.juejin.cn/extension/banner').then((response) => {
    fn(response.data)
  })
}

// promise
export const fetchPromise = () => {
  return axios.get('https://e.juejin.cn/extension/banner')
}

// promise error
export const fetchError = () => {
  return axios.get('https://e.juejin.cn/extension/banner-error')
}

