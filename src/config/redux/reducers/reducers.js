import update from 'react-addons-update';

const initialState = {
    loading: false,
    products: [],
    orderId: 0,
    orders: [],
    currentOrder: [],
    phoneNumber: '',
    orderItemIds: [],
    orderCount: 0,
    addresses: [],
    shipments: [],
    shipmentOrder: {},
    token: localStorage.getItem('user-token') !== null ? localStorage.getItem('user-token') : null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS': {
             
            return {
                ...state,
                products: action.products
            }
        }
        case 'SET_ORDERS': {
            
            return {
                ...state,
                orders: action.orders
            }
        }
        case 'SET_ORDERID': {
            
            return {
                ...state,
                orderId: action.orderId
            }
        }
        case 'SET_TOKEN': {
              
            return {
                ...state,
                token: action.token
            }
        }

        case 'SHOW_LOADING': {
            return {
                ...state,
                loading: action.loading
            }
        }
        case 'SET_PHONENUMBER': {
            return {
                ...state,
                phoneNumber: action.phoneNumber
            }
        }
        case 'SET_CURRENT_ORDER': {
            debugger
            return {
                ...state,
                currentOrder: action.currentOrder
            }
        }
        case 'SET_ORDER_ITEM_IDS': {
             
            return{
                ...state,
                orderItemIds: [...state.orderItemIds, action.newItem]
            }
        }
        case 'UPDATE_ORDER_ITEM_IDS': {
            const j = state.orderItemIds.findIndex(i => i.id === action.item.id)
             
            return update(state, { 
                orderItemIds: { 
                  [j]: {
                    count: {$set: action.item.count}
                  }
                }
              });
        }
        case 'REMOVE_ORDER_ITEM_ID': {
             
            return {
                ...state,
                orderItemIds: [...state.orderItemIds.filter( val => val.id !== action.id )]
            }
        }
        case 'SET_ORDER_COUNT': {
             
           return{
               ...state,
               orderCount: action.orderCount
           }
       }
       case 'SET_SHIPMENT_ORDER' : {
           debugger
        return {
            ...state,
             shipmentOrder: action.shipmentOrder
        }
    }
       case 'SET_ADDRESSES' : {
           return {
               ...state,
                addresses: action.addresses
           }
       }
       case 'SET_SHIPMENTS' : {
        return {
            ...state,
             shipments: action.shipments
        }
    }
        default:
            return state;
    }
}
export default reducer;