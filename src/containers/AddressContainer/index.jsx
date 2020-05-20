import React from 'react';
import AddressList from '../../components/Address/AddressList/AddressList';
import {Button, RadioGroup} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import PinDropIcon from '@material-ui/icons/PinDrop';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import SingleAddress from "../../components/Address/SingleAddress/SingleAddress";
import {  makeStyles} from "@material-ui/styles";
import HeaderText from '../../mainComponents/HeaderText/HeaderText';
import axiosAuth from '../../config/axiosAuth';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axiosInstance from '../../config/axiosTest';
const useStyles = makeStyles({
    root: {
        paddingTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
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
    locIcon: {
        color: '#2C7BE5',
        fontSize: 40
    },
    plusIcon: {
        color: '#2C7BE5',
        fontSize: 25,
        marginTop: 10
    },
    titleText: {
        fontSize: 15,
        fontWeight: 700,
        padding: 20
    },
    newAddress: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'row',
        cursor: 'pointer',
        marginRight: 13
    },
    newAddressTitle: {
        color: '#2C7BE5',
        fontSize: 13,
        marginTop: 10,
        padding: 2,
        fontFamily: 'IranSans',
        marginRight: 5
    }
})
const AddressContainer = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const token = useSelector(state => state.token);
    const orderId = useSelector(state => state.orderId); 
    const [addresses, setAddresses ] = useState({
        list: []
    });
    const getAddresses = async () => {
        delete axiosAuth.defaults.headers.common['user_id'];
        axiosAuth.defaults.headers.common['Authorization']=`Bearer ${token}`;
        delete axiosAuth.defaults.headers.common['user_id'];
        const response = await axiosAuth.get('/user/v1.0/profile/attributes')
         
        setAddresses({
            ...addresses,
            list: response.data.result.data.addresses
        });
        dispatch({addresses: response.data.result.data.addresses, type: 'SET_ADDRESSES'});
    }
    const setAddressAndShipment = (address)=> {
        dispatch({shipmentOrder: address, type: 'SET_SHIPMENT_ORDER'});
    }
    const renderAddresses = () => {
        return(
            addresses.list.map((address, idx) => {
                return <SingleAddress address={address} key={idx}/>
            })
        )
    }
    const handleChange = (event) =>{
        setValue(event.target.value);
         
        const addressItem = addresses.list.filter(i => i.address === event.target.value)[0];
        debugger
        dispatch({shipmentOrder: addressItem, type:'SET_SHIPMENT_ORDER'});
    }
    useEffect(() => {
        if(token !== null)
        getAddresses();
        else history.push('/auth/login')
    },[])
    return(
        <div className={classes.root}>
            <HeaderText text='آدرس تحویل سفارش خود را انتخاب نمایید' icon='PinDropIcon'/>
            <RadioGroup 
            value={value} 
            onChange = {handleChange}>
            {
                renderAddresses()
            }
            <Button disabled={value === '' ? true : false} onClick={() =>{history.push('/deliveryTime')}} className={classes.button}>انتخاب زمان تحویل</Button>

            </RadioGroup>
            <div className={classes.newAddress}>
            <AddCircleIcon className={classes.plusIcon} />
            <Button className={classes.newAddressTitle} onClick={() => {history.push('/createaddress')}}>آدرس جدید</Button>
        
            </div>
        </div>
    )
}
export default AddressContainer;