import React, { useEffect } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';
import {makeStyles} from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import oredrReq from '../../../requests/oredrs';
const useStyles = makeStyles({
    root: {
        padding: "1px 0 5px 0"
    }
})
const OrderList = () => {
    const classes = useStyles();
    const orders = useSelector(state => state.orders)
    
    const renderOrders = () => {
        return(
            orders.map((order, idx) => {
                return(
                    <SingleOrder order={order} key={idx}/>
                )
            })
        )
    }
    return(
        <div className={classes.root}>
            {
                renderOrders()
            }
        </div>
    )
}
export default OrderList;