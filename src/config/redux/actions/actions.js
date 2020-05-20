export const showLoading = loading => ({
    type: 'SHOW_LOADING',
    loading
})


//actions for changing language
export const setProducts = products => ({
    type: 'SET_PRODUCTS',
    products
})
//actions for changing language
export const setOrders = orders => ({
    type: 'SET_ORDERS',
    orders
})
export const setOrderId = orderId => ({
    type: 'SET_ORDERID',
    orderId
})
export const setToken = token => ({
    type: 'SET_TOKEN',
    token
})
export const setPhoneNumber = phoneNumber => ({
    type: 'SET_PHONENUMBER',
    phoneNumber
})
export const setCurrentOrder = currentOrder => ({
    type: 'SET_CURRENT_ORDER',
    currentOrder
})
export const setOrderItemIds = newItem => ({
    type: 'SET_ORDER_ITEM_IDS',
    newItem
})
export const updateOrderItemIds = item => ({
    type: 'UPDATE_ORDER_ITEM_IDS',
    item
})
export const removeOrderItemId = id => ({
    type: 'REMOVE_ORDER_ITEM_ID',
    id
})
export const setOrderCount = orderCount => ({
    type: 'SET_ORDER_COUNT',
    orderCount
})
export const setShipmentOrder = shipmentOrder => ({
    type: 'SET_SHIPMENT_ORDER',
    shipmentOrder
})
export const setAddresses = addresses => {
    type: 'SET_ADDRESSES',
    addresses
}
export const setShipments = shipments => {
    type: 'SET_SHIPMENTS',
    shipments
}