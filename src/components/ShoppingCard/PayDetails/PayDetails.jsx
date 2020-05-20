import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import currency from '../../../filtering/currency';
import { useSelector } from 'react-redux';
const useStyles = makeStyles({
    root : {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: "5px 10px",
        textAlign: 'center',
    },
    payRow: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 2
    },
    title: {
        fontSize: 15,
        fontWeight: 600
    },
    weight: {
        fontSize: 12,
        color: '#9A9A9A',
        fontWeight: 600
      },
      title: {
        fontSize: 16,
        fontWeight: 600

    },
      weightOff: {
        fontSize: 13,
        fontWeight: 600,
        color: '#36CE91'
      },
      weightBenefit: {
        fontSize: 13,
        fontWeight: 600,
        color: '#2C7BE5'
      },
})
const PayDetails = (props)=>{
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const currentOrder = useSelector(state => state.currentOrder);
    useEffect(() => {
        let countDetails = 0;         
        currentOrder.items.map((value) => {
            debugger
            countDetails = value.count + countDetails;
        })
        setCount(countDetails)
    },[currentOrder])
    return(
        <div className={classes.root}>
            <span className={classes.title}>جزییات پرداخت</span>
            <div className={classes.payRow}>
                <span className={classes.weight} >تعداد اقلام</span>
                <span className={classes.weight} >{count} عدد</span>
            </div>
            <div className={classes.payRow}>
                <span className={classes.weight} >جمع کل قبل از تخفیف</span>
                <span className={classes.weight} >{currency(currentOrder.totalAmount/10)} تومان</span>
            </div>
            <div className={classes.payRow}>
                <span className={classes.weightBenefit} >سود شما</span>
                <span className={classes.weightBenefit} >0 تومان</span>
            </div>
            <div className={classes.payRow}>
                <span className={classes.weightOff} >مبلغ قابل پرداخت</span>
                <span className={classes.weightOff} >{currency(currentOrder.payableAmount/10)} تومان</span>
            </div>
        </div>
    )
}
export default PayDetails;