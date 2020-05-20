import React, { useState } from 'react';
import SingleDay from './SingleDay/SingleDay';
import { makeStyles } from '@material-ui/styles';
import { useEffect } from 'react';
import shipmentReq from '../../../requests/shipments';
import { Button, InputBase } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../../config/axiosOrders';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        paddingTop: 5
    },
    gButton: {
        position: 'fixed',
        bottom: "10%",
        backgroundColor: '#2C7BE5',
        color: 'white',
        borderRadius: 10,
        width: '40%',
        fontFamily: 'IranSans',
        right: '30%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: 'white',
        border: '2px solid #000',
        padding: 20
      },
})

const DeliveryTime = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [shipments, setShipments] = useState({
        list: []
    });
    const shipmentOrder = useSelector(state => state.shipmentOrder);
    const orderId = useSelector(state => state.orderId);
    const [shipmentForm, setShipmentForm] = useState({
        time: '',
        day: ''
    });
    const [couponCode, setCouponCode] = useState(null)
    const handleOpen = () => {
        try {
        setOpen(true);
        // history.push('/orders')
            
        } catch (error) {
            console.log(error)
        }
    };
    
      const handleClose = async() => {
        try {
            setOpen(false);
            await sendShipment();
            // history.push('/orders')

        } catch (error) {
            console.log(error)
        }

      };
    const getShipments = async () => {
        const response = await shipmentReq('GET', null, null);
        setShipments({
            ...shipments,
            list: response.data
        });
         
        dispatch({shipments: response.data, type: 'SET_SHIPMENTS'})
    }
    const handlShipmentForm = (time, day) => {
        const dayItem = `${new Date().getFullYear()}-0${new Date().getMonth()+1}-${new Date().getDate() + day}`;
        const timeItem = `${time.length > 0 ? time : `0${time}`}:00:00.000`;
        setShipmentForm({
            ...shipmentForm,
            time: timeItem,
            day: dayItem
        })

    }
    const sendShipment = async () => {

        const data = {
            address: shipmentOrder.address,
            city: "tehran",
            deliveryTime: `${shipmentForm.day}T${shipmentForm.time}Z`,
            id: shipments.list[0].id,
            lat: shipmentOrder.location.lat,
            lon: shipmentOrder.location.lon,
            postalCode: shipmentOrder.postalCode,
            region: "Theran",
            couponCode: couponCode
        }
        axiosInstance.defaults.headers.common['user_id'] = 'xxx';
        const response = await axiosInstance.post(`/v1/xxx/order/${orderId}/shipment`, data);

    }
    // const renderShipments = (props) => {
    //     return(
    //         <React.Fragment>
    //             <SingleDay day="1" />
                
    //         </React.Fragment>
    //     )
    // }
    useEffect(()=>{
        getShipments();
    },[])
    return(
        <div className={classes.root}>
                <SingleDay setShipmentTime={(time, day) => {handlShipmentForm(time, day)}} day={1} />
                <SingleDay setShipmentTime={(time, day) => {handlShipmentForm(time, day)}} day={2} />
                <SingleDay setShipmentTime={(time, day) => {handlShipmentForm(time, day)}} day={3} />
                <SingleDay setShipmentTime={(time, day) => {handlShipmentForm(time, day)}} day={4} />
                
                <Button onClick={handleOpen} className={classes.gButton}>ثبت نهایی</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        <h4 id="transition-modal-title">آیا کوپن دارید؟</h4>
                        <div id="transition-modal-description">
                            کد کوپن:<InputBase 
                            value={couponCode}
                            onChange={(event) => {
                                setCouponCode(event.target.value)
                            }}
                            />
                        
                        </div>
                        <Button onClick={handleClose}>ثبت</Button>
                        <Button onClick={sendShipment}>خروج</Button>

                    </div>
                    </Fade>
                </Modal>
        </div>
    )
}
export default DeliveryTime;