import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import AddToShoppingCard from '../../../mainComponents/AddToShoppingCard/AddToShoppingCard';
import AddOrRemoveFromShCard from '../../../mainComponents/AddOrRemove/AddOrRemoveFromShCard';
import { Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import axiosTest from '../../../config/axiosTest';
import axiosInstance from '../../../config/axios'; 
import currency from '../../../filtering/currency';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 10,
    height: 140,
    borderRadius: 10,
    justifyContent: 'space-around'
  },
  addOrRemove: {
    padding: 0
  },
  rightSide: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    paddingTop: 5,
  },
  weight: {
    fontSize: 12,
    color: '#9A9A9A',
  },
  weightOff: {
    fontSize: 14,
    fontWeight: 600,
    color: '#36CE91'
  },
  prices: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: 45,
    marginTop: 5
  },
  ratingcomp: {
    marginLeft: 20
  },
  data : {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'inherit',
    width: '75%'
  },
  content: {
    flex: '1 0 auto',
    width: "100%"
  },
  cover: {
    width: 50,
    height: 50
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  delete: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  deleteIcon: {
    fontSize: 25,
    color: '#E2574C',
    alignSelf: 'center'
  },
  deleteText: {
    fontSize: 10,
    color: '#E2574C',
    alignSelf: 'center'
  },
}));

export default function SingleShoppedProduct(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const orderId = useSelector(state => state.orderId);
  const orders = useSelector(state => state.orders);
  const orderItemIds = useSelector(state => state.orderItemIds);
  const [productItem, setProductItem] = useState({});
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(props.product.count);
  const addToShoppingCardFunc = async() => {
    if(orders.length > 0) {
      debugger

      if(orderId === 0)
      {
        await createOrder();
      }
      else {

        await updateOrderItem();
           
      }
    }
    else await createOrder();
}
const checkExistItem = () => {
   debugger
  const reducerItems = orderItemIds.filter(i => i.itemId === productItem.id);
   debugger
  if(reducerItems.length > 0)
   return reducerItems[0] 
  else return null;
}
const updateCountItem = async (item) => {
  try {
    debugger
    const obj = {
      inventoryId: props.product.inventoryId,
      count: count+1,
      fee: price,
      productItemId: item.itemId,
      productId: props.product.productId
    };
    debugger

    const objectItem = {
      id: item.id,
      count: item.count+1,
      itemId: item.itemId
    }
    debugger
     
    axiosTest.defaults.headers.common["user_id"] = "xxx";
    dispatch({item: objectItem, type: 'UPDATE_ORDER_ITEM_IDS' })
    setCount(item.count+1)
  
    const response = await axiosTest.put(`/v1/xxx/order/${orderId}/item/${item.id}`,obj);
     await getOrderById(orderId);
  } catch (error) {
    
  }
}
const updateOrderItem = async() => {
  try {
    debugger
     
    // const orderItem = currentOrder.items
    const exist = checkExistItem();
    debugger
    if(exist !== null) {
      await updateCountItem(exist);
    }
    else {
      addNewItemToOrder(orderId); 
    }
    
  } catch (error) {
    
  }
}
const addNewItemToOrder = async (id) => {
  try {
  const obj = {
    inventoryId: props.product.inventoryId,
    count: count+1,
    fee: price,
    productItemId: productItem.id,
    productId: productItem.product.id
  };
   debugger
  const response =await axiosTest.post(`/v1/xxx/order/${id}/item`,obj);
   
  const objItem = {
    id: response.data.id,
    count: 1,
    itemId: productItem.id
  } 
  debugger
  dispatch({newItem: objItem, type: 'SET_ORDER_ITEM_IDS'});

  setCount(count+1)
   
  } catch (error) {
    
  }
}
const createOrder = async () => {
  debugger
  try {

    const data = {
      owner: '',
      status: 'PENDING',
      items: []
    }
    axiosTest.defaults.headers.common["user_id"] = "xxx";
    const response = await axiosTest.post('/v1/xxx/order', data);
     
    await getOrderById(response.data.id);
    dispatch({orderId: response.data.id, type: 'SET_ORDERID'});
    await addNewItemToOrder(response.data.id);
    debugger
  } catch (error) {
    
  }
}
const getOrderById = async (id) => {
  axiosTest.defaults.headers.common["user_id"] = "xxx";
  const response =await axiosTest.get(`/v1/xxx/order/${id}`);
  dispatch({currentOrder: response.data, type: 'SET_CURRENT_ORDER'});
}
const getProductItem = async () => {
  try {
    axiosTest.defaults.headers.common['user_id'] = 'xxx'
    // const response = await axiosInstance.get(`/product/${props.pid}/item/${props.product.id}`)
    debugger
    const priceItem = await axiosInstance.get(`/product/${props.product.productId}/item/${props.product.productItemId}/pricing`)      
    const pItem = priceItem.data[0].item;
    setProductItem(pItem);      
    setPrice(priceItem.data[0].amount);
    debugger
    const orderItem = orderItemIds.filter(i => i.itemId === pItem.id);
    if(orderItem.length > 0){
      setCount(orderItem[0].count)
    }

  } catch (error) {
    debugger
    
  }
}
const addItem = () => {

}

const removeItem = async () => {
  const exist = checkExistItem();
  if(exist !== null){
    debugger
    if(exist.count !== 1) {
      try {
        const obj = {
          inventoryId: props.product.inventoryId,
          count: count-1,
          fee: price,
          productItemId: exist.itemId,
          productId: props.pid
        };
        
        const objItem = {
          id: exist.id,
          count: exist.count-1,
          itemId: exist.itemId
        }
        debugger
        dispatch({item: objItem, type: 'UPDATE_ORDER_ITEM_IDS'})
        setCount(count-1);
        const response = await axiosTest.put(`/v1/xxx/order/${orderId}/item/${exist.id}`,obj);
        await getOrderById(orderId)
      } catch (error) {
        
      }
    }
    else {
      try {
                await deleteFullItem(exist);
      } catch (error) {
        
      }
    }
    
  }
  

}
const deleteFullItem = async() => {
  try{
      debugger
    const exist = checkExistItem();
    const response = await axiosTest.delete(`/v1/xxx/order/${orderId}/item/${exist.id}`);

    
        dispatch({id: exist.id, type: 'REMOVE_ORDER_ITEM_ID'});
        await getOrderById(orderId);
        setCount(0)
  }  
  catch(error){
    console.log(error)
  }
}
useEffect(() => {
  getProductItem();
},[])

  return (
      

    <Card className={classes.root}>
    <div className={classes.rightSide}>
    <CardMedia
        className={classes.cover}
        image={`http://185.147.161.71:8080/${productItem.images !== undefined ? productItem.images[0] : ''}.jpg`}
        title={productItem.title}
      />
      <div className={classes.delete}>
      <DeleteIcon onClick={deleteFullItem} className={classes.deleteIcon}/>
      <span className={classes.deleteText}>حذف</span>
      </div>  
    </div>
     
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.data}>
          <span className={classes.name}>
            {productItem.title} 
          </span>
            <div  className={classes.addOrRemove}>
          <AddOrRemoveFromShCard removeItem={() => {removeItem()}} addItem={() => {addToShoppingCardFunc()}} count={count}/>

            </div>
          </div>
          
          <Divider variant="light"/>
         <div className={classes.prices}>
         <div className={classes.data}>
            <span className={classes.weight}>قیمت اصلی</span>
            <span className={classes.weight}>{currency(price/10)} تومان</span>
          </div>
          <div className={classes.data}>
            <span className={classes.weight}>قیمت روبیکا</span>
            <span className={classes.weightOff}>{currency(price/10)} تومان</span>
          </div>
         </div>
        </CardContent>
        
      </div>
      
    </Card>
  );
}