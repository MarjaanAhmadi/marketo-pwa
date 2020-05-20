import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import productItemReq from '../../../../requests/productItems';
import currency from '../../../../filtering/currency';
const useStyles = makeStyles({
    rowDetail: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: "5px 3px"
    },
    detailsText: {
        fontSize: 13,
        width: '33.3%'
    },
})

const SingleOrderItem = (props)=>{
    const classes = useStyles();
    const [pItem , setPItem] = useState({});
    const getProductItem = async () =>{
        if(props.productItem.productItemId !== null && props.productItem.productId !== null)
        {
             
            try {
                const response = await productItemReq('GET', props.productItem.productId, props.productItem.productItemId, null)
            if(response) {
            setPItem(response.data)
            }
         } catch (error) {
                
            

            }    
        }
    }

    useEffect(() => {
        getProductItem();
    },[])
    return(
        <div className={classes.rowDetail}>
        <span className={classes.detailsText}>{pItem.title}</span>
        <span className={classes.detailsText}>{props.productItem.count}</span>
        <span className={classes.detailsText}>{currency(props.productItem.amount/10)} تومان</span>
    </div>
    )
}
export default SingleOrderItem;