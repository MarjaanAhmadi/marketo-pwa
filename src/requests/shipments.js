import axiosInstance from '../config/axiosOrders';
//methods for these obj is get, get by id, filter by params
const shipmentReq = async (method,id, data) => {
   
        switch(method) {
            case 'GET':
                 
                try {
                    if(id !== null){
                        const response = await axiosInstance.get(`/v1/shipment/${id}`);
                        if(response.data)
                        return response;
                    }
                    else {
                        const response = await axiosInstance.get(`/v1/shipments`);
                        if(response.data)
                        return response;
                    }
                } catch (error) {
                    console.log(error)
                }
                break;
                case 'POST' : 
                try {
                    const response = await axiosInstance.post('/v1/order/{id}/shipment',data);
                    if(response)
                    return response;
                } catch (error) {
                    console.log(error)
                }

        }
};
export default shipmentReq;