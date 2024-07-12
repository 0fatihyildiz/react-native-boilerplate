import axios, {AxiosInstance} from 'axios';

const baseUrl = 'https://reqres.in';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
