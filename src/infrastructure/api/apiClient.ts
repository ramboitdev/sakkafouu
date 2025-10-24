import axios from 'axios'

const api = axios.create({
  baseURL: '/api', // adapté pour proxy ou backend réel
  timeout: 10000,
})

export default api
