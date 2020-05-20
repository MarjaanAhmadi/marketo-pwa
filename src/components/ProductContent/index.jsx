// @flow
import * as React from 'react';
import injectSheet from 'react-jss';
import productImages from '../../mocks/productImages';
import MostSellers from '../../components/Home/MostSellers/MostSellers'
import NotFound from '../NotFound';
import CarouselProductDetail from '../../mainComponents/Carousel/CarouselProductDetail';
import AddOrRemoveFromShCard from '../../mainComponents/AddOrRemove/AddOrRemoveFromShCard';
import axiosTest from '../../config/axiosTest';


const styles = theme => ({
  wrapper: {
    padding: '5px 0',
    width: '100%',
  
  },
  carouselItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    padding: '10px 0',
    marginTop: 5
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '10px',
    marginTop: 5
  },
  details: {
    color: '#9A9A9A',
    fontSize: 14,
    fontWeight: 700
  },
  title: {
    color: '#9A9A9A',
    fontSize: 16,
    fontWeight: 700
  },
  extraInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5
  },
  priceInfo: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '62%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '10px 15px'
  },
  addClasses: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '35%%',
    padding: '2px 0'
  },
  
  offPrice: {
    fontSize: 15,
    color: "#36CE91",
    fontWeight: 600,
    alignSelf: "center"
  },
  originalPrice: {
    fontSize: 13,
    color: "red",
    textDecoration: "line-through"
  },
  heading: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  content: {
    fontFamily: 'Georgia, serif',
    lineHeight: '1.8em',
    fontSize: 16,
    color: theme.baseColor,
    overflowWrap: 'break-word',
    '@media (min-width: 860px)': {
      fontSize: 21,
    },
    '& h3': {
      extend: 'heading',
      fontSize: 30,
      '@media (min-width: 860px)': {
        fontSize: 34,
      },
    },
    '& h4': {
      extend: 'heading',
      fontSize: 24,
      '@media (min-width: 860px)': {
        fontSize: 26,
      },
    },
    '& a': {
      color: theme.brandPrimary,
    },
    '& pre': {
      background: 'rgba(0,0,0,.05)',
      padding: 20,
      whiteSpace: 'pre-wrap',
      marginTop: 35,
      marginBottom: 0,
      fontSize: 14,
      '@media (min-width: 860px)': {
        fontSize: 16,
      },
    },
    '& pre+pre': {
      marginTop: 0,
      paddingTop: 4,
    },
    '& blockquote': {
      fontSize: 21,
      lineHeight: 1.4,
      letterSpacing: '-.005em',
      fontWeight: 400,
      fontStyle: 'italic',
      color: 'rgba(0,0,0,.58)',
      marginTop: 35,
      marginBottom: 35,
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      '@media (min-width: 860px)': {
        fontSize: 30,
      },
    },
    '& ol': {
      padding: 0,
      listStyle: 'none',
      listStyleImage: 'none',
      counterReset: 'post',
      '& li': {
        marginLeft: 30,
        marginBottom: 14,
        '&:before': {
          paddingRight: 12,
          counterIncrement: 'post',
          content: 'counter(post) "."',
          position: 'absolute',
          display: 'inline-block',
          boxSizing: 'border-box',
          width: 78,
          marginLeft: -78,
          textAlign: 'right',
        },
      },
    },
  },
  tag: {
    margin: [[50, 0]],
  },
  tagLabel: {
    color: theme.baseColor,
    padding: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 10,
    display: 'inline-block',
    fontSize: 14,
    '&:last-child': {
      marginRight: 0,
    },
    '&:hover': {
      backgroundColor: '#dddddd',
    },
  },
});

const dispatch = useDispatch();
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
      fee: price*(count+1),
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
    fee: price*(count+1),
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
          fee: price*(count-1),
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
        
      } catch (error) {
        
      }
    }
    else {
      try {
        const response = await axiosTest.delete(`/v1/xxx/order/${orderId}/item/${exist.id}`);
        dispatch({id: exist.id, type: 'REMOVE_ORDER_ITEM_ID'});
        setCount(0)          
      } catch (error) {
        
      }
    }
    
  }
  

}
useEffect(() => {
  getProductItem();
},[])



const ProductContent = (props) => {
  const { classes, isLoading } = props;

  return(
    
<div className={classes.wrapper}>
  <div className={classes.carouselItem}>
  <CarouselProductDetail 
      dots={true}
      slidesPerPage={1}
      rtl 
      keepDirectionWhenDragging
      data={productImages} />
      <span className={classes.title}>نام محصول</span>
  </div>
        <div className={classes.info}>
          <span className={classes.details}>
          مشخصات
          </span>
          <span className={classes.title}>
          برند: چوپان
        </span>
        <span className={classes.title}>
          وزن: 200 گرم
        </span>
        <span className={classes.title}>
          نوع: موسیر
        </span>
        </div>
        
        <div className={classes.extraInfo}>
          <div className={classes.priceInfo}>
            <span className={classes.offPrice}>12000 تومان</span>
            <span className={classes.originalPrice}>13000 تومان</span>
          </div>
          {/* <AddToShoppingCard/> */}
          <div className={classes.addClasses}>
           <AddOrRemoveFromShCard removeItem={() => {removeItem()}} addItem={() => {addToShoppingCardFunc()}} count={count}/>
          </div>
        </div>   
        <MostSellers/>     
        {/* {
        isLoading?
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <div className="placeholder" style={{ width: '100%' }} />
            <div className="placeholder" style={{ width: '100%' }} />
            <div className="placeholder" style={{ width: '50%' }} />
          </div>
        </div>
        :
         '' */}
      {/* } */}
      </div>
      
        
    
  )
}

export default injectSheet(styles)(ProductContent);
