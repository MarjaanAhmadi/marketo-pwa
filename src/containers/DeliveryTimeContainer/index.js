import React,{useEffect, useState} from 'react';
import DeliveryTime from '../../components/ShoppingCard/DeliveryTime/DeliveryTime'
import shipmentReq from '../../requests/shipments';
const DeliveryTimeContainer = () => {
    // const [shipments, setShipments] = useState({
    //     list: []
    // });
    // const getShipments = async () => {
    //     const response = await shipmentReq('GET', null, null);
    //     setShipments({
    //         ...shipments,
    //         list: response.data
    //     })
    // }
    // useEffect(()=>{
        // getShipments();
    // },[])
    return(
        <DeliveryTime/>
    )
}
export default DeliveryTimeContainer;