import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import AddToShoppingCard from '../../../../mainComponents/AddToShoppingCard/AddToShoppingCard';
import AddOrRemoveFromShCard from '../../../../mainComponents/AddOrRemove/AddOrRemoveFromShCard'
import { Divider } from '@material-ui/core';
import Label from '../../../../mainComponents/label/label';
import { useSelector, useDispatch } from 'react-redux';
import oredrReq from '../../../../requests/oredrs';
import axiosTest from '../../../../config/axiosTest';
import axiosInstance from '../../../../config/axios';
import currency from '../../../../filtering/currency';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 10,
    height: 140,
    borderRadius: 10,
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    padding: '0 0 0 20px'
  },
  nameHeight: {
    height: 40
  },
  weight: {
    fontSize: 13,
    color: '#9A9A9A'
  },
  ratingcomp: {
    marginLeft: 20
  },
  price: {
    fontSize: 13,
    color: '#36CE91',
    marginTop: 10
  },
  addOrRemove: {
    marginRight: 30
  },
  priceAfterOff: {
    fontSize: 13,
    color: '#36CE91',
    marginTop: 0,
    fontWeight: 600
  },
  offAmount: {
    fontSize: 11,
    color: '#E2574C',
    textDecoration: 'line-through',
    fontWeight: 600
  },
  addOrRemoveContainer: {
    padding: '4px 14px'
  },
  data : {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  dataShop : {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0
  },
  priceOff : {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 3,
    marginTop: 5
  },
  
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%'
  },
  content: {
    flex: '1 0 auto',
    width: "100%",
    padding: "10px 16px"
  },
  cover: {
    width: 127
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  label: {
    left: 20,
    position: 'absolute'
  },
  
}));

const SingleProductItem = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const orderId = useSelector(state => state.orderId);
  const orders = useSelector(state => state.orders);
  const orderItemIds = useSelector(state => state.orderItemIds);
  const [productItem, setProductItem] = useState({});
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(0);
  const addToShoppingCardFunc = async() => {
      if(orders.length > 0) {

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
     
    const reducerItems = orderItemIds.filter(i => i.itemId === productItem.id);
     
    if(reducerItems.length > 0)
     return reducerItems[0] 
    else return null;
  }
  const updateCountItem = async (item) => {
    try {
      const obj = {
        inventoryId: props.product.inventories[0].id,
        count: count+1,
        fee: price,
        productItemId: item.itemId,
        productId: props.pid
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
       
      // const orderItem = currentOrder.items
      const exist = checkExistItem();
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
      inventoryId: props.product.inventories[0].id,
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
    await getOrderById(id)
    setCount(count+1)
     
    } catch (error) {
      
    }
  }
  const createOrder = async () => {
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
      
      const priceItem = await axiosInstance.get(`/product/${props.pid}/item/${props.product.id}/pricing`)      
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
            inventoryId: props.product.inventories[0].id,
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
          const response = await axiosTest.delete(`/v1/xxx/order/${orderId}/item/${exist.id}`);
          dispatch({id: exist.id, type: 'REMOVE_ORDER_ITEM_ID'});
          setCount(0);
          await getOrderById(orderId);         
        } catch (error) {
          
        }
      }
      
    }
    

  }
  useEffect(() => {
    getProductItem();
  },[])
  return (
    
    <Card className={classes.root}>
    {/* <div className={classes.label}>
    <Label discount="25%" className={classes.labelText}/>

    </div> */}
    <CardMedia
        className={classes.cover}
        image={`http://185.147.161.71:8080/${productItem.images !== undefined ? productItem.images[0] : ''}.jpg`}
        title={productItem.title}
      />
     
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.nameHeight}>
            <p className={classes.name}>
              {productItem.title}
            </p>
          </div>
          <div className={classes.data}>
          <span className={classes.weight}>
            واحد: {productItem && productItem.product!== undefined ?  productItem.product.unit === 'KILO' ? 'کیلوگرم' : 'گرم' : ''}
          </span>
          </div>
          <Divider variant="light"/>
          <div className={classes.dataShop}>
          <div className={classes.priceOff}>
          <span className={!props.product.off ? classes.price : classes.priceAfterOff}>
            {currency(price/10)} تومان
          </span>
          {
            props.product.off ?
            <span className={classes.offAmount}>12000تومان</span>
            : ''
          }
          </div>
          <div className={classes.addOrRemoveContainer}>
          <AddOrRemoveFromShCard removeItem={() => {removeItem()}} addItem={() => {addToShoppingCardFunc()}} count={count}/>

          </div>
          {/* { 
            !props.product.number > 0 ?
            <AddToShoppingCard/>
            : <div className={classes.addOrRemove}>
            </div>
          } */}
          </div>
        </CardContent>
        
      </div>
      
    </Card>
  );
}
export default SingleProductItem;