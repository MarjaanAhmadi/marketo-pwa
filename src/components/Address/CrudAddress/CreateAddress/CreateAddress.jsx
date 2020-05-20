import React, { useState } from 'react';

import MapCont from './Map/MapCont';
import UserDataAddress from '../UserDataAddress/UserDataAddress';
import {  makeStyles } from "@material-ui/styles";
import {  Button } from "@material-ui/core";
import Test from './Map/mapgl/mapgl';
import axiosAuth from '../../../../config/axiosAuth';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
const useStyle = makeStyles ({
    button: {
		position: 'fixed',
		bottom: "10%",
		backgroundColor: '#2C7BE5',
		color: 'white',
		borderRadius: 10,
		width: '40%',
		fontFamily: 'IranSans',
		right: '30%'
	},
})
const CreateAddress = () => {
    const dispatch = useDispatch();
    const classes = useStyle();
    const history = useHistory();
    const [data, showData] = useState(false);
    const addresses = useSelector(state => state.addresses);
    const token = useSelector(state => state.token)
    const [addressForm, setAddressForm] = useState({
        location: {
            lat: 0,
            long: 0
        },
        address: '',
        postalCode: '',
        phoneNumber: '',
    });
    const setLocation = (location) => {
         debugger
        setAddressForm ({
            ...addressForm,
            location: {
                lat: location.latitude,
                lon: location.longitude
            }
        })
    }
    const setAddress = async (address) => {
        debugger
        try {
            let addressList = [];
            const addressItem = {
            address: address.address,
            postalCode: address.postalCode,
            phoneNumber: address.phoneNumber,
            cityId: null,
            city: null,
            province: null,
            location: addressForm.location
        }
            addressList.push(addressItem);
            const userAddresses = addressList.concat(addresses);
            const data = {
                addresses: userAddresses
            }
            delete axiosAuth.defaults.headers.common['user_id'];
            axiosAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log(axiosAuth);
            const response = await axiosAuth.put('/user/v1.0/profile/attribute',data);
            dispatch({shipmentOrder: addressItem, type:'SET_SHIPMENT_ORDER'});

            history.push('/deliveryTime')
        } catch (error) {
            
        }
    }
    return(
        <React.Fragment>
            {
                !data ?
                <MapCont setLocation={(location) => {setLocation(location)}} show={data} showData={(show) => showData(show)}/>
                :
                <div>
                    <UserDataAddress setAddress={(address) => {setAddress(address)}}/>
                </div>
            }
            
        </React.Fragment>
    )
}
export default CreateAddress;