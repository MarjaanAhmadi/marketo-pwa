import axiosInstance from '../config/axios';
import { useSelector, useDispatch } from 'react-redux';

//methods for these obj is get, get by id, filter by params
const productReq = async (params, id) => {
    try {
        const response = await axiosInstance.get(`/products/${id !== null ? id : ''}`, {params: params});
        if(response.data)
        return response;
    } catch (error) {

    }
};
export default productReq;