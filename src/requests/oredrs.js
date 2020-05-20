import axiosInstance from '../config/axiosOrders';
//methods for these obj is get, get by id, filter by params
const oredrReq = async (method,id, data) => {
   
        switch(method) {
            case 'GET':
                 
                try {
                    if(id !== null){
                        const response = await axiosInstance.get(`/v1/xxx/order/${id}`);
                        if(response.data)
                        return response;
                    }
                    else {
                        const response = await axiosInstance.get(`/v1/orders/?user_id=xxx`);
                        if(response.data)
                        return response;
                    }
                } catch (error) {
                    console.log(error)
                }
                break;
                case 'POST' : 
                try {
                    const response = await axiosInstance.post('/v1/order',data);
                    if(response)
                    return response;
                } catch (error) {
                    console.log(error)
                }

        }
};
export default oredrReq;