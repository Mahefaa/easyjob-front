import axios, {AxiosPromise, AxiosRequestConfig} from "axios";
const axiosInstance = axios.create({baseURL:process.env.REACT_APP_BASEURL});
const axiosPromise : (config:AxiosRequestConfig) => AxiosPromise =(config)=> {
    return axiosInstance.request(config);
}
export default axiosPromise;