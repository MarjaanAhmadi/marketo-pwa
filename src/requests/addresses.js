import axiosAuth from '../config/axiosAuth';
import useSelector from 'react-redux';
const token = useSelector(state => state.token);
//methods for these obj is get, get by id, filter by params
const addressReq = async (method,id, data) => {
   
        switch(method) {
            case 'GET':
                 
                try {
                    if(id !== null){
                        const response = await axiosAuth.get(`/user/v1.0/profile/attribute/${id}`);
                        if(response.data)
                        return response;
                    }
                    else {
                        const response = await axiosAuth.get(`/user/v1.0/profile/attributes`);
                        if(response.data)
                        return response;
                    }
                } catch (error) {
                    console.log(error)
                }
                break;
                case 'PUT' : 
                try {
                    delete axiosAuth.defaults.headers.common['user_id'];
                    axiosAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                     
                    const response = await axiosAuth.post('/user/v1.0/profile/attribute',data);
                    if(response)
                    return response;
                } catch (error) {
                    console.log(error)
                }

        }
};
export default addressReq;