import axios from 'axios';
//define an instance from Axios and set headers and baseurl => because we are using proxy we can't set base url

let axiosInstance = axios.create({
    // timeout: 10000,
    // baseURL: process.env.REACT_APP_BASE_API,
    baseURL: 'http://192.168.127.188:80/services',
    headers: {
            'Content-Type': 'application/json'
        
    }
})
axiosInstance.interceptors.response.use(null, (error) => {
    // if (error.response.status === 500) {
    // }
    // if (error.response.status === 400) {
    // }
    // if (error.response.status === 401) {
    // }
    // if (error.response.status === 409) {
    // }

    return Promise.reject(error)
})

export default axiosInstance;