import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:8082/',
  withCredentials: true
});

export default Axios