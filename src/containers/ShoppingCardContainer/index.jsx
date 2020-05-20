import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import ShoppingCardList from '../../components/ShoppingCard/ShoppingCardList/ShoppingCardList';
import shoppingCard from '../../mocks/shoppingCard';
import PayDetails from '../../components/ShoppingCard/PayDetails/PayDetails';
import FullButton from '../../mainComponents/FullButton/FullButton';
import orderReq from '../../requests/oredrs';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    noItem: {
        alignSelf: 'center',
        padding: 53
    },
    paySection: {
        position: 'fixed',
        bottom: 100,
        width: '97%'
    }
})
const ShoppingCardContainer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const orderId = useSelector(state => state.orderId);
    const [cardList, setCardList] = useState({})
    
    const fetchOrders = async () => {
     
        if(orderId) 
        {
            try {
                dispatch({loading: true, type:'SHOW_LOADING'})
                const response = await orderReq('GET', orderId, null);
                setCardList(response.data);
                 
                dispatch({loading: false, type:'SHOW_LOADING'})
            } catch (error) {
                dispatch({loading: false, type:'SHOW_LOADING'})
            }
        } 
    }
    
    useEffect(() => {
        fetchOrders();
    },[])
    return(
        <div className={classes.root}>
            {
                
                cardList !== {} && cardList.items !== undefined ? cardList.items.length > 0 ?
                <React.Fragment>
                    <ShoppingCardList data={cardList !== {} ? cardList.items : null }/>
            <div className={classes.paySection}>
            <PayDetails 
                countItems={cardList !== {} ? cardList.items !== undefined ? cardList.items : 0 : 0} 
                totalAmount={cardList.totalAmount} 
                payableAmount={cardList.payableAmount}
                coupon={cardList.couponCode !== null ? 500 : 0}
                />
            <FullButton title='انتخاب آدرس' clicked={() => {history.push('/addresses')}}/>
            </div>
                </React.Fragment>
            : <span className={classes.noItem}>سبد خرید شما خالی است</span>
            :<span className={classes.noItem}>سبد خرید شما خالی است</span>
            }
        </div>
    )
}
export default ShoppingCardContainer;