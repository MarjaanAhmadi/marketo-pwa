import axiosInstance from '../config/axios';
//methods for these obj is get, get by id, filter by params
const oredrReq = async (method,pid,iid, data) => {
   
        switch(method) {
            case 'GET':
                try {
                    if(pid !== null && iid !== null){
                        const response = await axiosInstance.get(`/product/${pid}/item/${iid}`);
                        if(response.data)
                        return response;
                    }
                    
                } catch (error) {
                    console.log(error)
                }
        }
};
export default oredrReq;