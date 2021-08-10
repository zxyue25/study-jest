import axios from 'axios'

export const fetchData = (fn) => {
  axios.get('https://e.juejin.cn/extension/banner').then((response) => {
    fn(response.data)
  })
}
